import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

export default function Profile() {
  const { user } = useUser();
  const { signOut } = useAuth();
  const router = useRouter();

  const doLogout = async () => {
    try {
      await signOut();
      router.replace("(auth)"); // Adjust if necessary
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <View style={{ paddingTop: 50 }}>
      <Text>Welcome, {user?.emailAddresses[0]?.emailAddress}</Text>
      <Text>Username is {user?.fullName}</Text>
      <TouchableOpacity onPress={doLogout}>
        <Text style={{ color: "blue", marginTop: 20 }}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}
