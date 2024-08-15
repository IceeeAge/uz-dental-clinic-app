import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useQuery } from '@apollo/client';
import { useClerk } from '@clerk/clerk-expo';
import { GET_SCHEDULE_USER } from '@GraphQL/Query';
import Colors from "@constants/Colors";
import PatientItem from '@/components/Schedule/PatientItem';
import GetNewschedule from '@/components/Schedule/GetNewschedule';
import {  GetPatienListQuery, } from 'src/generated/graphql';
import Loading from '@/components/Loading';
import Error from '@/components/Error';


const Schedule = () => {
  const { user } = useClerk();

  const { loading, error, data } = useQuery<GetPatienListQuery>(GET_SCHEDULE_USER, { pollInterval: 3000 });

  if (loading) return <Loading/>;
  if (error) return <Error message={error.message}/>;

  // Filter patients based on the logged-in user's email
  const filteredPatients = data?.patients.filter(
    (patient) => patient.email === user?.primaryEmailAddress?.emailAddress
  ) || [];

  return (
    <ScrollView style={styles.container}>
      {filteredPatients.length === 0 ? (
        <Text style={styles.noDataText}>No schedule or appointment</Text>
      ) : (
        filteredPatients.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <PatientItem item={item} />
          </View>
        ))
      )}
      <View style={styles.newScheduleContainer}>
        <GetNewschedule />
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
    marginBottom: 10,
  },
  itemContainer: {
    marginBottom: 10,
    borderWidth: 1,
    padding: 13,
    borderColor: Colors.GRAY,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
  },
  newScheduleContainer: {
    marginTop: 10,
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 20,
  },
  errorText: {
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
  },
  noDataText: {
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Schedule;
