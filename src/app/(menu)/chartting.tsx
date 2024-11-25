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

  const { data, loading, error } = useQuery<GetUserDataCharttingQuery>(
    GET_DATA_CHARTTING,
    {
      variables: { email: user?.primaryEmailAddress?.emailAddress || "" },
      skip: !user?.primaryEmailAddress?.emailAddress,
    }
  );

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
        Toast.show("Download successful", { type: "normal", duration: 2000 });
      } else {
        throw new Error("Download failed: No URI returned");
      }
    } catch (error: any) {
      Alert.alert("Download error", error.message);
    }
  };

  const renderItem = ({ item }: any) => {
    const imageUrl = item?.newSchedules?.[0]?.charting?.url;

    if (!imageUrl) {
      return <Text style={styles.noText}>No Chart available</Text>;
    }

    //FOMRAT DATE
    function formatDate(date: string | number | Date) {
      const d = new Date(date);
      const month = (d.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-based
      const day = d.getDate().toString().padStart(2, '0'); // Ensure two digits for day
      const year = d.getFullYear();
    
      return `${month}/${day}/${year}`;
    }
    
    // Usage example:
    const date = new Date(); // Current date
    const formattedDate = formatDate(date);
    console.log(formattedDate); // Example output: 11/25/2024
    

    return (
      <View style={styles.itemContainer}>
        <Text style={styles.infoText}>Record ID: {item.newSchedules?.[0]?.id}</Text>
        <Text style={styles.infoText}>Created Date: {formatDate(item.createdAt)}</Text>
        <Text style={styles.infoText}>
         Clinician: {item.newSchedules?.[0]?.clinician}
        </Text>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Button
          title="Download Chart"
          onPress={() => downloadImage(imageUrl)}
          color={Colors.PRIMARY}
        />
      </View>
    );
  };

  if (loading) return <Text style={styles.message}>Loading chart data...</Text>;
  if (error)
    return (
      <Text style={styles.message}>
        Error loading chart data. Please try again.
      </Text>
    );

  if (!data?.patients || data.patients.length === 0) {
    return <Text style={styles.message}>No chart data available.</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.patients}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={
          data.patients.length === 0 ? styles.emptyList : undefined
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.WHITE,
  },
  itemContainer: {
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: Colors.WHITE,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.GRAY,
  },
  image: {
    width: width * 0.9,
    height: height * 0.5,
    resizeMode: "cover",
    borderRadius: 10,
    marginVertical: 10,
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
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
