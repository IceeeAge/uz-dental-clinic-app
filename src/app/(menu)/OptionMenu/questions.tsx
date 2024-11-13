import {
  View,
  Text,
  StyleSheet,
  Alert,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "@/constants/Colors";
import Checkbox from "expo-checkbox";
import { useUser } from "@clerk/clerk-expo";
import { GET_USER_QUESTIONNAIRE } from "@/GraphQL/Query";
import { useMutation, useQuery } from "@apollo/client";
import {
  GetUserQuestionnaireQuery,
  UpdateQuestionUserMutation,
} from "@/generated/graphql";
import { UPDATE_PATIENT_QUESTIONNAIRE } from "@/GraphQL/mutation";
import PrimaryButton from "@/components/PrimaryButton";
import { Toast } from "react-native-toast-notifications";

type SelectedOptions = {
  highBloodPressure: string | null;
  heartAttack: string | null;
  heartDisease: string | null;
  heartDiseaseSpecify: string | null;
  lowBloodPressure: string | null;
  leukemia: string | null;
  anemia: string | null;
  kidneyDisease: string | null;
  kidneyDiseaseSpecify: string | null;
  asthma: string | null;
  lungDisease: string | null;
  lungDiseaseSpecify: string | null;
  stroke: string | null;
  neurologicalDisorder: string | null;
  neurologicalDisorderSpecify: string | null;
  epilepsyConvulsions: string | null;
  brainInjury: string | null;
  psychiatricTreatment: string | null;
  diabetes: string | null;
  aidsHivInfection: string | null;
  congenitalDisease: string | null;
  congenitalDiseaseSpecify: string | null;
  hepatitis: string | null;
  liverDisorder: string | null;
  livErDisorderSpecify: string | null;
  jointDisorder: string | null;
  jointReplacementOrImplants: string | null;
  steroidTherapy: string | null;
  stomachTroublesUlcers: string | null;
  chestPains: string | null;
  frequentSoreThroat: string | null;
  persistentCough: string | null;
  difficultInBreathing: string | null;
  cancerOrTumor: string | null;
  radiationOrChemotherapy: string | null;
  recentWEightLoss: string | null;
  others: string | null;
  othersSpecify: string | null;
};

export default function Questions() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    highBloodPressure: null,
    heartAttack: null,
    heartDisease: null,
    heartDiseaseSpecify: null,
    lowBloodPressure: null,
    leukemia: null,
    anemia: null,
    kidneyDisease: null,
    kidneyDiseaseSpecify: null,
    asthma: null,
    lungDisease: null,
    lungDiseaseSpecify: null,
    stroke: null,
    neurologicalDisorder: null,
    neurologicalDisorderSpecify: null,
    epilepsyConvulsions: null,
    brainInjury: null,
    psychiatricTreatment: null,
    diabetes: null,
    aidsHivInfection: null,
    congenitalDisease: null,
    congenitalDiseaseSpecify: null,
    hepatitis: null,
    liverDisorder: null,
    livErDisorderSpecify: null,
    jointDisorder: null,
    jointReplacementOrImplants: null,
    steroidTherapy: null,
    stomachTroublesUlcers: null,
    chestPains: null,
    frequentSoreThroat: null,
    persistentCough: null,
    difficultInBreathing: null,
    cancerOrTumor: null,
    radiationOrChemotherapy: null,
    recentWEightLoss: null,
    others: null,
    othersSpecify:null
  });

  const { user } = useUser();

  const { loading, error, data } = useQuery<GetUserQuestionnaireQuery>(
    GET_USER_QUESTIONNAIRE,
    {
      variables: { email: user?.emailAddresses[0]?.emailAddress },
      skip: !user?.emailAddresses[0]?.emailAddress,
    }
  );

  const patientData = data?.patients[0];

  const [updatePatient] = useMutation<UpdateQuestionUserMutation>(
    UPDATE_PATIENT_QUESTIONNAIRE
  );

  const handleOptionChange = (key: keyof SelectedOptions) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [key]: prevOptions[key] === "Yes" ? "No" : "Yes",
    }));
  };
  
  useEffect(() => {
    if (patientData) {
      setSelectedOptions({
        highBloodPressure: patientData.highBloodPressure || null,
        heartAttack: patientData.heartAttack || null,
        heartDisease: patientData.heartDisease || null,
        heartDiseaseSpecify: patientData.heartDiseaseSpecify || null,
        lowBloodPressure: patientData.lowBloodPressure || null,
        leukemia: patientData.leukemia || null,
        anemia: patientData.anemia || null,
        kidneyDisease: patientData.kidneyDisease || null,
        kidneyDiseaseSpecify: patientData.kidneyDiseaseSpecify || null,
        asthma: patientData.asthma || null,
        lungDisease: patientData.lungDisease || null,
        lungDiseaseSpecify: patientData.lungDiseaseSpecify || null,
        stroke: patientData.stroke || null,
        neurologicalDisorder: patientData.neurologicalDisorder || null,
        neurologicalDisorderSpecify:
          patientData.neurologicalDisorderSpecify || null,
        epilepsyConvulsions: patientData.epilepsyConvulsions || null,
        brainInjury: patientData.brainInjury || null,
        psychiatricTreatment: patientData.psychiatricTreatment || null,
        diabetes: patientData.diabetes || null,
        aidsHivInfection: patientData.aidsHivInfection || null,
        congenitalDisease: patientData.congenitalDisease || null,
        congenitalDiseaseSpecify: patientData.congenitalDiseaseSpecify || null,
        hepatitis: patientData.hepatitis || null,
        liverDisorder: patientData.liverDisorder || null,
        livErDisorderSpecify: patientData.livErDisorderSpecify || null,
        jointDisorder: patientData.jointDisorder || null,
        jointReplacementOrImplants:
          patientData.jointReplacementOrImplants || null,
        steroidTherapy: patientData.steroidTherapy || null,
        stomachTroublesUlcers: patientData.stomachTroublesUlcers || null,
        chestPains: patientData.chestPains || null,
        frequentSoreThroat: patientData.frequentSoreThroat || null,
        persistentCough: patientData.persistentCough || null,
        difficultInBreathing: patientData.difficultInBreathing || null,
        cancerOrTumor: patientData.cancerOrTumor || null,
        radiationOrChemotherapy: patientData.radiationOrChemotherapy || null,
        recentWEightLoss: patientData.recentWEightLoss || null,
        others: patientData.others || null,
        othersSpecify: patientData.othersSpecify || null
      });
    }
  }, [patientData]);

 
  
  const handleSubmit = async () => {
    if (!patientData) {
      return;
    }
  
    setIsSubmitting(true);
    try {
      await updatePatient({
        variables: {
          id: patientData?.id, // Ensure this ID is available
          data: selectedOptions,
        },
      });
      Toast.show("Questionnaire updated successfully", {
        type: "normal",
        duration: 2000,
        placement:"center"
      })
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to update questionnaire");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.headerTitle}>
          Please check any of the following which you may have at present:
        </Text>
      </View>
      {/* no specify question  */}
      <View style={styles.questionGroupContainer}>
        {[
          {
            label: "High blood pressure",
            key: "highBloodPressure" as keyof SelectedOptions,
          },
          {
            label: "Heart attack",
            key: "heartAttack" as keyof SelectedOptions,
          },
        ].map(({ label, key }) => (
          <View key={key} style={styles.questionContainer}>
            <Checkbox
              value={selectedOptions[key] === "Yes"}
              onValueChange={() => handleOptionChange(key)}
              color={selectedOptions[key] === "Yes" ? Colors.GREEN : undefined}
            />
            <Text style={styles.questionText}>
              {label}:{" "}
              <Text style={styles.answerText}>
                {patientData?.[key] || "N/A"}
              </Text>
            </Text>
          </View>
        ))}
      </View>

      {/* specify questions */}
      <View style={styles.specifyContainer}>
        {[
          {
            label: "heartDisease",
            key: "heartDisease" as keyof SelectedOptions,
          },
        ].map(({ label, key }) => (
          <View key={key} style={styles.subSpecifyContainer}>
            <View style={styles.specifyInfo}>
              <Checkbox
                value={selectedOptions[key] === "Yes"}
                onValueChange={() => handleOptionChange(key)}
                color={
                  selectedOptions[key] === "Yes" ? Colors.GREEN : undefined
                }
              />
              <Text style={styles.questionText}>
                {label}:{" "}
                <Text style={styles.answerText}>
                  {patientData?.[key] || "N/A"}
                </Text>
              </Text>
            </View>

            {/* Input field for specifying heart disease */}
            {selectedOptions[key] === "Yes" && (
              <TextInput
                placeholder="Specify"
                value={selectedOptions.heartDiseaseSpecify || ""}
                onChangeText={(text) =>
                  setSelectedOptions((prevOptions) => ({
                    ...prevOptions,
                    heartDiseaseSpecify: text, // Update the correct key here
                  }))
                }
                style={styles.textInput}
                multiline={true}
                numberOfLines={8}
              />
            )}
          </View>
        ))}
      </View>

      {/* no specify question */}
      <View style={styles.questionGroupContainer}>
        {[
          {
            label: "Low blood pressure",
            key: "lowBloodPressure" as keyof SelectedOptions,
          },
          { label: "Leukemia", key: "leukemia" as keyof SelectedOptions },
          { label: "Anemia", key: "anemia" as keyof SelectedOptions },
        ].map(({ label, key }) => (
          <View key={key} style={styles.questionContainer}>
            <Checkbox
              value={selectedOptions[key] === "Yes"}
              onValueChange={() => handleOptionChange(key)}
              color={selectedOptions[key] === "Yes" ? Colors.GREEN : undefined}
            />
            <Text style={styles.questionText}>
              {label}:{" "}
              <Text style={styles.answerText}>
                {patientData?.[key] || "N/A"}
              </Text>
            </Text>
          </View>
        ))}
      </View>

      {/* specify questions */}
      <View style={styles.specifyContainer}>
        {[
          {
            label: "Kidney Disease",
            key: "kidneyDisease" as keyof SelectedOptions,
          },
        ].map(({ label, key }) => (
          <View key={key} style={styles.subSpecifyContainer}>
            <View style={styles.specifyInfo}>
              <Checkbox
                value={selectedOptions[key] === "Yes"}
                onValueChange={() => handleOptionChange(key)}
                color={
                  selectedOptions[key] === "Yes" ? Colors.GREEN : undefined
                }
              />
              <Text style={styles.questionText}>
                {label}:{" "}
                <Text style={styles.answerText}>
                  {patientData?.[key] || "N/A"}
                </Text>
              </Text>
            </View>

            {/* Input field for specifying heart disease */}
            {selectedOptions[key] === "Yes" && (
              <TextInput
                placeholder="Specify"
                value={selectedOptions.kidneyDiseaseSpecify || ""}
                onChangeText={(text) =>
                  setSelectedOptions((prevOptions) => ({
                    ...prevOptions,
                    kidneyDiseaseSpecify: text, // Update the correct key here
                  }))
                }
                style={styles.textInput}
                multiline={true}
                numberOfLines={8}
              />
            )}
          </View>
        ))}
      </View>

      {/* no specify question  */}
      <View style={styles.questionGroupContainer}>
        {[
          {
            label: "Asthma",
            key: "asthma" as keyof SelectedOptions,
          },
        ].map(({ label, key }) => (
          <View key={key} style={styles.questionContainer}>
            <Checkbox
              value={selectedOptions[key] === "Yes"}
              onValueChange={() => handleOptionChange(key)}
              color={selectedOptions[key] === "Yes" ? Colors.GREEN : undefined}
            />
            <Text style={styles.questionText}>
              {label}:{" "}
              <Text style={styles.answerText}>
                {patientData?.[key] || "N/A"}
              </Text>
            </Text>
          </View>
        ))}
      </View>

      {/* specify questions */}
      <View style={styles.specifyContainer}>
        {[
          {
            label: "Lung Disease",
            key: "lungDisease" as keyof SelectedOptions,
          },
        ].map(({ label, key }) => (
          <View key={key} style={styles.subSpecifyContainer}>
            <View style={styles.specifyInfo}>
              <Checkbox
                value={selectedOptions[key] === "Yes"}
                onValueChange={() => handleOptionChange(key)}
                color={
                  selectedOptions[key] === "Yes" ? Colors.GREEN : undefined
                }
              />
              <Text style={styles.questionText}>
                {label}:{" "}
                <Text style={styles.answerText}>
                  {patientData?.[key] || "N/A"}
                </Text>
              </Text>
            </View>

            {/* Input field for specifying heart disease */}
            {selectedOptions[key] === "Yes" && (
              <TextInput
                placeholder="Specify"
                value={selectedOptions.lungDiseaseSpecify || ""}
                onChangeText={(text) =>
                  setSelectedOptions((prevOptions) => ({
                    ...prevOptions,
                    lungDiseaseSpecify: text,
                  }))
                }
                style={styles.textInput}
                multiline={true}
                numberOfLines={8}
              />
            )}
          </View>
        ))}
      </View>

      {/* no specify question  */}
      <View style={styles.questionGroupContainer}>
        {[
          {
            label: "Stroke",
            key: "stroke" as keyof SelectedOptions,
          },
        ].map(({ label, key }) => (
          <View key={key} style={styles.questionContainer}>
            <Checkbox
              value={selectedOptions[key] === "Yes"}
              onValueChange={() => handleOptionChange(key)}
              color={selectedOptions[key] === "Yes" ? Colors.GREEN : undefined}
            />
            <Text style={styles.questionText}>
              {label}:{" "}
              <Text style={styles.answerText}>
                {patientData?.[key] || "N/A"}
              </Text>
            </Text>
          </View>
        ))}
      </View>

      {/* specify questions */}
      <View style={styles.specifyContainer}>
        {[
          {
            label: "Neurological disorder",
            key: "neurologicalDisorder" as keyof SelectedOptions,
          },
        ].map(({ label, key }) => (
          <View key={key} style={styles.subSpecifyContainer}>
            <View style={styles.specifyInfo}>
              <Checkbox
                value={selectedOptions[key] === "Yes"}
                onValueChange={() => handleOptionChange(key)}
                color={
                  selectedOptions[key] === "Yes" ? Colors.GREEN : undefined
                }
              />
              <Text style={styles.questionText}>
                {label}:{" "}
                <Text style={styles.answerText}>
                  {patientData?.[key] || "N/A"}
                </Text>
              </Text>
            </View>

            {/* Input field for specifying heart disease */}
            {selectedOptions[key] === "Yes" && (
              <TextInput
                placeholder="Specify"
                value={selectedOptions.neurologicalDisorderSpecify || ""}
                onChangeText={(text) =>
                  setSelectedOptions((prevOptions) => ({
                    ...prevOptions,
                    neurologicalDisorderSpecify: text,
                  }))
                }
                style={styles.textInput}
                multiline={true}
                numberOfLines={8}
              />
            )}
          </View>
        ))}
      </View>

      {/* no specify question  */}
      <View style={styles.questionGroupContainer}>
        {[
          {
            label: "Epilepsy/Convulsions",
            key: "epilepsyConvulsions" as keyof SelectedOptions,
          },
          {
            label: "brainInjury",
            key: "brainInjury" as keyof SelectedOptions,
          },
          {
            label: "Psychiatric Treatment",
            key: "psychiatricTreatment" as keyof SelectedOptions,
          },
          {
            label: "Diabetes",
            key: "diabetes" as keyof SelectedOptions,
          },
          {
            label: "AIDS/HIV infection",
            key: "aidsHivInfection" as keyof SelectedOptions,
          },
        ].map(({ label, key }) => (
          <View key={key} style={styles.questionContainer}>
            <Checkbox
              value={selectedOptions[key] === "Yes"}
              onValueChange={() => handleOptionChange(key)}
              color={selectedOptions[key] === "Yes" ? Colors.GREEN : undefined}
            />
            <Text style={styles.questionText}>
              {label}:{" "}
              <Text style={styles.answerText}>
                {patientData?.[key] || "N/A"}
              </Text>
            </Text>
          </View>
        ))}
      </View>

      {/* specify questions */}
      <View style={styles.specifyContainer}>
        {[
          {
            label: "Congenital Disease",
            key: "congenitalDisease" as keyof SelectedOptions,
          },
        ].map(({ label, key }) => (
          <View key={key} style={styles.subSpecifyContainer}>
            <View style={styles.specifyInfo}>
              <Checkbox
                value={selectedOptions[key] === "Yes"}
                onValueChange={() => handleOptionChange(key)}
                color={
                  selectedOptions[key] === "Yes" ? Colors.GREEN : undefined
                }
              />
              <Text style={styles.questionText}>
                {label}:{" "}
                <Text style={styles.answerText}>
                  {patientData?.[key] || "N/A"}
                </Text>
              </Text>
            </View>

            {/* Input field for specifying heart disease */}
            {selectedOptions[key] === "Yes" && (
              <TextInput
                placeholder="Specify"
                value={selectedOptions.congenitalDiseaseSpecify || ""}
                onChangeText={(text) =>
                  setSelectedOptions((prevOptions) => ({
                    ...prevOptions,
                    congenitalDiseaseSpecify: text,
                  }))
                }
                style={styles.textInput}
                multiline={true}
                numberOfLines={8}
              />
            )}
          </View>
        ))}
      </View>

      {/* no specify question  */}
      <View style={styles.questionGroupContainer}>
        {[
          {
            label: "Hepatitis",
            key: "hepatitis" as keyof SelectedOptions,
          },
        ].map(({ label, key }) => (
          <View key={key} style={styles.questionContainer}>
            <Checkbox
              value={selectedOptions[key] === "Yes"}
              onValueChange={() => handleOptionChange(key)}
              color={selectedOptions[key] === "Yes" ? Colors.GREEN : undefined}
            />
            <Text style={styles.questionText}>
              {label}:{" "}
              <Text style={styles.answerText}>
                {patientData?.[key] || "N/A"}
              </Text>
            </Text>
          </View>
        ))}
      </View>

      {/* specify questions */}
      <View style={styles.specifyContainer}>
        {[
          {
            label: "Liver Disorder",
            key: "liverDisorder" as keyof SelectedOptions,
          },
        ].map(({ label, key }) => (
          <View key={key} style={styles.subSpecifyContainer}>
            <View style={styles.specifyInfo}>
              <Checkbox
                value={selectedOptions[key] === "Yes"}
                onValueChange={() => handleOptionChange(key)}
                color={
                  selectedOptions[key] === "Yes" ? Colors.GREEN : undefined
                }
              />
              <Text style={styles.questionText}>
                {label}:{" "}
                <Text style={styles.answerText}>
                  {patientData?.[key] || "N/A"}
                </Text>
              </Text>
            </View>

            {/* Input field for specifying heart disease */}
            {selectedOptions[key] === "Yes" && (
              <TextInput
                placeholder="Specify"
                value={selectedOptions.livErDisorderSpecify || ""}
                onChangeText={(text) =>
                  setSelectedOptions((prevOptions) => ({
                    ...prevOptions,
                    livErDisorderSpecify: text,
                  }))
                }
                style={styles.textInput}
                multiline={true}
                numberOfLines={8}
              />
            )}
          </View>
        ))}
      </View>

      {/* no specify question  */}
      <View style={styles.questionGroupContainer}>
        {[
          {
            label: "Joint Disorder",
            key: "jointDisorder" as keyof SelectedOptions,
          },
          {
            label: "Joint Replacement Or Implants",
            key: "jointReplacementOrImplants" as keyof SelectedOptions,
          },
          {
            label: "Steroid Therapy",
            key: "steroidTherapy" as keyof SelectedOptions,
          },
          {
            label: "Stomach troubles/Ulcers",
            key: "stomachTroublesUlcers" as keyof SelectedOptions,
          },
          {
            label: "Chest pains",
            key: "chestPains" as keyof SelectedOptions,
          },
          {
            label: "Frequent sore throat",
            key: "frequentSoreThroat" as keyof SelectedOptions,
          },
          {
            label: "Persistent cough",
            key: "persistentCough" as keyof SelectedOptions,
          },
          {
            label: "Difficult in breathing",
            key: "difficultInBreathing" as keyof SelectedOptions,
          },
          {
            label: "Cancer or Tumor",
            key: "cancerOrTumor" as keyof SelectedOptions,
          },
          {
            label: "Radiation or Chemotherapy",
            key: "radiationOrChemotherapy" as keyof SelectedOptions,
          },
          {
            label: "Recent weight loss",
            key: "recentWEightLoss" as keyof SelectedOptions,
          },
        ].map(({ label, key }) => (
          <View key={key} style={styles.questionContainer}>
            <Checkbox
              value={selectedOptions[key] === "Yes"}
              onValueChange={() => handleOptionChange(key)}
              color={selectedOptions[key] === "Yes" ? Colors.GREEN : undefined}
            />
            <Text style={styles.questionText}>
              {label}:{" "}
              <Text style={styles.answerText}>
                {patientData?.[key] || "N/A"}
              </Text>
            </Text>
          </View>
        ))}
      </View>

      {/* specify questions */}
      <View style={styles.specifyContainer}>
        {[
          {
            label: "Others",
            key: "others" as keyof SelectedOptions,
          },
        ].map(({ label, key }) => (
          <View key={key} style={styles.subSpecifyContainer}>
            <View style={styles.specifyInfo}>
              <Checkbox
                value={selectedOptions[key] === "Yes"}
                onValueChange={() => handleOptionChange(key)}
                color={
                  selectedOptions[key] === "Yes" ? Colors.GREEN : undefined
                }
              />
              <Text style={styles.questionText}>
                {label}:{" "}
                <Text style={styles.answerText}>
                  {patientData?.[key] || "N/A"}
                </Text>
              </Text>
            </View>

            {/* Input field for specifying heart disease */}
            {selectedOptions[key] === "Yes" && (
              <TextInput
                placeholder="Specify"
                value={selectedOptions.othersSpecify || ""}
                onChangeText={(text) =>
                  setSelectedOptions((prevOptions) => ({
                    ...prevOptions,
                    othersSpecify: text,
                  }))
                }
                style={styles.textInput}
                multiline={true}
                numberOfLines={8}
              />
            )}
          </View>
        ))}
      </View>

      <View style={styles.submitContainer}>
        <PrimaryButton
          title={isSubmitting ? "Loading..." : "Save and Update"}
          onPress={handleSubmit}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 10
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 20,
  },

  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  questionGroupContainer: {
    padding: 10,
  },
  questionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  questionText: {
    fontSize: 16,
    marginLeft: 10,
  },
  answerText: {
    fontWeight: "bold",
  },
  submitContainer: {
    marginTop: 20,
    padding: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 5,
    marginLeft: 5,
    padding: 10,
    textAlignVertical: "top",
    marginTop: 5,
  },
  specifyContainer: {
    borderRadius: 8,
  },
  subSpecifyContainer: {
    borderRadius: 8,
    marginLeft: 10,
  },
  specifyInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
});
