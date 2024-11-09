import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Button,
    Alert,
    ActivityIndicator,
    TextInput,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import Checkbox from "expo-checkbox";
  import { useUser } from "@clerk/clerk-expo";
  import { useMutation, useQuery } from "@apollo/client";
  import { GET_USER_DENTAL_INFORMATION } from "@/GraphQL/Query";
  import {
    GetUserDentalInformationQuery,
    UpdatePatientDentalInformationMutation,
  } from "@/generated/graphql";
  import { UPDATE_PATIENT_DENTAL_INFORMATION } from "@/GraphQL/mutation";
  import Colors from "@/constants/Colors";
  import { Ionicons } from '@expo/vector-icons'; 
  import DateTimePicker from '@react-native-community/datetimepicker';
import PrimaryButton from "@/components/PrimaryButton";
import { Toast } from "react-native-toast-notifications";
  
  const Options = {
    YES: "Yes",
    NO: "No",
    DK: "Don't Know",
  };
  
  // Define the selected options type
  type SelectedOptions = {
    bleedingGums: string | null;
    sensitive: string | null;
    foodTrap: string | null;
    dryMouth: string | null;
    pastGap: string | null;
    pastOrthodonic: string | null;
    problem: string | null;
    clicking: string | null;
    bruxing: string | null;
    sores: string | null;
    dentures: string | null;
    active: string | null;
    serious: string | null;
    earaches: string | null;
    dateOfLastExam: string; // Add this line for date of last exam
  };
  
  export default function DentalInformation() {
    const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
      bleedingGums: null,
      sensitive: null,
      foodTrap: null,
      dryMouth: null,
      pastGap: null,
      pastOrthodonic: null,
      problem: null,
      clicking: null,
      bruxing: null,
      sores: null,
      dentures: null,
      active: null,
      serious: null,
      earaches: null,
      dateOfLastExam: "", // Initialize this field
    });
  
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
    const [datePickerMode, setDatePickerMode] = useState('date');
    const [date, setDate] = useState(new Date());
  
    const { user } = useUser();
  
    // Query to get the user dental information
    const { loading, error, data } = useQuery<GetUserDentalInformationQuery>(
      GET_USER_DENTAL_INFORMATION,
      {
        variables: { email: user?.emailAddresses[0]?.emailAddress },
        skip: !user?.emailAddresses[0]?.emailAddress,
      }
    );
  
    const patientData = data?.patients[0];
  
    // Mutation to update user dental information
    const [updatePatient] = useMutation<UpdatePatientDentalInformationMutation>(
      UPDATE_PATIENT_DENTAL_INFORMATION
    );
  
    // Pre-fill the form with the patient's data
    useEffect(() => {
      if (patientData) {
        setSelectedOptions({
          bleedingGums: patientData.bleedingGums || null,
          sensitive: patientData.sensitive || null,
          foodTrap: patientData.foodTrap || null,
          dryMouth: patientData.dryMouth || null,
          pastGap: patientData.pastGap || null,
          pastOrthodonic: patientData.pastOrthodonic || null,
          problem: patientData.problem || null,
          clicking: patientData.clicking || null,
          bruxing: patientData.bruxing || null,
          sores: patientData.sores || null,
          dentures: patientData.dentures || null,
          active: patientData.active || null,
          serious: patientData.serious || null,
          earaches: patientData.earaches || null,
          dateOfLastExam: patientData.dateOfLastExam || "", // Pre-fill date of last exam
        });
      }
    }, [patientData]);
  
    const handleOptionChange = (key: keyof SelectedOptions, option: string) => {
      setSelectedOptions((prevOptions) => ({
        ...prevOptions,
        [key]: prevOptions[key] === option ? null : option,
      }));
    };
  
    // Input validation before submission
    const validateForm = () => {
      for (const key in selectedOptions) {
        if (
          key !== "dateOfLastExam" &&
          selectedOptions[key as keyof SelectedOptions] === null
        ) {
          return false;
        }
      }
      return true;
    };
  
    // Submit the updated data
    const handleSubmit = async () => {
      if (!validateForm()) {
        Toast.show("Questionnaire updated successfully", {
          type:"error",
          duration: 2000,
          placement:"center"
        })
        return;
      }
  
      setIsSubmitting(true);
  
      try {
        await updatePatient({
          variables: {
            id: patientData?.id, // Ensure this ID is available
            data: {
              ...selectedOptions,
              dateOfLastExam: selectedOptions.dateOfLastExam, // Include the date of last exam
            },
          },
        });
  
        Toast.show("Dental information updated successfully", {
          type: "success",
          duration: 2000,
          placement:"center"
        })
      } catch (error: any) {
        Toast.show(error.message, {
          type: "danger",
          placement: "center",
          duration: 4000,
          animationType: "slide-in",
        });
      } finally {
        setIsSubmitting(false);
      }
    };
  
    const showDatePicker = () => {
      setIsDatePickerVisible(true);
    };
  
    const onChangeDate = (event: any, selectedDate: Date | undefined) => {
      const currentDate = selectedDate || date;
      setIsDatePickerVisible(false);
      setDate(currentDate);
      setSelectedOptions((prev) => ({
        ...prev,
        dateOfLastExam: currentDate.toLocaleDateString(), // Format date as needed
      }));
    };
  
    if (loading) return <Text style={styles.loadingText}>Loading...</Text>;
    if (error) return <Text style={styles.errorText}>Error loading data</Text>;
  
    return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.dcontainer}>
          <View style={styles.dcontainer}>
            <Text style={styles.headerText}>
              Do you have any of the following diseases or problems?
            </Text>
  
            {/* First question container */}
            <View style={styles.questionGroupContainer}>
              {[
                { label: "Bleeding gums when brushing", key: "bleedingGums" },
                {
                  label: "Sensitive to cold, hot, sweet or pressure",
                  key: "sensitive",
                },
                { label: "Food trap between the teeth", key: "foodTrap" },
                { label: "Dry Mouth", key: "dryMouth" },
                { label: "Past gap treatment", key: "pastGap" },
                { label: "Past orthodontic treatment", key: "pastOrthodonic" },
                { label: "Problem with teeth", key: "problem" },
              ].map(({ label, key }) => (
                <View key={key} style={styles.questionContainer}>
                  <Text style={styles.questionText}>
                    {label}:{" "}
                    <Text style={styles.answerText}>
                      {patientData?.[key as keyof typeof patientData] || "N/A"}
                    </Text>
                  </Text>
                  <View style={styles.checkboxContainer}>
                    {Object.values(Options).map((option) => (
                      <View style={styles.option} key={option}>
                        <Checkbox
                          value={
                            selectedOptions[key as keyof SelectedOptions] ===
                            option
                          }
                          onValueChange={() =>
                            handleOptionChange(
                              key as keyof SelectedOptions,
                              option
                            )
                          }
                          color={
                            selectedOptions[key as keyof SelectedOptions] ===
                            option
                              ? Colors.GREEN
                              : undefined
                          }
                        />
                        <Text style={styles.optionText}>
                          {option === Options.DK
                            ? "Don't Know (DK)"
                            : option.toUpperCase()}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>
              ))}
            </View>
          </View>
  
          {/* Second questions */}
          <View style={styles.dcontainer}>
            <Text style={styles.headerText}>
              Do you have any other conditions?
            </Text>
            <View style={styles.questionGroupContainer}>
              {[
                { label: "Earaches or neck pains", key: "earaches" },
                { label: "Clicking, popping or jaws pain", key: "clicking" },
                { label: "Bruxing or grinding of teeth", key: "bruxing" },
                { label: "Sores or ulcers in the mouth", key: "sores" },
                { label: "Dentures or partials", key: "dentures" },
                { label: "Active recreational activities", key: "active" },
                { label: "Serious injury to your head or mouth", key: "serious" },
              ].map(({ label, key }) => (
                <View key={key} style={styles.questionContainer}>
                  <Text style={styles.questionText}>
                    {label}:{" "}
                    <Text style={styles.answerText}>
                      {patientData?.[key as keyof typeof patientData] || "N/A"}
                    </Text>
                  </Text>
                  <View style={styles.checkboxContainer}>
                    {Object.values(Options).map((option) => (
                      <View style={styles.option} key={option}>
                        <Checkbox
                          value={
                            selectedOptions[key as keyof SelectedOptions] ===
                            option
                          }
                          onValueChange={() =>
                            handleOptionChange(
                              key as keyof SelectedOptions,
                              option
                            )
                          }
                          color={
                            selectedOptions[key as keyof SelectedOptions] ===
                            option
                              ? Colors.GREEN
                              : undefined
                          }
                        />
                        <Text style={styles.optionText}>
                          {option === Options.DK
                            ? "Don't Know (DK)"
                            : option.toUpperCase()}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>
              ))}
            </View>
          </View>
  
          {/* Date of last exam */}
          <View style={styles.dateContainer}>
            <Text style={styles.questionText}>
              Date of last exam and procedure:{" "}
              <Text style={styles.answerText}>
                {selectedOptions.dateOfLastExam || "N/A"}
              </Text>
            </Text>

            <Ionicons name="calendar" size={24} color="black"onPress={showDatePicker} />
        
            {isDatePickerVisible && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={onChangeDate}
              />
            )}
          </View>
  
          {/* Submit button */}
          <View style={styles.submitContainer}>
            <PrimaryButton
           title={isSubmitting ? "Loading..." : "Save and Update"}
           onPress={handleSubmit}
         
    
            />
    
          </View>
        </View>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    scrollContainer: {
      padding: 20,
    },
    dcontainer: {
      marginBottom: 20,
    },
    headerText: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
    },
    questionGroupContainer: {
      borderWidth: 1,
      borderColor: Colors.GRAY,
      borderRadius: 8,
      padding: 10,
      marginVertical: 10,
    },
    questionContainer: {
      marginVertical: 5,
    },
    questionText: {
      fontSize: 16,
      margin: 5,
    },
    answerText: {
      fontWeight: "bold",
    },
    checkboxContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 5,
    },
    option: {
      flexDirection: "row",
      alignItems: "center",
    },
    optionText: {
      marginLeft: 5,
    },
    dateContainer: {
      flexDirection: "column",
      borderWidth: 1,
      justifyContent: "space-between",
      padding: 10,
      borderRadius: 5,
      borderColor: Colors.GRAY,
      marginBottom: 30,
      alignItems: "center",
    },
    submitContainer: {
      marginTop: 20,
    },
    loadingText: {
      textAlign: "center",
      marginTop: 20,
    },
    errorText: {
      textAlign: "center",
      color: "red",
      marginTop: 20,
    },
  });
  