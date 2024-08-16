import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import CategoriesList from "@app/(categories)/category";

export default function home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.containerSlider}>
        <Slider />
      </View>
      <View style={styles.containerCategory}>
      <CategoriesList/>
      </View>
   
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerSlider: {
    padding: 10,
    maxWidth: 600,
    alignSelf: "center",
  },
  containerCategory:{
    padding: 10,
  }
});
