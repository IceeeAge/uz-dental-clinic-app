import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { useQuery } from "@apollo/client";
import { useClerk } from "@clerk/clerk-expo";
import { GET_SCHEDULE_USER } from "../../GraphQL/Quey"; 

const Schedule = () => {
  const { user } = useClerk();

  // Get data, loading, and error. PollInterval is to fetch or refresh data every 3 seconds
  const { loading, error, data } = useQuery(GET_SCHEDULE_USER, {
    pollInterval: 3000,
  });

  if (loading) return <Text style={styles.loadingText}>Loading...</Text>;
  if (error) return <Text style={styles.errorText}>Error: {error.message}</Text>;

  // Filter data to show only patients with the same email as the logged-in user
  const filteredPatients = data.patients.filter(
    (patient) => patient.email === user?.primaryEmailAddress.emailAddress
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredPatients}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Full Name: {item.fullName}</Text>
            <Text style={styles.itemText}>Email: {item.email}</Text>
            <Text style={styles.itemText}>Occupation: {item.occupation}</Text>
            <Text style={styles.itemText}>Weight: {item.weight}</Text>
            <Text style={styles.itemText}>Status: {item.statusAppointment}</Text>
            <Text style={styles.itemText}>Sex: {item.sex}</Text>
            <Text style={styles.itemText}>Height: {item.height}</Text>
            <Text style={styles.itemText}>Address: {item.address}</Text>
            <Text style={styles.itemText}>Contact Number: {item.contactNumber}</Text>
            {item.profileImage ? (
              <Image
                source={{ uri: item.profileImage.url }}
                style={styles.profileImage}
              />
            ) : (
              <Image
                source={require('../../assets/images/placeholder.png')} // Local placeholder image
                style={styles.profileImage}
              />
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  itemText: {
    fontSize: 16,
    marginVertical: 2,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Schedule;
