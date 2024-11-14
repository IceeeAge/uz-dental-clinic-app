import { View, Text, Alert, StyleSheet } from "react-native";
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

export default function PdtEform() {
  const { user } = useUser();
  const email = user?.primaryEmailAddress?.emailAddress;
  const fullName = user?.fullName || "User";

  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [isPdfAvailable, setIsPdfAvailable] = useState<boolean>(false);
  const [hasRequestedPdf, setHasRequestedPdf] = useState<boolean>(false);

  // Query for checking if the PDF has been requested already
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
        setHasRequestedPdf(true); // Mark the request as made
      },
      onError: (error) => {
        Alert.alert("Error", `Failed to request PDF: ${error.message}`);
      },
    });

  const printPdf = async () => {
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
      Toast.show("PDF printed successfully", {
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
        requestUserEformPdf: "Requested by user", // mark the request as submitted
      },
    });
  };

  // Set hasRequestedPdf based on the GraphQL query data and update isPdfAvailable
  useEffect(() => {
    if (data?.requestUserEformPdfs && data.requestUserEformPdfs.length > 0) {
      const requestedPdf = data.requestUserEformPdfs[0];
      if (
        requestedPdf.email === email &&
        requestedPdf.requestUserEformPdf === "Requested by user"
      ) {
        setHasRequestedPdf(true);
        setPdfUrl(requestedPdf.eFormPdf?.url || null);
        setIsPdfAvailable(!!requestedPdf.eFormPdf?.url); // Mark the PDF as available when a URL is returned
      }
    }
  }, [data, email]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      {isPdfAvailable ? (
        <SecondaryButton title="Print PDF" onPress={printPdf} />
      ) : hasRequestedPdf ? (
        <Text>PDF request already submitted and is being processed</Text>
      ) : (
        <PrimaryButton
          title={requestLoading ? "Requesting..." : "Request PDF"}
          onPress={onRequestUser}
          disabled={requestLoading || hasRequestedPdf} // Disable if already requested
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
