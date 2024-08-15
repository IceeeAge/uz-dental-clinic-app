import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function CategoriesLayout() {
  return (
    <Stack>
      <Stack.Screen name="clinicians" />
      <Stack.Screen name="newsfeed" />
      <Stack.Screen name="tips-guides" />
      <Stack.Screen name="uz-lab" />
    </Stack>
  );
}
