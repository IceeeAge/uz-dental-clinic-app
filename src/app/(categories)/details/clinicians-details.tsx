import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { GetMedicalTeamQuery } from "@generated/graphql";
import Colors from "@/constants/Colors";
import FontSize from "@/constants/FontsSize";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FontAwesome5 } from "@expo/vector-icons";
import IconSize from "@/constants/IconSize";

export default function ClinicianDetails() {
  const { medical } = useLocalSearchParams();
   console.log(medical)
  const medicalData: GetMedicalTeamQuery["medicalTeams"][0] | null = medical
    ? JSON.parse(medical as string)
    : null;

   


  return (
    <View style={styles.container}>
      <Image
        source={{ uri: medicalData?.profileImage?.url }}
        style={styles.image}
      />
      <Text style={styles.title}>{medicalData?.title}</Text>
      <Text style={styles.name}>{medicalData?.fullName}</Text>

      <View style={styles.infoRow}>
        <View style={styles.BorderContainer}>
          <FontAwesome name="users" size={IconSize.md} color={Colors.PRIMARY} />
        </View>

        <View style={styles.BorderContainer}>
          <FontAwesome5 name="briefcase" size={IconSize.md} color={Colors.PRIMARY} />
        </View>
        <View style={styles.BorderContainer}>
          <FontAwesome name="phone" size={IconSize.md} color={Colors.PRIMARY} />
        </View>
        <View style={styles.BorderContainer}>
          <FontAwesome name="envelope" size={IconSize.md} color={Colors.PRIMARY} />
        </View>
      </View>

      <View style={styles.DescContainer}>
        <Text style={styles.description}>{medicalData?.aboutDoctor}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    resizeMode: "cover",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  name: {
    fontSize: FontSize.md,
    color: Colors.BLACK,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 10,
  },
  infoText: {
    fontSize: FontSize.sm,
    color: Colors.BLACK,
    marginLeft: 10,
  },
  DescContainer: {
    borderWidth: 1,
    padding: 15,
    borderColor: Colors.GRAY,
    backgroundColor: Colors.WHITE,
  },
  description: {
    fontSize: FontSize.sm,
    color: Colors.BLACK,
    textAlign: "justify",
    marginTop: 10,
  },
  BorderContainer: {
    borderWidth: 1,
    padding: 10,
    borderColor: Colors.GRAY,
    backgroundColor: Colors.WHITE,
    borderRadius: 60,
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});
