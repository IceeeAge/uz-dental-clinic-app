import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform, // Import Platform for platform-specific behavior
} from "react-native";
import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_MEDICAL_TEAM_DATA } from "@GraphQL/Query";
import { GetMedicalTeamQuery } from "@generated/graphql";
import Colors from "@constants/Colors";
import FontSize from "@constants/FontsSize";
import { useRouter } from "expo-router";
import { Dimensions } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function Clinician({ isHorizontal = false }: any) {
  const router = useRouter();
  const { data, loading, error } = useQuery<GetMedicalTeamQuery>(GET_MEDICAL_TEAM_DATA);
  const [searchQuery, setSearchQuery] = useState("");

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  // Filter medical team based on search query
  const filteredMedicalTeams = data?.medicalTeams.filter((team) =>
    team.fullName?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePress = (medicalTeams: GetMedicalTeamQuery["medicalTeams"][0]) => {
    router.push({
      pathname: "/(categories)/details/clinicians-details",
      params: {
        medical: JSON.stringify(medicalTeams),
      },
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjust behavior based on platform
    >
      {/* Search Input */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color={Colors.GRAY} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Display filtered list */}
      <FlatList
        data={filteredMedicalTeams}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.itemContainer, isHorizontal && styles.horizontalItemContainer]}
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
        contentContainerStyle={[styles.listContent, isHorizontal && styles.horizontalContentContainer]} // Add padding if horizontal
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.WHITE, // Add background color for better contrast
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    paddingHorizontal: 10,
    backgroundColor: Colors.WHITE, // White background for better contrast
    borderRadius: 8,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: Colors.GRAY,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: FontSize.md,
    paddingLeft: 10,
    color: Colors.BLACK, // Black text color for readability
  },
  itemContainer: {
    flexDirection: "row", // Default to column layout
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: Colors.WHITE,
    borderColor: Colors.GRAY,
    borderWidth: 1,
    marginTop: 20,
    gap: 10,
    width: screenWidth * 0.8, // Default width to 80% of screen width
    height: screenHeight * 0.25, // Default height to 25% of screen height
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: Colors.BLACK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // Add shadow for elevation effect
  },
  horizontalItemContainer: {
    flexDirection: "row", // Switch to row layout for horizontal view
    width: screenWidth * 0.4, // 40% of screen width
    height: screenHeight * 0.25, // 25% of screen height
    marginRight: 10, // Add margin only if horizontal
  },
  image: {
    width: screenWidth * 0.3, // 30% of the screen width
    height: screenWidth * 0.3, // Keep it square
    borderRadius: (screenWidth * 0.3) / 2, // Half of width for a circular shape
    resizeMode: "cover",
    marginBottom: 8, // Add space between image and text
  },
  infoContainer: {
    alignItems: "center", // Center text below the image
    justifyContent: "center", // Ensure the text is vertically centered
    padding: 10,
  },
  title: {
    fontSize: FontSize.lg,
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
    paddingLeft: 10, // Add padding to the left for better alignment
  },
  horizontalContentContainer: {
    paddingHorizontal: 10, // Add padding for horizontal lists
  },
});
