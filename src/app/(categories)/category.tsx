import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from "react-native";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Colors from "@constants/Colors";
import { Href, useRouter } from "expo-router";
import IconSize from "@constants/IconSize";

type RouteHref = Href<string>;

export default function CategoriesList() {
  const router = useRouter();

  // Handle navigation based on icon pressed
  const handleIconPress = (route: RouteHref) => {
    router.push(route);
  };



  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={() => handleIconPress("/clinicians")}
      >
        <View style={styles.iconContainer}>
          <FontAwesome6 name="user-doctor" size={IconSize.xl} color={Colors.PRIMARY} />
        </View>
        <Text style={styles.iconText}>Clinicians</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={() => handleIconPress("/tips-guides")}
      >
        <View style={styles.iconContainer}>
          <FontAwesome5 name="tooth" size={IconSize.xl} color={Colors.PRIMARY} />
        </View>
        <Text style={styles.iconText}>Tips & Guides</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={() => handleIconPress("/uz-lab")}
      >
        <View style={styles.iconContainer}>
          <FontAwesome5 name="hospital-alt" size={IconSize.xl} color={Colors.PRIMARY} />
        </View>
        <Text style={styles.iconText}>Uz-Lab</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={() => handleIconPress("/newsfeed")}
      >
        <View style={styles.iconContainer}>
          <Ionicons name="newspaper-sharp" size={IconSize.xl} color={Colors.PRIMARY} />
        </View>
        <Text style={styles.iconText}>NewsFeed</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
     alignSelf: "center",
    padding: 10,
  },
  iconWrapper: {
    alignItems: "center",

    margin: 5, // Use margin instead of marginHorizontal for better spacing
  },
  iconContainer: {
    borderWidth: 1,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: Colors.WHITE,
    shadowColor: Colors.BLACK,
    marginBottom: 5, 
  },
  iconText: {
    fontSize: 12,
    color: Colors.BLACK,
  },
});
