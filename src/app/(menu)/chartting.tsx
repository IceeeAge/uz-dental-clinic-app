import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  Dimensions,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { useQuery } from "@apollo/client";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import Colors from "@/constants/Colors";
import { GET_DATA_CHARTTING } from "@/GraphQL/Query";
import { GetUserDataCharttingQuery } from "@/generated/graphql";
import { Toast } from "react-native-toast-notifications";

// Get the device's width and height
const { width, height } = Dimensions.get("window");

export default function Chartting() {
  const { user } = useUser();

  // Query to fetch data
  const { data, loading, error } = useQuery<GetUserDataCharttingQuery>(GET_DATA_CHARTTING, {
    variables: { email: user?.primaryEmailAddress?.emailAddress || "" },
    skip: !user?.primaryEmailAddress?.emailAddress,
  });

  const downloadImage = async (url: string) => {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        Toast.show("Permission not granted", {
          type: "normal",
          duration: 2000,
        });
        return;
      }

      const fileUri = `${FileSystem.documentDirectory}chart.png`;

      const downloadResumable = FileSystem.createDownloadResumable(url, fileUri);
      const downloadResult = await downloadResumable.downloadAsync();

      if (downloadResult && downloadResult.uri) {
        await MediaLibrary.createAssetAsync(downloadResult.uri);
        Toast.show("Download successful", { type: "normal", duration: 2000, placement: "center" });
      } else {
        throw new Error("Download failed: No URI returned");
      }
    } catch (error: any) {
      Alert.alert("Download error", error.message);
    }
  };

  // Format Date Function
  function formatDate(date: string | number | Date) {
    const d = new Date(date);
    const month = (d.getMonth() + 1).toString().padStart(2, "0"); // Month is 0-based
    const day = d.getDate().toString().padStart(2, "0"); // Ensure two digits for day
    const year = d.getFullYear();
    return `${month}/${day}/${year}`;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {/* Check if data or schedules are missing */}
      {!data?.patients?.[0]?.newSchedules?.length ? (
        <View style={styles.emptyList}>
          <Text style={styles.noText}>No charting data available.</Text>
        </View>
      ) : (
        // Mapping over the data
        data?.patients?.[0]?.newSchedules?.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            {/* Display the item information */}
            <Text style={styles.infoText}>Record ID: {item.id || "N/A"}</Text>
            <Text style={styles.infoText}>Created Date: {formatDate(data?.patients?.[0]?.createdAt)}</Text>
            <Text style={styles.infoText}>Clinician: {item.clinician || "N/A"}</Text>
            {/* Display the chart image */}
            <Image
              source={{ uri: item.charting?.url || "" }}
              style={styles.image}
            />
            {/* Button to download the image */}
            <Button
              title="Download"
              onPress={() => downloadImage(item.charting?.url || "")}
              color={Colors.PRIMARY}
            />
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.WHITE,
  },
  itemContainer: {
    marginBottom: 30,
    backgroundColor: Colors.WHITE,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.GRAY,
  },
  image: {
    width: width * 0.9,
    height: height * 0.6,
    resizeMode: "contain",
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: "center",
  },
  message: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: Colors.BLACK,
  },
  noText: {
    textAlign: "center",
    fontSize: 16,
    color: Colors.BLACK,
  },
  infoText: {
    fontSize: 14,
    color: Colors.BLACK,
    marginVertical: 4,
  },
  emptyList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: height * 0.8, // Adjust height as needed
  },
});
