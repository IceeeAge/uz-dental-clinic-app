import { View, Text, Button, Alert, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { useUser } from "@clerk/clerk-expo";
import * as Print from "expo-print"; // Importing expo-print
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";

const EFormPDF = gql`
  query GetUserEformPDF($email: String!) {
    patients(where: { email: $email }) {
      requestUserEformPdf {
        eFormPdf {
          url
        }
      }
    }
  }
`;

export default function PdtEform() {
  const { user } = useUser();
  const email = user?.primaryEmailAddress?.emailAddress;
  const [pdfUrl, setPdfUrl] = useState(null);
  const [isPdfAvailable, setIsPdfAvailable] = useState(false);

  const { data, loading, error } = useQuery(EFormPDF, {
    variables: { email },
    skip: !email, // Skip the query if no email is available
  });

  useEffect(() => {
    if (data) {
      const patient = data.patients[0];
      if (patient && patient.requestUserEformPdf?.eFormPdf?.url) {
        setPdfUrl(patient.requestUserEformPdf.eFormPdf.url);
        setIsPdfAvailable(true);
      } else {
        setIsPdfAvailable(false);
      }
    }
  }, [data]);

  const printPdf = async () => {
    if (!pdfUrl) {
      Alert.alert("Error", "No PDF URL found");
      return;
    }

    try {
      await Print.printAsync({
        uri: pdfUrl, // Providing the URL of the PDF to print
        orientation: "portrait", // Optional: Adjust orientation if necessary
      });
      console.log(pdfUrl);
      Alert.alert("Success", "Printing started!");
    } catch (error) {
      console.error("Failed to print PDF:", error);
      Alert.alert("Error", "Failed to print the PDF.");
    }
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={styles.Container}>
      {isPdfAvailable ? (
        <>
          <SecondaryButton title="Print PDF" onPress={printPdf} />
        </>
      ) : (
        <>
          <PrimaryButton
            title="Request PDF EForm"
            onPress={() => console.log("Request PDF EForm")}
          />
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
