import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import colors from "@Utils/Colors";
import { useClerk } from "@clerk/clerk-expo";

export default function Header() {
  const { user } = useClerk();
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image source={{ uri: user?.imageUrl }} style={styles.ProfileImage} />
        <View style={styles.textContainer}>
          <Text style={styles.WelcomeText}>Hello Welcome</Text>
          <Text style={styles.FullNameText}>{user?.fullName}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PRIMARY,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 10,
  },
  textContainer: {
    flexDirection: "column", 
    justifyContent: "center",
  },
  ProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: "contain",
    marginLeft: 20,
  },
  WelcomeText: {
    color: colors.WHITE,
    fontSize: 16,
    fontFamily: "outfit-bold",
  },
  FullNameText: {
    color: colors.WHITE,
    fontSize: 16,
    fontFamily: "outfit",
  },
});
