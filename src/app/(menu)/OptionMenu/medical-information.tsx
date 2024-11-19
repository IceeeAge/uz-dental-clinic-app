import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { GET_USER_MEDICAL_INFORMATION } from "@/GraphQL/Query";
import {
  GetUserMedicalInformationQuery,
  UpdatePatientMedicalInformationMutation,
} from "@/generated/graphql";
import { useMutation, useQuery } from "@apollo/client";
import { useUser } from "@clerk/clerk-expo";
import Colors from "@/constants/Colors";
import Checkbox from "expo-checkbox";
import { UPDATE_PATIENT_MEDICAL_INFORMATION } from "@/GraphQL/mutation";
import PrimaryButton from "@/components/PrimaryButton";
import { Toast } from "react-native-toast-notifications";

const Options = {
  YES: 'YES',
  NO: 'NO',
  DK: 'DK',
};
// Define the selected options type
type SelectedOptions = {
  careOfAPhysicians: string | null;
  physiciansName: string | null;
  phonePhysician: string | null;
  areYouInGoodHealth: string | null;
  anyChangesInYourHealth: string | null;
  hospitalization: string | null;
  prescriptionOrCounterMedications: string | null;
  allergies: string | null;
  specify: string | null;
  alcoholIntake: string | null;
  amoutAndFrequency: string | null;
  forWomen: string | null;
  lactating: string | null;
  ifYesWhatWasTheIllnessOrProblem: string | null;
  dateOfLastPhysicalExam: string | null;
  vitaminsNaturalOrHerbalSupplements: string | null;
};

