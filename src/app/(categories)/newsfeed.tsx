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
import Loading from "@/components/Loading";
import Error from "@/components/Error";

interface NewsFeedProps {
  numberfeed: number;
}
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function NewsFeed({ numberfeed }: NewsFeedProps) {
  const { data, loading, error } = useQuery<GetNewsFeedQuery>(GET_NEWSFEED_DATA,
    {
      pollInterval: 5000,
    }
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (loading) return <Loading/>;
  if (error) return <Error message={error.message}/>;

  // Correctly slice the data to get the first `numberfeed` items
  const limitedNews = data?.newsFeeds.slice(0, numberfeed);

  // Reverse the order of the news items to display the latest first
  const reversedNews = limitedNews?.reverse();

  const handleImagePress = (imageUri: string | null) => {
    setSelectedImage(imageUri);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {/* Render reversed news items */}
      {reversedNews?.map((item) => (
        <View style={styles.itemContainer} key={item.id}>
          <TouchableOpacity onPress={() => handleImagePress(item?.images?.[0]?.url)}>
            <Image
              source={{ uri: item?.images?.[0]?.url }}
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
  },
  itemContainer: {
    marginBottom: 25,
    padding: 10,
    backgroundColor: Colors.WHITE,
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
