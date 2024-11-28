import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import React from "react";
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import CategoriesList from "@app/(categories)/category";
import ClinicianItems from "@/components/CategoryDetails/ClinicianItems";
import Colors from "@/constants/Colors";
import FontSize from "@/constants/FontsSize";
import NewsFeed from "../(categories)/newsfeed";
import { Link } from "expo-router";

const Home: React.FC = () => {
  const isHorizontal = true;

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Header />
      <View style={styles.containerSlider}>
        <Slider />
      </View>
      <View style={styles.containerCategory}>
        <CategoriesList />
      </View>
      <View style={styles.containerCategory}>
        <Text style={styles.title}>Clinicians List</Text>
        <ClinicianItems isHorizontal={isHorizontal} />
      </View>
      <View style={styles.containerCategory}>
        <Text style={styles.title}>Latest Newsfeed</Text>
        {/* Limit to 3 items */}
        <NewsFeed numberfeed={2} />
        <Link href="/(categories)/newsfeed" asChild>
          <Pressable>
            <Text style={styles.seemoreText}>See more</Text>
          </Pressable>
        </Link>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 600,
    alignSelf: "center",
    height: "100%",
    backgroundColor:Colors.WHITE_SMOKE,
  },
  containerSlider: {
    flex: 1,
    alignSelf: "center",
  },
  containerCategory: {
    flex: 1,
    marginTop: 10,
  },
  title: {
    fontSize: FontSize.xl,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    color: Colors.PRIMARY,
  },
  seemoreText: {
    fontSize: FontSize.lg,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.PRIMARY,
    marginBottom: 20,
  },
});

export default Home;
