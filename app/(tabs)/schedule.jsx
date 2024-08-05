import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import { useQuery } from '@apollo/client';
import { useClerk } from '@clerk/clerk-expo';
import { GET_SCHEDULE_USER } from '../../GraphQL/Quey';
import Colors from '../../Utils/Colors';
import Getschedule from '../../components/GetNewschedule';
import { format } from 'date-fns';

const Schedule = () => {
  const { width } = useWindowDimensions();
  const { user } = useClerk();

  const { loading, error, data } = useQuery(GET_SCHEDULE_USER, {
    pollInterval: 3000,
  });

  if (loading) return <Text style={styles.loadingText}>Loading...</Text>;
  if (error) return <Text style={styles.errorText}>Error: {error.message}</Text>;

  const filteredPatients = data.patients.filter(
    (patient) => patient.email === user?.primaryEmailAddress.emailAddress
  );

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={filteredPatients}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const isApproved = item.statusAppointment === 'APPROVED';
          const isPending = item.statusAppointment === 'PENDING';

          return (
            <View style={styles.itemContainer}>
              <View style={styles.profileImageContainer}>
                {item.profileImage ? (
                  <Image
                    source={{ uri: item.profileImage.url }}
                    style={styles.profileImage}
                  />
                ) : (
                  <Image
                    source={require('../../assets/images/placeholder.png')}
                    style={styles.profileImage}
                  />
                )}
                <View
                  style={[
                    styles.statusContainer,
                    isApproved && {
                      backgroundColor: Colors.GREEN,
                      borderColor: Colors.GRAY,
                    },
                    isPending && {
                      backgroundColor: Colors.WHITE,
                      borderColor: Colors.GRAY,
                    }
                  ]}
                >
                  <Text
                    style={[
                      styles.statusText,
                      isApproved && { color: Colors.WHITE },
                      isPending && { color: Colors.YELLOW }
                    ]}
                  >
                    {item.statusAppointment}
                  </Text>
                </View>
              </View>
              <Text style={styles.itemText}>Full Name: {item.fullName}</Text>
              <Text style={styles.itemText}>
                Created Date: {format(new Date(item.createdAt), 'MMMM dd, yyyy')}
              </Text>
            </View>
          );
        }}
      />
      <View>
        <Getschedule /> 
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    maxWidth: 600,
    alignSelf: 'center',
    width: '100%',
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
  itemText: {
    fontSize: 16,
    marginVertical: 2,
    fontFamily: 'outfit',
  },
  profileImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    height: 45,
    padding: 10,
    borderColor: Colors.GRAY,
    alignSelf: "center",
    marginTop: 13,
  },
  statusText: {
    fontSize: 15,
    fontFamily: 'outfit-bold',
    textAlign: 'center',
    color: Colors.WHITE,
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
