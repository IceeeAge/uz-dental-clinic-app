import { View, FlatList, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_SLIDER_DATA } from "@GraphQL/Query";
import { GetSliderQuery } from "@generated/graphql";
import Loading from "@/components/Loading";
import Error from "@/components/Error";

const { width, height } = Dimensions.get("window"); // Get screen width and height

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
        keyExtractor={(item) => item?.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    paddingVertical: 10, 
  },
  listContainer: {
    paddingHorizontal: 10, 
  },
  imageContainer: {
    marginHorizontal: 5, 
    borderRadius: 5,
    overflow: 'hidden',
  },
  imageSlider: {
    height: height * 0.2, 
    width: width * 0.7,  
    resizeMode: "cover", 
    aspectRatio: 16 / 9, 
  },
});
