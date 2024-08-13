import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';


const { width } = Dimensions.get('window');
const isSmallScreen = width <= 600; 

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitleAlign: isSmallScreen ? 'left' : 'center',
        headerStatusBarHeight: isSmallScreen ? 0 : 5,
        headerStyle: {
          backgroundColor: "#91247D",
        },
        headerTintColor: "white",
        tabBarActiveTintColor: '#91247D',
        tabBarStyle: {
          ...styles.tabBar,
          maxWidth: isSmallScreen ? '100%' : 600,
          width: isSmallScreen ? '100%' : 600,
          alignSelf: isSmallScreen ? 'stretch' : 'center',
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          headerShown: false
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

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    backgroundColor: "#fff",
    borderTopWidth: 0,
  },
});
