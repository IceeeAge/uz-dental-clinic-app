import { Tabs } from "expo-router";
import React from "react";
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";
export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerStatusBarHeight: 5,
        headerStyle: {
          backgroundColor: "#91247D",
        },
        headerTintColor: "white",
        tabBarActiveTintColor:'#91247D',
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="appointment"
        options={{
          title: "Appointment",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="location-arrow" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          title: "Schedule",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
