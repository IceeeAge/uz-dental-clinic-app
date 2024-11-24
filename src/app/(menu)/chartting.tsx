import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Button,
  Dimensions,
  StyleSheet,
  Alert,
} from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { useQuery, gql } from "@apollo/client";
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

  // Only run the query if the user and email are available
  const { data, loading, error } = useQuery<GetUserDataCharttingQuery>(
    GET_DATA_CHARTTING,
    {
      variables: { email: user?.primaryEmailAddress?.emailAddress || "" }, // Safe access to email
      skip: !user?.primaryEmailAddress?.emailAddress, // Skip the query if email is undefined
    }
  );

  // Handle loading and error states
  if (loading) return <Text style={styles.message}>Loading chart data...</Text>;
  if (error)
    return (
      <Text style={styles.message}>
        Error loading chart data. Please try again.
      </Text>
    );

  // If no schedules are returned, show a message
  if (!data?.patients || data.patients.length === 0) {
    return <Text style={styles.message}>No chart data available.</Text>;
  }

  // Function to download image
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

      // Download the image to the file system
      const downloadResumable = FileSystem.createDownloadResumable(
        url,
        fileUri
      );
      const downloadResult = await downloadResumable.downloadAsync();

      // Check if the download result is valid
      if (downloadResult && downloadResult.uri) {
        // Save to media library
        await MediaLibrary.createAssetAsync(downloadResult.uri);
        Toast.show("Download successful", { type: "normal", duration: 2000 });
      } else {
        throw new Error("Download failed: No URI returned");
      }
    } catch (error: any) {
      Alert.alert("Download error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.patients} // Safely access data.newSchedules
        keyExtractor={(item, index) => index.toString()} // Assign a unique key for each item
        renderItem={({ item }) => {
          // Safe access to imageUrl and patient email
          const imageUrl = item?.newSchedules?.[0]?.charting?.url;

          // Check if the image URL is valid and if the email matches
          if (!imageUrl) {
         
            return <Text style={styles.NoText}>No Chart available</Text>;
          }

          return (
            <View style={styles.itemContainer}>
              <Image source={{ uri: imageUrl }} style={styles.image} />
              <Button
                title="Download Chart"
                onPress={() => downloadImage(imageUrl)}
                color={Colors.PRIMARY}
              />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
   backgroundColor:Colors.WHITE
  },
  itemContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  image: {
    width: width * 0.9, // 90% of the screen width
    height: height * 0.6, // 50% of the screen height
    resizeMode: "cover", // Ensure the image fits without being distorted
    borderRadius: 10, // Optional: Rounded corners
    marginBottom: 10,
  },
  message: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#333",
  },
  NoText:{
    textAlign: "center",
    flex: 1,
    marginTop: 120,
    fontSize: 16,
    color: "#333",
  }
});
