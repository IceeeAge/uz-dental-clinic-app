import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import { Slot, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Colors from "@constants/Colors";
import { ToastProvider } from "react-native-toast-notifications";
import Constants from "expo-constants";
import { tokenCache } from "@Utils/cache";
import client from "@GraphQL/apolloClient";
import { ApolloProvider } from "@apollo/client";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    outfit: require("../assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("../assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("../assets/fonts/Outfit-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ToastProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <ClerkProvider
            tokenCache={tokenCache}
            publishableKey={
              Constants.expoConfig?.extra?.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY
            }
          >
            <ApolloProvider client={client}>
              <ClerkLoaded>
                <StatusBar
                  barStyle="light-content"
                  backgroundColor={Colors.PRIMARY}
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
