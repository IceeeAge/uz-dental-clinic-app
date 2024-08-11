import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Colors from "../Utils/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

const GetNewschedule = ({ data }) => {
 

  const handleCall = (contactNumber) => {
    Linking.openURL(`tel:${contactNumber}`);
  };

  const handleMessage = (contactNumber) => {
    Linking.openURL(`sms:${contactNumber}`);
  };

  const handleLocation = (latitude, longitude) => {
    Linking.openURL(`https://www.google.com/maps?q=${latitude},${longitude}`);
  };

  const handleEmail = (email) => {
    Linking.openURL(`mailto:${email}`);
  };

  return (
    <View style={styles.container}>
      <View>
        {data.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Text style={styles.TextwhoApproved}>
              Clinicians: {item.createSchedules.clinician}
            </Text>
            <View style={styles.profileContainer}>
              <Image
                source={
                  item.profileImage
                    ? { uri: item.profileImage.url }
                    : require("../assets/images/placeholder.png")
                }
                style={styles.profileImage}
              />
              
              <View
                style={[
                  styles.statusContainer,
                  item.createSchedules.scheduleStatus === "APPROVED" && {
                    backgroundColor: Colors.GREEN,
                  },
                  styles.statusContainer,
                  item.createSchedules.scheduleStatus === "NEW SCHEDULE" && {
                    backgroundColor: Colors.GREEN,
                  },
                  item.createSchedules.scheduleStatus === "PENDING" && {
                    backgroundColor: Colors.YELLOW,
                  },
                ]}
              > 
                <Text style={styles.statusText}>
                  {item.createSchedules.scheduleStatus}
                </Text>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.itemText}>Full Name: {item.fullName}</Text>
             
              <Text style={styles.itemText}>
                Room: {item.createSchedules.room}
              </Text>
              <Text style={styles.itemText}>
                Schedule: {item.createSchedules.schedule}
              </Text>
              <Text style={styles.itemText}>
                Time: {item.createSchedules.time}
              </Text>
            </View>
            <View style={styles.iconContainer}>
              {item.createSchedules.contactNumber && (
                <TouchableOpacity
                  onPress={() => handleCall(item.createSchedules.contactNumber)}
                >
                  <Ionicons name="call" size={30} color="black" />
                </TouchableOpacity>
              )}
              {item.createSchedules.contactNumber && (
                <TouchableOpacity
                  onPress={() =>
                    handleMessage(item.createSchedules.contactNumber)
                  }
                >
                  <Ionicons name="chatbubble" size={30} color="black" />
                </TouchableOpacity>
              )}
              {item?.createSchedules.location && (
                <TouchableOpacity
                  onPress={() =>
                    handleLocation(
                      item.createSchedules.location.latitude,
                      item.createSchedules.location.longitude
                    )
                  }
                >
                  <Ionicons name="location" size={30} color="black" />
                </TouchableOpacity>
              )}
              {item.createSchedules.email && (
                <TouchableOpacity
                  onPress={() => handleEmail(item.createSchedules.email)}
                >
                  <Ionicons name="mail" size={30} color="black" />
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  TextwhoApproved:{
    fontSize: 16,
     textAlign:'right',
    fontFamily: "outfit",
  },
  itemContainer: {
    marginBottom: 10,
    borderWidth: 1,
    paddingBottom: 10,
    padding: 13,
    borderColor: Colors.GRAY,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  statusContainer: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.GRAY,
  },
  statusText: {
    fontSize: 15,
    fontFamily: "outfit-bold",
    color: Colors.WHITE,
  },
  infoContainer: {
    padding: 10,
  },
  itemText: {
    fontSize: 16,
    marginVertical: 2,
    fontFamily: "outfit",
  },
  noDataText: {
    textAlign: "center",
    fontSize: 16,
    color: Colors.GRAY,
  },
  iconContainer: {
    borderWidth: 1,
    padding: 10,
    borderColor: Colors.GRAY,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 10,
    marginTop: 20,
  },
});

export default GetNewschedule;
