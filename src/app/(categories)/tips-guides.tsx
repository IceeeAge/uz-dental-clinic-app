import { View, Image, StyleSheet, Dimensions, Text, ScrollView } from "react-native";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_TIPSGUIDE_DATA } from "@/GraphQL/Query";
import { Get_Tipsguide_DataQuery } from "@/generated/graphql";

// Get the screen dimensions
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function TipsGuides() {

  const { data } = useQuery<Get_Tipsguide_DataQuery>(GET_TIPSGUIDE_DATA);

  console.log(data);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        {data?.tipsGuides?.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Text>{item?.description}</Text>
            <Image
              source={{ uri: item?.image[0]?.url }}
              style={[
                styles.image,
                { width: screenWidth * 0.9, height: screenHeight * 0.3 },
              ]}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    resizeMode: "cover",
    borderRadius: 10,
    marginVertical: 10,
  },
  itemContainer: {
    marginHorizontal: 5,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ccc",
    padding: 10,
    backgroundColor: "white",
  },
});
