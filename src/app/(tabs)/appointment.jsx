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
import web from "@styles/AppointmentStyle/web"
import mobile from "@styles/AppointmentStyle/mobile"
import { Toast } from "react-native-toast-notifications";

const styles = Platform.OS === 'web' ? web : mobile ;

export default function AppointmentScreen() {
  const [date, setDate] = useState(null);
  const [showDatepicker, setShowDatepicker] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [gender, setGender] = useState("");
  const storage = getStorage();
  const { user } = useUser();
  const router = useRouter();
  const [createPatient] = useMutation(CREATE_PATIENT_MUTATION);

  const db = getFirestore(app);

  const handleDateChange = (event, selectedDate) => {
    setShowDatepicker(false);
    setDate(selectedDate);
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

  const formatDateToMMDDYYYY = (date) => {
    if (!date) return "";
    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const year = d.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const onSubmitMethod = async (values, { resetForm }) => {
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
        offset: 30,
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
      values.userName = user.fullName;
      values.userEmail = user.primaryEmailAddress.emailAddress;
      values.sex = gender;
      values.dateOfBirth = date ? formatDateToMMDDYYYY(date) : "";
      values.address = values.address;

      await createPatient({
        variables: {
          profileImage: downloadUrl,
          email: user.primaryEmailAddress.emailAddress,
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
          placement: "center",
          animationType: "slide-in",
        });
        resetForm();
        router.push("/schedule");
      }
    } catch (error) {
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
          }}
          onSubmit={(values, { resetForm }) =>
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
            <View style={styles.InputContainer}>
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
                      setFieldValue("dateOfBirth", formatDateToMMDDYYYY(date));
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
                  onChange={(event, selectedDate) => {
                    handleDateChange(event, selectedDate);
                    setFieldValue("dateOfBirth", formatDateToMMDDYYYY(selectedDate));
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
                  <Picker.Item label="Select Gender" value="" style={styles.picker}/>
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
                color={Colors.PRIMARY}
                disabled={loading}
              />
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

