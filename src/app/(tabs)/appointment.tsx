import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
} from "react-native";
import { Formik } from "formik";
import * as ImagePicker from "expo-image-picker";
import { app } from "../../Firebase/Firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { useUser } from "@clerk/clerk-expo";
import { useMutation } from "@apollo/client";
import DateTimePicker from "@react-native-community/datetimepicker";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "@Utils/Colors";;
import { Picker } from "@react-native-picker/picker";
import PrimaryButton from "@/components/PrimaryButton";
import { useRouter } from "expo-router";
import { CREATE_PATIENT_MUTATION } from "@GraphQL/mutation";
import { Toast } from "react-native-toast-notifications";


type FormValuesProps = {
  userEmail: string | undefined;
  image: string
  patientName: string
  contactNumber: string
  height: string
  weight: string
  sex: string
  occupation: string
  dateOfBirth: string
  address: string
  statusAppointment: string
  email: string
  fullName: string
  user?: string
  userName: string

}

export default function AppointmentScreen() {

  const [date, setDate] = useState<Date | null>(null);
  const [showDatepicker, setShowDatepicker] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [image, setImage] = useState<string | null>(null);
  const [gender, setGender] = useState<string>("");
  const storage = getStorage();
  const { user } = useUser();
  const router = useRouter();
  const [createPatient] = useMutation(CREATE_PATIENT_MUTATION);

  const db = getFirestore(app);

  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    setShowDatepicker(false);
    setDate(selectedDate || new Date());
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const formatDateToMMDDYYYY = (date: Date) => {
    if (!date) return "";
    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const year = d.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const onSubmitMethod = async (values: FormValuesProps, { resetForm }: { resetForm: () => void }) => {
    if (
      !values.patientName ||
      !values.contactNumber ||
      !values.dateOfBirth ||
      !values.address ||
      !values.height ||
      !values.weight ||
      !gender ||
      !image ||
      !values.occupation
    ) {
      Toast.show("Please fill in all the required fields", {
        type: "danger",
        placement: "top",
        duration: 4000,
        animationType: "slide-in",
      });
      return;
    }
    setLoading(true);

    try {
      const resp = await fetch(image);
      const blob = await resp.blob();
      const storageRef = ref(storage, "UserImages/" + Date.now() + ".png");
      await uploadBytes(storageRef, blob);
      const downloadUrl = await getDownloadURL(storageRef);

      values.image = downloadUrl;
      values.userName = user?.fullName ?? '';
      values.userEmail = user?.primaryEmailAddress?.emailAddress;
      values.sex = gender;
      values.dateOfBirth = date ? formatDateToMMDDYYYY(date) : "";
      values.address = values.address;

      await createPatient({
        variables: {
          profileImage: downloadUrl,
          email: user?.primaryEmailAddress?.emailAddress,
          fullName: values.patientName,
          contactNumber: values.contactNumber,
          sex: values.sex,
          statusAppointment: "Pending",
          dateOfBirth: values.dateOfBirth,
          address: values.address,
          height: values.height,
          occupation: values.occupation,
          weight: values.weight,
        },
      });

      const docRef = await addDoc(collection(db, "CreateAppointment"), values);
      if (docRef.id) {
        setLoading(false);
        Toast.show("Appointment Created successfully", {
          type: "success",
          placement: "top",
          duration: 4000,
          animationType: "slide-in",
        });
        resetForm();
        router.push("/schedule");
      }
    } catch (error: any) {
      setLoading(false);
      Toast.show(error.message, {
        type: "danger",
        placement: "top",
        duration: 4000,
        animationType: "slide-in",
      });
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Appointment Now</Text>
        <Text style={styles.subtitle}>
          Upload your profile picture and fill out the appointment details
        </Text>
        <View>
          <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
            {image ? (
              <Image source={{ uri: image }} style={styles.image} />
            ) : (
              <Image
                source={require("../../assets/images/placeholder.png")}
                style={styles.image}
              />
            )}
          </TouchableOpacity>
        </View>
        <Formik
          initialValues={{
            image: "",
            patientName: "",
            contactNumber: "",
            height: "",
            weight: "",
            sex: "",
            occupation: "",
            dateOfBirth: "",
            address: "",
            statusAppointment: "",
            email: "",
            fullName: "",
            user: "",
            userName: "",
            userEmail: "",

          }}
          onSubmit={(values: FormValuesProps, { resetForm }) =>
            onSubmitMethod(values, { resetForm })
          }
        >
          {({
            handleSubmit,
            values,
            handleChange,
            handleBlur,
            setFieldValue,
          }) => (
            <View style={styles.container}>
              <TextInput
                placeholder="Patient Name (Last Name, First M)"
                style={styles.input}
                onChangeText={handleChange("patientName")}
                onBlur={handleBlur("patientName")}
                value={values.patientName}
              />
              <TextInput
                placeholder="Contact Number"
                style={styles.input}
                onChangeText={handleChange("contactNumber")}
                onBlur={handleBlur("contactNumber")}
                value={values.contactNumber}
                keyboardType="numeric"
              />
              <TouchableOpacity
                onPress={() => setShowDatepicker(true)}
                style={styles.datePickerContainer}
              >
                <Text style={styles.dateText}>
                  {!date ? "Date of Birth (MM/DD/YYYY)" : formatDateToMMDDYYYY(date)}
                </Text>
                <MaterialIcons
                  name="calendar-today"
                  size={24}
                  color={Colors.GRAY}
                />
              </TouchableOpacity>
              {Platform.OS === "web" && showDatepicker && (
                <View style={styles.WebCalendarStyle}>
                  <DatePicker
                    selected={date}
                    onChange={date => {
                      setDate(date);
                      setFieldValue("dateOfBirth", formatDateToMMDDYYYY(date || new Date()));
                      setShowDatepicker(false);
                    }}
                    dateFormat="MM/dd/yyyy"
                    showYearDropdown
                    yearDropdownItemNumber={10000}
                    scrollableYearDropdown
                    inline
                  />
                </View>
              )}
              {Platform.OS !== "web" && showDatepicker && (
                <DateTimePicker
                  mode="date"
                  value={date || new Date()}
                  onChange={(event: any, selectedDate: Date | undefined) => {
                    handleDateChange(event, selectedDate);
                    setFieldValue("dateOfBirth", formatDateToMMDDYYYY(selectedDate || new Date()));
                  }}
                />
              )}

              <TextInput
                placeholder="Address"
                style={styles.input}
                onChangeText={handleChange("address")}
                onBlur={handleBlur("address")}
                value={values.address}
              />

              <TextInput
                placeholder="Height"
                style={styles.input}
                onChangeText={handleChange("height")}
                onBlur={handleBlur("height")}
                value={values.height}
              />
              <TextInput
                placeholder="Weight"
                style={styles.input}
                onChangeText={handleChange("weight")}
                onBlur={handleBlur("weight")}
                value={values.weight}
              />
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={gender}
                  onValueChange={(itemValue) => setGender(itemValue)}
                  style={styles.picker}
                >
                  <Picker.Item label="Select Gender" value="" style={styles.picker} />
                  <Picker.Item label="Male" value="Male" />
                  <Picker.Item label="Female" value="Female" />
                </Picker>
              </View>
              <TextInput
                placeholder="Occupation"
                style={styles.input}
                onChangeText={handleChange("occupation")}
                onBlur={handleBlur("occupation")}
                value={values.occupation}
              />
              <PrimaryButton
                onPress={handleSubmit}
                title="Submit"
                textStyle={Colors.PRIMARY}
                disabled={loading}
              />
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 10,
  },
  scrollView: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: Colors.GRAY,
    marginBottom: 16,
    textAlign: 'center',
  },
  imagePicker: {
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 99,
    borderColor: Colors.PRIMARY,
    borderWidth: 1,
  },

  input: {
    height: 50,
    borderColor: Colors.WHITE,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 10,
    backgroundColor: Colors.WHITE,
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.WHITE,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 10,
    height: 50,
    justifyContent: 'space-between',
    backgroundColor: Colors.WHITE,
  },
  dateText: {
    fontSize: 16,
    color: Colors.GRAY,
  },
  pickerContainer: {
    borderColor: Colors.WHITE,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    height: 50,
    overflow: 'hidden',
    backgroundColor: Colors.WHITE,
  },
  picker: {
    height: 50,
    borderColor: Colors.WHITE,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: Colors.WHITE,
    padding: 5,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 5,
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  WebCalendarStyle: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 50,
  },
});


