import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import Colors from "@constants/Colors";
import { useClerk } from "@clerk/clerk-expo";

const { width, height } = Dimensions.get("window"); // Get device dimensions

export default function Header() {
  const { user } = useClerk();

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image source={{ uri: user?.imageUrl }} style={styles.profileImage} />
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Hello Welcome</Text>
          <Text style={styles.fullNameText}>{user?.fullName}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY,
    height: height * 0.12, // 12% of device height
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: width * 0.05, // 5% padding on sides
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  profileImage: {
    width: width * 0.15, // 15% of device width
    height: width * 0.15, // Make it square
    borderRadius: (width * 0.15) / 2, // Circular
    marginRight: width * 0.04, // 4% margin
  },
  textContainer: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 16,
    color: Colors.WHITE,
    fontWeight: "600",
  },
  fullNameText: {
    fontSize: 15,
    color: Colors.WHITE,
  },
});
