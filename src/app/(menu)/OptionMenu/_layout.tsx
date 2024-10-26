import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import IconSize from "@constants/IconSize";

export default function OptionMenuLayout() {
//   const router = useRouter();

//   // Function to handle back navigation
//   const handleBackPress = () => {
//     router.back();
//   };

  return (
    <Stack
    //   screenOptions={{
    //     headerShown: true,
    //     headerLeft: () => (
    //       <TouchableOpacity
    //         style={{ marginLeft: 10 }}
    //         onPress={handleBackPress}
    //       >
    //         <Ionicons name="arrow-back" size={IconSize.xl} color="black" />
    //       </TouchableOpacity>
    //     ),
    //     headerTitleAlign: "center",
    //   }}

    screenOptions={{
      headerShown: true,
      headerTitleAlign: "center",
    }}
    >
      <Stack.Screen name="dental-information" options={{ title: "Dental Information" }} />
      <Stack.Screen name="medical-information" options={{ title: "Medical Information" }} />
      <Stack.Screen name="personal-information" options={{ title: "Personal Information" }} />
      <Stack.Screen name="diseases" options={{ title: "Deseases" }} />
    </Stack>
  );
}
