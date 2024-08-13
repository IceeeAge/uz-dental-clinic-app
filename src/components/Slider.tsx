import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_SLIDER_DATA } from "@GraphQL/Query";
import { GetSliderQuery } from "src/generated/graphql";
import Loading from "@/components/Loading";
import Error from "@/components/Error";

export default function Slider() {
  const { loading, error, data } = useQuery<GetSliderQuery>(GET_SLIDER_DATA);

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.getSliders}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item?.image?.url }} style={styles.imageSlider} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 1,
  },
  listContainer: {
    alignItems: 'center', 
  },
  imageContainer: {
    marginHorizontal: 5,
    
  },
  imageSlider: {
    height: 150,
    width: 300, 
    resizeMode: "cover",
    borderRadius: 5,

  },
});
