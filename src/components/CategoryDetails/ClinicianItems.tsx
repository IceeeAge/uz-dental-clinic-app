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

export default function ClinicianItems() {
  const router = useRouter();
  const { data, loading, error } = useQuery<GetMedicalTeamQuery>(
    GET_MEDICAL_TEAM_DATA
  );

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const handlePress = (medicalTeams: GetMedicalTeamQuery["medicalTeams"][0]) => {
    router.push({
      pathname: "(categories)/details/clinicians-details",
      params: { 
        medical: JSON.stringify(medicalTeams),
      },
    });
  };

  return (
    <View style={styles.container}>
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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: Colors.WHITE,
    borderColor: Colors.GRAY,
    borderWidth: 1,
    gap: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 12,
    resizeMode: "cover",
  },
  infoContainer: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: FontSize.lg,
    fontWeight: "bold",
    color: Colors.BLACK,
  },
  name: {
    fontSize: FontSize.md,
    color: Colors.BLACK,
  },
});
