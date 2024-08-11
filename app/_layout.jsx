import React, { useEffect, useState } from "react";
import { View, StatusBar, useColorScheme } from "react-native";
import * as SecureStore from "expo-secure-store";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import { Slot, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
} from "@apollo/client";
import Colors from "../Utils/Colors";
import { ToastProvider } from 'react-native-toast-notifications'

const tokenCache = {
  async getToken(key) {
    try {
      const item = await SecureStore.getItemAsync(key);
      if (item) {
        console.log(`${key} was used 🔐 \n`);
      } else {
        console.log("No values stored under key: " + key);
      }
      return item;
    } catch (error) {
      console.error("SecureStore get item error: ", error);
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      console.error("SecureStore set item error: ", err);
    }
  },
};

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error(
    "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
  );
}

export default function RootLayout() {
  const [loaded, error] = useFonts({
    outfit: require("../assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("../assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("../assets/fonts/Outfit-Bold.ttf"),
  });

  const colorScheme = useColorScheme();
  
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const httpLink = new HttpLink({
    uri: "https://api-ap-northeast-1.hygraph.com/v2/clyry9hcp01vm07w0vu0nq94p/master",
  });

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  // Determine the StatusBar style based on color scheme
  const barStyle = colorScheme === 'dark' ? 'light-content' : 'dark-content';
  const backgroundColor = colorScheme === 'dark' ? Colors.DARK : Colors.LIGHT;

  return (
    <ToastProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <ClerkProvider
            tokenCache={tokenCache}
            publishableKey={publishableKey}
          >
            <ApolloProvider client={client}>
              <ClerkLoaded>
                <StatusBar
                  barStyle={barStyle}
                  backgroundColor={backgroundColor}
                />
                <Slot />
              </ClerkLoaded>
            </ApolloProvider>
          </ClerkProvider>
        </SafeAreaView>
      </SafeAreaProvider>
    </ToastProvider>
  );
}
