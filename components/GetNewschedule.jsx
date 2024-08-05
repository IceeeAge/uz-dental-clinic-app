import React from "react";
import { View, Text, StyleSheet, Image, Linking, TouchableOpacity, ScrollView } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_NEW_SCHEDULE } from "../GraphQL/Quey"; // Adjust path as needed
import { useClerk } from "@clerk/clerk-expo"; // Import useClerk for user data
import Ionicons from "@expo/vector-icons/Ionicons"; // Import Ionicons
import Colors from "../Utils/Colors";

const Getschedule = () => {
  const { user } = useClerk(); // Get the current user
  const { loading, error, data } = useQuery(GET_NEW_SCHEDULE, {
    pollInterval: 3000, // Refresh data every 3 seconds
  });

  if (loading) return <Text style={styles.loadingText}>Loading...</Text>;
  if (error)
    return <Text style={styles.errorText}>Error: {error.message}</Text>;

  // Filter new schedules to show only those that are approved and match the user's email
  const approvedSchedules = data.newSchedules.filter(
    (schedule) =>
      schedule.patient.statusAppointment === "APPROVED" &&
      schedule.patient.email === user?.primaryEmailAddress.emailAddress
  );

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
    <ScrollView style={styles.container}>
      {approvedSchedules.length > 0 ? (
        approvedSchedules.map((item) => (
          <View key={item.id} style={styles.scheduleContainer}>
            <View style={styles.profileContainer}>
              <Image
                source={{ uri: item.patient.profileImage.url }}
                style={styles.profileImage}
              />
              <View style={styles.statusContainer}>
                <Text style={styles.statusText}>{item.patient.statusAppointment}</Text>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.patientText}>Patient Name: {item.patient.fullName}</Text>
              <Text style={styles.patientText}>Clinician Name: {item.clinician}</Text>
              <Text style={styles.patientText}>Room: {item.room}</Text>
              <Text style={styles.patientText}>Schedule Date: {item.schedule}</Text>
              <Text style={styles.patientText}>Time: {item.time}</Text>
            </View>

            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={() => handleCall(item.contactNumber)}>
                <Ionicons name="call" size={30} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleMessage(item.contactNumber)}>
                <Ionicons name="chatbubble" size={30} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleLocation(item.location.latitude, item.location.longitude)}>
                <Ionicons name="location" size={30} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleEmail(item.patient.email)}>
                <Ionicons name="mail" size={30} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.noSchedulesText}>No approved schedules available.</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scheduleContainer: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: Colors.GRAY,
    backgroundColor: Colors.WHITE,
    marginBottom: 10, // Add margin to separate items
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft: 10,
  },
  statusContainer: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    height: 45,
    alignSelf: "center",
    borderColor: Colors.GRAY,
    backgroundColor: Colors.GREEN,
  },
  statusText: {
    fontSize: 15,
    fontFamily: "outfit-bold",
    color: Colors.WHITE,
  },
  infoContainer: {
    padding: 10,
  },
  patientText: {
    fontSize: 15,
    fontFamily: "outfit",
    color: Colors.BLACK,
    marginTop: 10,
  },
  noSchedulesText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
  iconContainer: {
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    padding: 20,
    width: "100%",
    borderColor: Colors.GRAY,
  },
});

export default Getschedule;
