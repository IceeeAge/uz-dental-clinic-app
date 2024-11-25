import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_UZLABS_DATA } from "@/GraphQL/Query";
import Colors from "@/constants/Colors";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { Getuzlabs_DataQuery } from "@/generated/graphql";
import Loading from "@/components/Loading";
import Error from "@/components/Error";

export default function UzLab() {
  const { data, loading, error } =
    useQuery<Getuzlabs_DataQuery>(GET_UZLABS_DATA);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  const handleLocation = (
    latitude: number | undefined,
    longitude: number | undefined
  ) => {
    Linking.openURL(`https://www.google.com/maps?q=${latitude},${longitude}`);
  };

  const handleEmail = (email: string | null | undefined) => {
    Linking.openURL(`mailto:${email}`);
  };

  const handlePhone = (phone: string | null | undefined) => {
    Linking.openURL(`tel:${phone}`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.uzLabs}
        keyExtractor={(item) => item?.id || ""}
        renderItem={({ item }) => (
          <View style={styles.infoContainer} key={item?.id}>
            {item.images?.[0]?.url && (
              <Image
                source={{ uri: item.images[0].url }}
                style={styles.image}
              />
            )}
            <Text style={styles.name}>{item?.name}</Text>
            <Text style={styles.address}>Address: {item?.address}</Text>
            {item?.email && (
              <TouchableOpacity onPress={() => handleEmail(item.email)}>
                <View style={styles.contactContainer}>
                  <FontAwesome name="envelope" size={24} color={Colors.BLACK} />
                  <Text style={styles.contactText}>{item.email}</Text>
                </View>
              </TouchableOpacity>
            )}
            {item?.phone && (
              <TouchableOpacity onPress={() => handlePhone(item.phone)}>
                <View style={styles.contactContainer}>
                  <FontAwesome name="phone" size={24} color={Colors.BLACK} />
                  <Text style={styles.contactText}>{item.phone}</Text>
                </View>
              </TouchableOpacity>
            )}
            {item.location && (
              <TouchableOpacity
                onPress={() =>
                  handleLocation(
                    item?.location?.latitude,
                    item?.location?.longitude
                  )
                }
                style={styles.locationContainer}
              >
                <Ionicons name="location" size={30} color={Colors.BLACK} />
                <Text style={styles.locationText}>View Map</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  infoContainer: {
    borderColor: Colors.GRAY,
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  image: {
    width: "100%",
    height: 370,
    alignSelf: "center",
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  address: {
    fontSize: 16,
    marginBottom: 10,
  },
  contactContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  contactText: {
    marginLeft: 10,
    color: Colors.BLACK,
    fontSize: 16,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  locationText: {
    marginLeft: 10,
    fontSize: 16,
    color: Colors.BLACK,
  },
});
