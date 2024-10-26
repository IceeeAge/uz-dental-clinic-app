import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
import Colors from "@constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useQuery } from "@apollo/client";
import { GET_NEWSCHEDULE_DATA } from "@GraphQL/Query";
import { useClerk } from "@clerk/clerk-expo";
import { GetNewScheduleQuery, } from "src/generated/graphql";

// Function to format date with day at the end
// const formatDate = (dateString: string) => {
//   const date = new Date(dateString);
//   const day = date.getDate();
//   const month = date.getMonth() + 1; // Months are zero-based
//   const year = date.getFullYear();
//   const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
//   return `${month}/${day}/${year} ${weekday}`;
// };

const GetNewschedule: React.FC = () => {
  const { user } = useClerk();
  const { data, loading, error } =
    useQuery<GetNewScheduleQuery>(GET_NEWSCHEDULE_DATA);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  if (!data || !data.newSchedules) {
    return <Text>No schedules available</Text>;
  }

  // Filter schedules based on user's email
  const filteredSchedules = data.newSchedules.filter((schedule) =>
    schedule.patients.some(
      (patient) => patient.email === user?.primaryEmailAddress?.emailAddress
    )
  );

  const handleCall = (contactNumber?: string) => {
    if (contactNumber) {
      Linking.openURL(`tel:${contactNumber}`);
    }
  };

  const handleMessage = (contactNumber?: string) => {
    if (contactNumber) {
      Linking.openURL(`sms:${contactNumber}`);
    }
  };

  const handleLocation = (latitude: number, longitude: number) => {
    Linking.openURL(`https://www.google.com/maps?q=${latitude},${longitude}`);
  };

  const handleEmail = (email: string | null | undefined) => {
    if (email) {
      Linking.openURL(`mailto:${email}`);
    }
  };

  return (
    <View style={styles.container}>
      {filteredSchedules.length === 0 ? (
        <Text>No schedules available</Text>
      ) : (
        filteredSchedules.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            {item.patients.map((schedule) => (
              <View key={schedule.id} style={styles.scheduleContainer}>
                <Text style={styles.TextwhoApproved}>
                  Clinician: {item.clinician}
                </Text>
                <View style={styles.profileContainer}>
                  <Image
                    source={
                      schedule.profileImage
                        ? { uri: schedule.profileImage.url }
                        : require("../../assets/images/placeholder.png")
                    }
                    style={styles.profileImage}
                  />
                  <View
                    style={[
                      styles.statusContainer,
                      {
                        backgroundColor:
                          item.scheduleStatus === "APPROVED" ||
                          item.scheduleStatus === "NEW SCHEDULE"
                            ? Colors.GREEN
                            : item.scheduleStatus === "PENDING"
                            ? Colors.YELLOW
                            : Colors.GRAY,
                      },
                    ]}
                  >
                    <Text style={styles.statusText}>{item.scheduleStatus}</Text>
                  </View>
                </View>
                <View style={styles.infoContainer}>
                  <Text style={styles.itemText}>
                    Full Name: {schedule.fullName}
                  </Text>
                  <Text style={styles.itemText}>Room: {item.room}</Text>
                  {item.scheduleDate && <Text style={styles.itemText}>Schedule Date: {item.scheduleDate}</Text>}
                  <Text style={styles.itemText}>Time: {item.time}</Text>
                </View>
                <View style={styles.iconContainer}>
                  {item.contactNumber && (
                    <>
                      <TouchableOpacity
                        onPress={() => handleCall(item.contactNumber ?? "")}
                      >
                        <Ionicons name="call" size={30} color="black" />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => handleMessage(item.contactNumber ?? "")}
                      >
                        <Ionicons name="chatbubble" size={30} color="black" />
                      </TouchableOpacity>
                    </>
                  )}
                  {item.location && (
                    <TouchableOpacity
                      onPress={() =>
                        item.location &&
                        handleLocation(
                          item.location.latitude,
                          item.location.longitude
                        )
                      }
                    >
                      <Ionicons name="location" size={30} color="black" />
                    </TouchableOpacity>
                  )}
                  {item.email && (
                    <TouchableOpacity
                      onPress={() => handleEmail(item.email)}
                    >
                      <Ionicons name="mail" size={30} color="black" />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            ))}
          </View>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 600,
    alignSelf: "center",
    width: "100%",
    marginBottom: 10,
  },
  TextwhoApproved: {
    fontSize: 16,
    textAlign: "right",
    fontFamily: "outfit",
  },
  itemContainer: {
    marginBottom: 10,
    borderWidth: 1,
    padding: 13,
    borderColor: Colors.GRAY,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
  },
  scheduleContainer: {
    marginBottom: 10,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
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
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
    marginVertical: 2,
    fontFamily: "outfit",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1,
    height: 60,
    borderColor: Colors.GRAY,
    borderRadius: 5,
    marginTop: 20,
  },
});

export default GetNewschedule;
