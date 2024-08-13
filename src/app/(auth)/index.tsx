import { SignedIn, SignedOut } from "@clerk/clerk-expo";
import { Redirect, useRouter } from "expo-router";
import { Text, View, StyleSheet, Image, ActivityIndicator } from "react-native";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import Colors from "@Utils/Colors";
import SignInWithOAuth from "../(login)/sign-in";
import React from 'react';
export default function LoginScreenPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <SignedIn>
        <Redirect href="/home" />
      </SignedIn>
      <SignedOut>
        <View style={styles.linkContainer}>
          <Image
            source={require("../../assets/images/dental-logo.jpg")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.welcomeText}>Welcome to UZ Dental Clinic</Text>
          <Text style={styles.subtitle}>
            We’re thrilled to have you here. Get ready for a brighter smile!
          </Text>
          <PrimaryButton title="Log In" onPress={() => router.push("/login")} />
          <SecondaryButton title="Sign Up" onPress={() => router.push("/sign-up")} />
          <View style={styles.oAuthContainer}>
            <SignInWithOAuth />
          </View>
        </View>
      </SignedOut>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.WHITE,
    padding: 20,
  },
  linkContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: 400,
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 60,
    borderRadius: 75, // Adjusted for circular appearance
  },
  welcomeText: {
    fontSize: 24,
    fontFamily: "outfit-bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 50,
    textAlign: "center",
  },
  oAuthContainer: {
    marginTop: 24,
    width: "100%",
    alignItems: "center",
  },
});
