import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";

const { width, height } = Dimensions.get("window");

export default function Eform() {
  return (
    <View style={styles.container}>
      <Link href="OptionMenu/personal-information" asChild>
        <Pressable style={styles.iconContainer}>
          <Ionicons name="person-circle" size={24} color="black" />
          <Text style={styles.text}>Personal Information</Text>
        </Pressable>
      </Link>

      <Link href="OptionMenu/diseases" asChild>
        <Pressable style={styles.iconContainer}>
          <Ionicons name="heart-outline" size={24} color="black" />
          <Text style={styles.text}>Diseases</Text>
        </Pressable>
      </Link>

      <Link href="OptionMenu/dental-information" asChild>
        <Pressable style={styles.iconContainer}>
          <Ionicons name="medical-outline" size={24} color="black" />
          <Text style={styles.text}>Dental Information</Text>
        </Pressable>
      </Link>

      <Link href="OptionMenu/medical-information" asChild>
        <Pressable style={styles.iconContainer}>
          <Ionicons name="bandage-outline" size={24} color="black" />
          <Text style={styles.text}>Medical Information</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    justifyContent: "center",
    alignItems: "center",
    width: width,
  },
  iconContainer: {
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
    padding: 10,
    borderRadius: 10,
    width: width * 0.9,
    justifyContent: "flex-start",
  },
  text: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
  },
});