export default function MedicalInformation() {
  const { user } = useUser();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    careOfAPhysicians: null,
    physiciansName: null,
    phonePhysician: null,
    areYouInGoodHealth: null,
    anyChangesInYourHealth: null,
    hospitalization: null,
    prescriptionOrCounterMedications: null,
    allergies: null,
    specify: null,
    alcoholIntake: null,
    amoutAndFrequency: null,
    forWomen: null,
    lactating: null,
    ifYesWhatWasTheIllnessOrProblem: null,
    dateOfLastPhysicalExam: "", // Initialize this field
    vitaminsNaturalOrHerbalSupplements: null,
  });

  // Query to get the user dental information
  const { loading, error, data } = useQuery<GetUserMedicalInformationQuery>(
    GET_USER_MEDICAL_INFORMATION,
    {
      variables: { email: user?.emailAddresses[0]?.emailAddress },
      skip: !user?.emailAddresses[0]?.emailAddress,
    }
  );

  const patientData = data?.patients[0];

  // Pre-fill the form with the patient's data
  useEffect(() => {
    if (patientData) {
      setSelectedOptions({
        careOfAPhysicians: patientData.careOfAPhysicians || null,
        physiciansName: patientData.physiciansName || null,
        phonePhysician: patientData.phonePhysician || null,
        areYouInGoodHealth: patientData.areYouInGoodHealth || null,
        anyChangesInYourHealth: patientData.anyChangesInYourHealth || null,
        hospitalization: patientData.hospitalization || null,
        prescriptionOrCounterMedications:
          patientData.prescriptionOrCounterMedications || null,
        allergies: patientData.allergies || null,
        specify: patientData.specify || null,
        alcoholIntake: patientData.alcoholIntake || null,
        amoutAndFrequency: patientData.amoutAndFrequency || null,
        forWomen: patientData.forWomen || null,
        lactating: patientData.lactating || null,
        ifYesWhatWasTheIllnessOrProblem:
          patientData.ifYesWhatWasTheIllnessOrProblem || null,
        dateOfLastPhysicalExam: patientData.dateOfLastPhysicalExam || null,
        vitaminsNaturalOrHerbalSupplements:
          patientData.vitaminsNaturalOrHerbalSupplements || null,
      });
    }
  }, [patientData]);

  const handleOptionChange = (key: keyof SelectedOptions, option: string) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [key]: prevOptions[key] === option ? null : option,
    }));
  };

  // Mutation to update user dental information
  const [updatePatient] = useMutation<UpdatePatientMedicalInformationMutation>(
    UPDATE_PATIENT_MEDICAL_INFORMATION
  );

  const validateForm = () => {
    for (const key in selectedOptions) {
      // Check if any field is either null or an empty string
      if (
        selectedOptions[key as keyof SelectedOptions] === null || 
        selectedOptions[key as keyof SelectedOptions] === ""
      ) {
        return false;
      }
    }
    return true;
  }
  

  const handleSubmit = async () => {
    if (!validateForm()) {
      Toast.show("Please fill in all the required fields", {
        type: "danger",
        placement: "center",
        duration: 4000,
        animationType: "slide-in",
      });
      return;
    }
    try {
      await updatePatient({
        variables: {
          id: patientData?.id,
          data: {
            careOfAPhysicians: selectedOptions.careOfAPhysicians,
            areYouInGoodHealth: selectedOptions.areYouInGoodHealth,
            anyChangesInYourHealth: selectedOptions.anyChangesInYourHealth,
            hospitalization: selectedOptions.hospitalization,
            physiciansName: selectedOptions.physiciansName,
            phonePhysician: selectedOptions.phonePhysician,
            prescriptionOrCounterMedications:
              selectedOptions.prescriptionOrCounterMedications,
            allergies: selectedOptions.allergies,
            specify: selectedOptions.specify,
            alcoholIntake: selectedOptions.alcoholIntake,
            amoutAndFrequency: selectedOptions.amoutAndFrequency,
            forWomen: selectedOptions.forWomen,
            lactating: selectedOptions.lactating,
            ifYesWhatWasTheIllnessOrProblem:
              selectedOptions.ifYesWhatWasTheIllnessOrProblem,
            dateOfLastPhysicalExam: selectedOptions.dateOfLastPhysicalExam,
            vitaminsNaturalOrHerbalSupplements:
              selectedOptions.vitaminsNaturalOrHerbalSupplements,
          },
        },
      });
      Toast.show("Medical information updated successfully", {
        type: "normal",
        duration: 2000,
        placement:"center"
      });
    } catch (error: any) {
       Toast.show(error.message, {
        type: "danger",
        placement: "center",
        duration: 4000,
        animationType: "slide-in",
       })
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.dcontainer}>
        <Text style={styles.headerText}>Fill up your medical information</Text>

        {/* First question container */}
        <View style={styles.questionGroupContainer}>
          {[
            {
              label: "Are you under the care of a physician",
              key: "careOfAPhysicians",
            },
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
                        selectedOptions[key as keyof SelectedOptions] === option
                      }
                      onValueChange={() =>
                        handleOptionChange(key as keyof SelectedOptions, option)
                      }
                      color={
                        selectedOptions[key as keyof SelectedOptions] === option
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
              <View>
                <TextInput
                  placeholder="Physician's Name"
                  value={selectedOptions.physiciansName || ""}
                  onChangeText={(text) =>
                    setSelectedOptions((prevOptions) => ({
                      ...prevOptions,
                      physiciansName: text,
                    }))
                  }
                  style={styles.textInput}
                />

                <TextInput
                  placeholder="Phone"
                  value={selectedOptions.phonePhysician || ""}
                  onChangeText={(text) =>
                    setSelectedOptions((prevOptions) => ({
                      ...prevOptions,
                      phonePhysician: text,
                    }))
                  }
                  style={styles.textInput}
                />
              </View>
            </View>
          ))}
        </View>

        {/* Second question container */}
        <View style={styles.questionGroupContainer}>
          {[
            { label: "Are you in good health?", key: "areYouInGoodHealth" },
            {
              label: "Any changes in your general health w/in the past year?",
              key: "anyChangesInYourHealth",
            },
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
                        selectedOptions[key as keyof SelectedOptions] === option
                      }
                      onValueChange={() =>
                        handleOptionChange(key as keyof SelectedOptions, option)
                      }
                      color={
                        selectedOptions[key as keyof SelectedOptions] === option
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
          <View>
            <TextInput
              placeholder="Condition and date of last physical exam"
              value={selectedOptions.dateOfLastPhysicalExam || ""}
              onChangeText={(text) =>
                setSelectedOptions((prevOptions) => ({
                  ...prevOptions,
                  dateOfLastPhysicalExam:text,
                  
                }))
              }
              style={styles.textInput}
            />
          </View>
        </View>

        {/* Third question container */}
        <View style={styles.questionGroupContainer}>
          {[
            {
              label: "Hospitalization in the past 5 years?",
              key: "hospitalization",
            },
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
                        selectedOptions[key as keyof SelectedOptions] === option
                      }
                      onValueChange={() =>
                        handleOptionChange(key as keyof SelectedOptions, option)
                      }
                      color={
                        selectedOptions[key as keyof SelectedOptions] === option
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
              <View>
                <TextInput
                  placeholder="If yes, what was the illness or problem?"
                  value={selectedOptions.ifYesWhatWasTheIllnessOrProblem || ""}
                  onChangeText={(text) =>
                    setSelectedOptions((prevOptions) => ({
                      ...prevOptions,
                      ifYesWhatWasTheIllnessOrProblem: text,
                    }))
                  }
                  style={styles.textInput}
                />
              </View>
            </View>
          ))}
        </View>

        {/* Fourth question container */}
        <View style={styles.questionGroupContainer}>
          {[
            {
              label:
                "Are you taking or have recently taken any prescription or over the counter medications",
              key: "prescriptionOrCounterMedications",
            },
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
                        selectedOptions[key as keyof SelectedOptions] === option
                      }
                      onValueChange={() =>
                        handleOptionChange(key as keyof SelectedOptions, option)
                      }
                      color={
                        selectedOptions[key as keyof SelectedOptions] === option
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
              <View>
                <TextInput
                  placeholder="If so, please list all, including vitamins, natural or herbal supplements?"
                  value={
                    selectedOptions.vitaminsNaturalOrHerbalSupplements || "" }
                  onChangeText={(text) =>
                    setSelectedOptions((prevOptions) => ({
                      ...prevOptions,
                      vitaminsNaturalOrHerbalSupplements: text,
                    }))
                  }
                  style={styles.textInput}
                />
              </View>
            </View>
          ))}
        </View>

        {/* Fourth question container */}
        <View style={styles.questionGroupContainer}>
          {[
            {
              label: "Allergies to food or medications?",
              key: "allergies",
            },
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
                        selectedOptions[key as keyof SelectedOptions] === option
                      }
                      onValueChange={() =>
                        handleOptionChange(key as keyof SelectedOptions, option)
                      }
                      color={
                        selectedOptions[key as keyof SelectedOptions] === option
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
              <View>
                <TextInput placeholder="Specify:"
                value={selectedOptions.specify || ""}
                onChangeText={(text) =>
                  setSelectedOptions((prevOptions) => ({
                    ...prevOptions,
                    specify: text,
                  }))
                }
                
                style={styles.textInput}
                 
                />
              </View>
            </View>
          ))}
        </View>

        {/* Fourth question container */}
        <View style={styles.questionGroupContainer}>
          {[{ label: "Alcohol intake?", key: "alcoholIntake" }].map(
            ({ label, key }) => (
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
                <View>
                  <TextInput
                    placeholder="Amount and Frequency"
                    value={selectedOptions.amoutAndFrequency || ""}
                    onChangeText={(text) =>
                      setSelectedOptions((prevOptions) => ({
                        ...prevOptions,
                        amoutAndFrequency: text,
                         
                      }))
                    }
                    style={styles.textInput}
                  />
                  <TextInput
                    placeholder="For Women, are you pregnant?"
                     value={selectedOptions.forWomen || ""}
                    onChangeText={(text) =>
                      setSelectedOptions((prevOptions) => ({
                        ...prevOptions,
                        forWomen: text,
                      }))
                    }
                    style={styles.textInput}
                  />
                  <TextInput
                    placeholder="Are you lactating?"
                    value={selectedOptions.lactating || ""}
                    onChangeText={(text) =>
                      setSelectedOptions((prevOptions) => ({
                        ...prevOptions,
                        lactating: text,
                      }))
                    }
                    style={styles.textInput}
                  />
                </View>
              </View>
            )
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
  container: {
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
    marginBottom: 10,
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
  textInput: {
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
