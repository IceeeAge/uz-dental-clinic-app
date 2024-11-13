import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
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
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "@constants/Colors";
import { Picker } from "@react-native-picker/picker";
import PrimaryButton from "@/components/PrimaryButton";
import { useRouter } from "expo-router";
import { CREATE_PATIENT_MUTATION } from "@GraphQL/mutation";
import { Toast } from "react-native-toast-notifications";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


type FormValuesProps = {
  userEmail: string | undefined;
  image: string;
  patientName: string;
  contactNumber: string;
  height: string;
  weight: string;
  sex: string;
  occupation: string;
  dateOfBirth: string;
  address: string;
  statusAppointment: string;
  email: string;
  fullName: string;
  user?: string;
  userName: string;
};

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

  const onSubmitMethod = async (
    values: FormValuesProps,
    { resetForm }: { resetForm: () => void }
  ) => {
    if (
      !values.patientName ||
      !values.contactNumber ||
      !values.address ||
      !values.height ||
      !values.weight ||
      !gender ||
      !image ||
      !values.occupation
    ) {
      Toast.show("Please fill in all the required fields", {
        type: "danger",
        placement: "bottom",
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
      values.userName = user?.fullName ?? "";
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
          statusAppointment: "PENDING",
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
          type: "normal",
          placement: "center",
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
        placement: "bottom",
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
            <View style={styles.formContainer}>
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
                  {!date
                    ? "Date of Birth (MM/DD/YYYY)"
                    : formatDateToMMDDYYYY(date)}
                </Text>
                <MaterialIcons
                  name="calendar-today"
                  size={24}
                  color={Colors.GRAY}
                />
              </TouchableOpacity>
              {Platform.OS === "web" && showDatepicker && (
                <View style={styles.datePickerWeb}>
                  <DatePicker
                    selected={date}
                    onChange={(date) => {
                      setDate(date);
                      setFieldValue(
                        "dateOfBirth",
                        formatDateToMMDDYYYY(date || new Date())
                      );
                      setShowDatepicker(false);
                    }}
                    dateFormat="MM/dd/yyyy"
                    showYearDropdown
                    showMonthDropdown
                    scrollableYearDropdown
                    inline
                  />
                </View>
              )}
              {Platform.OS !== "web" && showDatepicker && (
                <DateTimePicker
                  value={date || new Date()}
                  mode="date"
                  display="default"
                  onChange={handleDateChange}
                />
              )}
              <TextInput
                placeholder="Height (cm)"
                style={styles.input}
                onChangeText={handleChange("height")}
                onBlur={handleBlur("height")}
               value={values.height}
              />
              <TextInput
                placeholder="Weight (kg)"
                style={styles.input}
                onChangeText={handleChange("weight")}
                onBlur={handleBlur("weight")}
                value={values.weight}
              />
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={gender}
                  onValueChange={(itemValue) => setGender(itemValue)}
                  style={styles.inputPicker}
                >
                  <Picker.Item label="Select Gender" value="" />
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
              <TextInput
                placeholder="Address"
                style={styles.input}
                onChangeText={handleChange("address")}
                onBlur={handleBlur("address")}
                value={values.address}
              />
              <PrimaryButton
                title={loading ? "Submitting..." : "Submit"}
                onPress={() => handleSubmit()}
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
    maxWidth: 600,
    width: "100%",
    alignSelf: "center",
  },
  scrollView: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: Colors.PRIMARY,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: Colors.BLACK,
    paddingHorizontal: 20,
  },
  imagePicker: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginBottom: 20,

  },
  image: {
    width: 100,
    height: 100,
    borderColor:Colors.PRIMARY,
    borderWidth: 1,
    borderRadius:99,
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
  },
  datePickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
  },
  dateText: {
    flex: 1,
  },
  datePickerWeb: {
    marginVertical: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 5,
    marginVertical: 5,
    backgroundColor: "#fff",
  },
  inputPicker: {
    height: 50,
  },
});
