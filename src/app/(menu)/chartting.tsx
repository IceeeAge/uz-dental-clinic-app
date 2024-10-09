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
  Platform,
} from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { useQuery, gql } from "@apollo/client";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import Colors from "@/constants/Colors";

// Get the device's width and height
const { width, height } = Dimensions.get("window");

// GraphQL query to get charting data for the current user
const GET_DATA_CHARTTING = gql`
  query GetDataChartting($email: String!) {
    newSchedules {
      charting {
        url(transformation: { document: { output: { format: png } } })
      }
      patients(where: { email: $email }) {
        id
      }
    }
  }
`;

// Define types for the data returned by the GraphQL query
interface ChartingData {
  url: string;
}

interface Schedule {
  charting: ChartingData;
}

interface NewSchedulesData {
  newSchedules: Schedule[];
}

export default function Chartting() {
  const { user } = useUser();

  // Only run the query if the user and email are available
  const { data, loading, error } = useQuery<NewSchedulesData>(GET_DATA_CHARTTING, {
    variables: { email: user?.primaryEmailAddress?.emailAddress || "" }, // Safe access to email
    skip: !user?.primaryEmailAddress?.emailAddress, // Skip the query if email is undefined
  });

  // Handle loading and error states
  if (loading) return <Text style={styles.message}>Loading chart data...</Text>;
  if (error) return <Text style={styles.message}>Error loading chart data. Please try again.</Text>;

  // If no schedules are returned, show a message
  if (!data?.newSchedules?.length) {
    return <Text style={styles.message}>No chart data available.</Text>;
  }

  // Function to download image
  const downloadImage = async (url: string) => {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission denied", "You need to grant storage permissions.");
        return;
      }
  
      const fileUri = `${FileSystem.documentDirectory}chart.png`;
  
      // Download the image to the file system
      const downloadResumable = FileSystem.createDownloadResumable(url, fileUri);
      const downloadResult = await downloadResumable.downloadAsync();
  
      // Check if the download result is valid
      if (downloadResult && downloadResult.uri) {
        // Save to media library
        await MediaLibrary.createAssetAsync(downloadResult.uri);
        Alert.alert("Download complete", "Image has been saved to your gallery!");
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
        data={data?.newSchedules}
        keyExtractor={(item, index) => index.toString()} // Assign a unique key for each item
        renderItem={({ item }) => {
          const imageUrl = item.charting?.url;

          // Check if the image URL is valid
          if (!imageUrl) {
            return null; // Skip rendering if there's no URL
          }

          return (
            <View style={styles.itemContainer}>
              <Image
                source={{ uri: imageUrl }}
                style={styles.image}
              />
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
    backgroundColor: '#f9f9f9', // Light background for better contrast
  },
  itemContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  image: {
    width: width * 0.9, // 90% of the screen width
    height: height * 0.5, // 50% of the screen height
    resizeMode: "cover", // Ensure the image fits without being distorted
    borderRadius: 10, // Optional: Rounded corners
    borderWidth: 1,
    borderColor: '#ccc', // Optional: Border color
    marginBottom: 10,
  },
  message: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
});
