import {
  View,
  Text,
  Image,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_NEWSFEED_DATA } from "@/GraphQL/Query";
import { GetNewsFeedQuery } from "@/generated/graphql";
import Colors from "@/constants/Colors";


const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function NewsFeed() {
  const { data, loading, error } = useQuery<GetNewsFeedQuery>(GET_NEWSFEED_DATA);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const handleImagePress = (imageUri: React.SetStateAction<string | null>) => {
    setSelectedImage(imageUri);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {/* Using map to render the newsFeeds */}
      {data?.newsFeeds?.map((item) => (
        <View style={styles.itemContainer} key={item.id}>
          <TouchableOpacity onPress={() => handleImagePress(item?.images?.[0].url)}>
            <Image
              source={{ uri: item?.images?.[0].url }}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={styles.description}>{item?.description}</Text>
        </View>
      ))}
      <Modal
        visible={isModalVisible}
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalBackground}>
          <TouchableOpacity style={styles.closeArea} onPress={closeModal}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
          {selectedImage && (
            <Image source={{ uri: selectedImage }} style={styles.modalImage} />
          )}
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  itemContainer: {
    marginBottom: 25,
    padding: 10,
    backgroundColor:Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2, // for Android shadow
  },
  image: {
    width: "100%",
    height: screenWidth * 0.6, // Adjust image size based on screen width for responsiveness
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalImage: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.6,
    resizeMode: "contain",
  },
  closeArea: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 1,
  },
  closeText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});
