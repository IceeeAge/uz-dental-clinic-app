import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "@/components/Header";
import Slider from "@/components/Slider";

export default function home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.containerSlider}>
        <Slider />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerSlider: {
   padding:10
  },
});
