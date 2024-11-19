import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useQuery } from "@apollo/client";
import { GET_TIPSGUIDE_DATA } from "@/GraphQL/Query";
import { Get_Tipsguide_DataQuery } from "@/generated/graphql";
import Colors from "@/constants/Colors";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function TipsGuides() {
  const { data } = useQuery<Get_Tipsguide_DataQuery>(GET_TIPSGUIDE_DATA);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImagePress = (imageUri: React.SetStateAction<string | null>) => {
    setSelectedImage(imageUri);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        {data?.tipsGuides?.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Text style={styles.descriptionText}>{item?.description}</Text>
            <TouchableOpacity onPress={() => handleImagePress(item?.image?.[0].url)}>
              <Image source={{ uri: item?.image?.[0].url }} style={styles.image} />
            </TouchableOpacity>
          </View>
        ))}

        <Modal visible={isModalVisible} transparent={true} onRequestClose={closeModal}>
          <View style={styles.modalBackground}>
            <TouchableOpacity style={styles.closeArea} onPress={closeModal}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
            {selectedImage && (
              <Image source={{ uri: selectedImage }} style={styles.modalImage} />
            )}
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    padding: 5,
  },
  container: {
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    marginBottom: 16,
    borderWidth: 1,
    backgroundColor:Colors.WHITE,
    borderColor: Colors.GRAY,
    borderRadius: 10,
    padding: 10,
   
    
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 8,
    padding: 10,
  },
  image: {
    width: screenWidth * 0.9,
    height: screenWidth * 0.7,
    resizeMode: "stretch",
    alignSelf: "center",
  
    

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
