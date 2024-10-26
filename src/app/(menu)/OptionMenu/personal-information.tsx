import { View, Text, StyleSheet, ScrollView, ActivityIndicator, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { useUser } from '@clerk/clerk-expo';
import { GET_USER_PERSONAL_INFORMATION } from '@/GraphQL/Query';
import { UPDATE_PATIENT_INFORMATION } from '@/GraphQL/mutation';
import { GetUserPersonalInformationQuery, UpdatePatientInformationMutation } from '@/generated/graphql';
import Checkbox from 'expo-checkbox';
import Colors from '@/constants/Colors';
import PrimaryButton from '@/components/PrimaryButton';

interface SelectedOptions {
  tuberculosis: string | null;
  coughduration: string | null;
  coughWithBlood: string | null;
  beenExposed: string | null;
}

interface FormData {
  fullName?: string;
  contactNumber?: string;
  dateOfBirth?: string;
  height?: string;
  sex?: string;
  occupation?: string;
  emergencyContactName?: string;
  relationship?: string;
  relationshipNumber?: string;
  extraEmergencyContactName?: string;
  secondRelationshipNumber?: string;
}

const Options = {
  YES: 'YES',
  NO: 'NO',
  DK: 'DK',
};

export default function PersonalInformation() {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    tuberculosis: null,
    coughduration: null,
    coughWithBlood: null,
    beenExposed: null,
  });

  const [formData, setFormData] = useState<FormData>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loadingButton, setLoadingButton] = useState<boolean>(false); // Loading state for button

  const { user } = useUser();
  
  // Always call useQuery without conditions
  const { loading, error, data } = useQuery<GetUserPersonalInformationQuery>(GET_USER_PERSONAL_INFORMATION, {
    variables: { email: user?.emailAddresses[0]?.emailAddress },
    skip: !user?.emailAddresses[0]?.emailAddress,
  });

  const [updatePatient] = useMutation<UpdatePatientInformationMutation>(UPDATE_PATIENT_INFORMATION);

  useEffect(() => {
    if (data && data.patients.length > 0) {
      const patientData = data.patients[0];
      setSelectedOptions({
        tuberculosis: patientData.tuberculosis!,
        coughduration: patientData.coughduration!,
        coughWithBlood: patientData.coughWithBlood!,
        beenExposed: patientData.beenExposed!,
      });
      // Pre-fill form data
      setFormData({
        fullName: patientData.fullName!,
        contactNumber: patientData.contactNumber!,
        dateOfBirth: patientData.dateOfBirth!,
        height: patientData.height!,
        sex: patientData.sex!,
        occupation: patientData.occupation!,
        emergencyContactName: patientData.emergencyContactName!,
        relationship: patientData.relationship!,
        relationshipNumber: patientData.relationshipNumber!,
        extraEmergencyContactName: patientData.extraEmergencyContactName!,
        secondRelationshipNumber: patientData.secondRelationshipNumber!,
      });
    }
  }, [data]);

  const handleOptionChange = (disease: string, option: string) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [disease]: option,
    }));
  };

  const handleChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async () => {
    setLoadingButton(true); // Set loading state to true
    try {
      const { data: updatedData } = await updatePatient({
        variables: {
          id: data?.patients[0]?.id,
          data: {
            ...formData,
            tuberculosis: selectedOptions.tuberculosis,
            coughduration: selectedOptions.coughduration,
            coughWithBlood: selectedOptions.coughWithBlood,
            beenExposed: selectedOptions.beenExposed,
          },
        },
      });
      console.log('Patient updated:', updatedData);
      setErrorMessage(null); // Clear any previous error
    } catch (e) {
      console.error('Error updating patient:', e);
      setErrorMessage('Failed to update patient information. Please try again.');
    } finally {
      setLoadingButton(false); // Reset loading state after mutation
    }
  };

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error.message}</Text>;

  const patientData = data?.patients[0];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Personal Information</Text>

      {patientData ? (
        <View style={styles.infoContainer}>
          {['fullName', 'contactNumber', 'dateOfBirth', 'height', 'sex', 'occupation', 'emergencyContactName', 'relationship', 'relationshipNumber'].map((field) => (
            <TextInput
              key={field}
              style={styles.input}
              placeholder={field.replace(/([A-Z])/g, ' $1').toUpperCase()}
              defaultValue={formData[field as keyof FormData] ?? ''}
              onChangeText={(text) => handleChange(field, text)}
            />
          ))}

          <Text>If you are completing this form for another person, what is your relationship to that person?</Text>
          {['extraEmergencyContactName', 'relationship', 'secondRelationshipNumber'].map((field) => (
            <TextInput
              key={field}
              style={styles.input}
              placeholder={field.replace(/([A-Z])/g, ' $1').toUpperCase()}
              defaultValue={formData[field as keyof FormData] ?? ''}
              onChangeText={(text) => handleChange(field, text)}
            />
          ))}

          <View style={styles.dcontainer}>
            <Text style={styles.headerText}>
              Do you have any of the following diseases or problems?
            </Text>

            {[ // Diseases checkboxes
              { label: 'TUBERCULOSIS', key: 'tuberculosis' },
              { label: 'Cough of more than 3 weeks duration', key: 'coughduration' },
              { label: 'Cough with blood', key: 'coughWithBlood' },
              { label: 'Been exposed to anyone with Tuberculosis', key: 'beenExposed' },
            ].map(({ label, key }) => (
              <View key={key} style={styles.questionContainer}>
                <Text style={styles.questionText}>
                  {label}: <Text style={{ textDecorationLine: 'underline' }}>{patientData[key as keyof typeof patientData]}</Text>
                </Text>
                <View style={styles.checkboxContainer}>
                  {Object.values(Options).map((option) => (
                    <View style={styles.option} key={option}>
                      <Checkbox
                        value={selectedOptions[key as keyof typeof selectedOptions] === option}
                        onValueChange={() => handleOptionChange(key, option)}
                        color={selectedOptions[key as keyof typeof selectedOptions] === option ? Colors.GREEN : undefined}
                      />
                      <Text style={styles.optionText}>{option === Options.DK ? "Don't Know (DK)" : option.toUpperCase()}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>

          {errorMessage && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
          <PrimaryButton title={loadingButton ? "Loading..." : "Save and Update"} onPress={handleSubmit} disabled={loadingButton} 
           containerStyle={{ marginTop: 50 }}
          />
        </View>
      ) : (
        <Text>No patient data found</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 8,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  infoContainer: {
    marginBottom: 20,
    borderRadius: 5,
    padding: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  headerText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  dcontainer: {
    marginTop: 20,
  
  },
  questionContainer: {
    marginVertical: 10,
  },
  questionText: {
    fontSize: 16,
    color: '#333',
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
  },
});
