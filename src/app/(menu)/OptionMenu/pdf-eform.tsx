import { View, Text, Alert, StyleSheet, Linking, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { useUser } from "@clerk/clerk-expo";
import * as Print from "expo-print";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import { Toast } from "react-native-toast-notifications";
import { EformPDF } from "@/GraphQL/Query";
import { REQUEST_EFORM } from "@/GraphQL/mutation";
import {
  EFormPdfQuery,
  QueryRequestUserEformPdfArgs,
  RequestUserEformPdfFileMutation,
} from "@/generated/graphql";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Colors from "@/constants/Colors";

export default function PdtEform() {
  const { user } = useUser();
  const email = user?.primaryEmailAddress?.emailAddress;
  const fullName = user?.fullName || "User";

  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [isPdfAvailable, setIsPdfAvailable] = useState<boolean>(false);
  const [hasRequestedPdf, setHasRequestedPdf] = useState<boolean>(false);

  const { loading, error, data } = useQuery<EFormPdfQuery>(EformPDF, {
    variables: { email },
    skip: !email,
  });

  const [requestEform, { loading: requestLoading }] =
    useMutation<RequestUserEformPdfFileMutation>(REQUEST_EFORM, {
      onCompleted: () => {
        Toast.show("PDF requested successfully", {
          type: "normal",
          duration: 2000,
          placement: "center",
        });
        setHasRequestedPdf(true);
      },
      onError: (error) => {
        Alert.alert("Error", `Failed to request PDF: ${error.message}`);
      },
    });

  const DownloadprintPdf = async () => {
    if (!pdfUrl) {
      Toast.show("No PDF available", {
        type: "danger",
        duration: 2000,
        placement: "center",
      });
      return;
    }

    try {
      await Print.printAsync({
        uri: pdfUrl,
        orientation: "portrait",
      });
      Toast.show("Saved successfully", {
        type: "normal",
        duration: 2000,
        placement: "center",
      });
    } catch (error) {
      Toast.show("Failed to print PDF", {
        type: "danger",
        duration: 2000,
        placement: "center",
      });
    }
  };

  const onRequestUser = () => {
    if (!email || !fullName) {
      Toast.show("Invalid email or name", {
        type: "danger",
        duration: 2000,
        placement: "center",
      });
      return;
    }
    requestEform({
      variables: {
        email,
        fullName,
        requestUserEformPdf: "Requested by user",
      },
    });
  };

  useEffect(() => {
    if (data?.requestUserEformPdfs && data.requestUserEformPdfs.length > 0) {
      const requestedPdf = data.requestUserEformPdfs[0];
      if (
        requestedPdf.email === email &&
        requestedPdf.requestUserEformPdf === "Requested by user"
      ) {
        setHasRequestedPdf(true);
        setPdfUrl(requestedPdf.eFormPdf?.url || null);
        setIsPdfAvailable(!!requestedPdf.eFormPdf?.url);
      }
    }
  }, [data, email]);

  const handleEmailClick = () => {
    const sendEmail = "uzdentalclinic@gmail.com";
    const url = `mailto:${sendEmail}`;
    Linking.openURL(url).catch((err) => console.error("Failed to open email client", err));
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      {isPdfAvailable ? (
        <SecondaryButton title="Download PDF" onPress={DownloadprintPdf} />
      ) : hasRequestedPdf ? (
        <View style={styles.requestStatusContainer}>
          <Text style={styles.infoText}>Please update your EForm</Text>
          <Text style={styles.requestStatus}>Your request has been submitted</Text>
        </View>
      ) : (
        <View style={styles.centeredContainer}>
          <PrimaryButton
            title={requestLoading ? "Requesting..." : "Request PDF"}
            onPress={onRequestUser}
            disabled={requestLoading || hasRequestedPdf}
          />
        </View>
      )}

      {/* Footer */}
      <View style={styles.footerContainer}>
        <View style={styles.contactUsContainer}>
          <Text style={styles.contactText}>Contact Us</Text>
          <TouchableOpacity onPress={handleEmailClick} style={styles.emailContainer}>
            <MaterialCommunityIcons name="email-send-outline" size={24} color={Colors.GRAY} />
            <Text style={styles.emailText}>uzdentalclinic@gmail.com</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 100,
  },
  centeredContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', // Center the button
    marginTop: 50
  },
  requestStatusContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  infoText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  contactUsContainer: {
    alignItems: "baseline",
    marginTop: 10,
  },
  contactText: {
    fontSize: 16,
    marginRight: 5,
    color: "#333",
    textAlign: "center",
    alignSelf: "center",
  },
  emailContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
  },
  emailText: {
    fontSize: 16,
    color: "#007BFF",
    marginLeft: 5,
  },
  requestStatus: {
    fontSize: 12,
    fontWeight: "500",
    color: "#666",
    marginTop: 20,
  },
  footerContainer: {
    marginBottom: 70,
  },
  footerText: {
    fontSize: 12,
    color: "#333",
  },
});
