import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Colors from '../../Utils/Colors';
import { format } from 'date-fns';

const PatientItem = ({ item }) => {
  console.log("pastient",item);
  const isApproved = item.statusAppointment === 'APPROVED';
  const isPending = item.statusAppointment === 'PENDING';

  return (
    <View style={styles.itemContainer}>
      <View style={styles.profileImageContainer}>
        <Image
          source={
            item.profileImage
              ? { uri: item.profileImage.url }
              : require('../../assets/images/placeholder.png')
          }
          style={styles.profileImage}
        />
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
            },
          ]}
        >
          <Text
            style={[
              styles.statusText,
              isApproved && { color: Colors.WHITE },
              isPending && { color: Colors.YELLOW },
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
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: Colors.WHITE,
    flex:1,
    padding: 13,
    marginBottom: 10,
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
  itemText: {
    fontSize: 16,
    marginVertical: 2,
    fontFamily: 'outfit',
  },
});

export default PatientItem;
