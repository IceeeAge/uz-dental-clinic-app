import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import IconSize from "@constants/IconSize";

export default function CategoriesLayout() {
  const router = useRouter();

  // Function to handle back navigation
  const handleBackPress = () => {
    router.back();
  };

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerLeft: () => (
          <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={handleBackPress}
          >
            <Ionicons name="arrow-back" size={IconSize.xl} color="black" />
          </TouchableOpacity>
        ),
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="category" options={{ title: "Clinicians" }} />
      <Stack.Screen name="newsfeed" options={{ title: "Newsfeed" }} />
      <Stack.Screen name="tips-guides" options={{ title: "Tips & Guides" }} />
      <Stack.Screen name="uz-lab" options={{ title: "UZ LAB" }} />
    </Stack>
  );
}
