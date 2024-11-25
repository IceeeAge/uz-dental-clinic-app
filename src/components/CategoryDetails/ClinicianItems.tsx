import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_MEDICAL_TEAM_DATA } from "@GraphQL/Query";
import { GetMedicalTeamQuery } from "@generated/graphql";
import Colors from "@constants/Colors";
import FontSize from "@constants/FontsSize";
import { useRouter } from "expo-router";
import { Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function ClinicianItems({ isHorizontal = false,style,itemContainerStyle  }: any) {
  const router = useRouter();
  const { data, loading, error } = useQuery<GetMedicalTeamQuery>(
    GET_MEDICAL_TEAM_DATA
  );

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const handlePress = (medicalTeams: GetMedicalTeamQuery["medicalTeams"][0]) => {
    router.push({
      pathname: "/(categories)/details/clinicians-details",
      params: {
        medical: JSON.stringify(medicalTeams),
      },
    });
  };

  return (
    <View style={[styles.container, style]}>
      <FlatList
        data={data?.medicalTeams}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => handlePress(item)}
          >
            <Image
              source={{ uri: item.profileImage?.url }}
              style={styles.image}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.name}>{item.fullName}</Text>
            </View>
          </TouchableOpacity>
        )}
        horizontal={isHorizontal} // Toggle between horizontal and vertical
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.listContent,
          isHorizontal && { paddingHorizontal: 10 }, // Add padding if horizontal
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    alignItems: "center", // Center align the content
    padding: 10,
   
    borderRadius: 8,
    backgroundColor: Colors.WHITE,
    borderColor: Colors.GRAY,
    borderWidth: 1,
    gap: 5,
    marginRight: 10, // Add margin only if horizontal
    width: screenWidth * 0.4, // 40% of the screen width
    height: screenHeight * 0.25, // 25% of the screen height
    shadowColor: Colors.WHITE,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: screenWidth * 0.3, // 30% of the screen width
    height: screenWidth * 0.3, // Keep it square
    borderRadius: (screenWidth * 0.3) / 1, // Half of width for a circular shape
    resizeMode: "cover",
    marginBottom: 8, // Add space between image and text
  },
  infoContainer: {
    alignItems: "center", // Center text below the image
   
  },
  title: {
    fontSize: FontSize.md,
    fontWeight: "bold",
    color: Colors.BLACK,
    textAlign: "center",
  },
  name: {
    fontSize: FontSize.md,
    color: Colors.BLACK,
    textAlign: "center",
  },
  listContent: {
    paddingBottom: 10,
  },
});