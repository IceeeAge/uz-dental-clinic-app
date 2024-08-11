import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import { useQuery } from '@apollo/client';
import { useClerk } from '@clerk/clerk-expo';
import { GET_SCHEDULE_USER } from '../../GraphQL/Query';
import Colors from '../../Utils/Colors';
import { format } from 'date-fns';
import Getschedule from '../../components/GetNewschedule';

const Schedule = () => {
  const { width } = useWindowDimensions();
  const { user } = useClerk();

  const { loading, error, data } = useQuery(GET_SCHEDULE_USER, {
    pollInterval: 3000,
  });

  if (loading) return <Text style={styles.loadingText}>Loading...</Text>;
  if (error) return <Text style={styles.errorText}>Error: {error.message}</Text>;

  // Filter the data based on the logged-in user's email
  const filteredPatients = data?.patients?.filter(
    (patient) => patient.email === user?.primaryEmailAddress.emailAddress
  ) || [];

  return (
    <ScrollView style={styles.container}>
      {filteredPatients.length === 0 ? (
        <Text style={styles.noDataText}>No schedule or appointment </Text>
      ) : (
        <>
          <FlatList
            data={filteredPatients}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              const isApproved = item.statusAppointment === 'APPROVED';
              const isPending = item.statusAppointment === 'PENDING';

              return (
                <View style={styles.itemContainer}>
                  <View style={styles.profileImageContainer}>
                    <Image
                      source={item.profileImage ? { uri: item.profileImage.url } : require('../../assets/images/placeholder.png')}
                      style={styles.profileImage}
                    />
                    <View
                      style={[
                        styles.statusContainer,
                        isApproved && { backgroundColor: Colors.GREEN, borderColor: Colors.GRAY },
                        isPending && { backgroundColor: Colors.WHITE, borderColor: Colors.GRAY }
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
            <Getschedule data={filteredPatients} />
          </View>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    maxWidth: 600,
    alignSelf: 'center',
    width: '100%',
    marginBottom:10
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
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  statusContainer: {
    borderWidth: 1,
    borderRadius: 5,
    height: 45,
    padding: 10,
    borderColor: Colors.GRAY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusText: {
    fontSize: 15,
    fontFamily: 'outfit-bold',
    textAlign: 'center',
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
  noDataText: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.BLACK,
    marginTop: 30,
  },
});

export default Schedule;
