import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router, Stack, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import IconSize from "@constants/IconSize";


// Function to handle back navigation
const handleBackPress = () => {
    router.back();
  };

export default function MenuLayout() {
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
      <Stack.Screen name="chartting" options={{ title: "Charting",headerBackButtonMenuEnabled:true }} />
      <Stack.Screen name="eform" options={{ title: "E-FORM" }} />
      <Stack.Screen name="OptionMenu" options={{ title: "OptionMenu",
        headerShown: false
       }} />
    </Stack>
  );
}
