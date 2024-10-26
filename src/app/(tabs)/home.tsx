import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import CategoriesList from "@app/(categories)/category";
import ClinicianItems from "@/components/CategoryDetails/ClinicianItems";
import Colors from "@/constants/Colors";
import FontSize from "@/constants/FontsSize";

export default function home() {
  const isHorizontal = true;

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.containerSlider}>
        <Slider />
      </View>
      <View style={styles.containerCategory}>
        <CategoriesList />
      </View>
      <View style={styles.containerClinicians}>
        {/* Pass isHorizontal to switch between vertical and horizontal */}
        <Text style={styles.title}>Clinicians List</Text>
        <ClinicianItems isHorizontal={isHorizontal} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 600,
    alignSelf: "center",
  },
  containerSlider: {
   
    alignSelf: "center",
  },
  containerCategory: {
  marginTop: 30,
  },
  containerClinicians: {
    flex: 1, 
   
  },
  title:{
    fontSize: FontSize.xl,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    color: Colors.PRIMARY
  }
});
