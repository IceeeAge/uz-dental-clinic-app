import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import React from 'react';
import { useQuery, gql } from '@apollo/client';

// Define the GraphQL query to fetch patient data
const GET_PATIENTS = gql`
  query MyQuery {
    patients {
      id
      fullName
      email
      profileImage {
        fileName
        id
        url
      }
    }
  }
`;

export default function Home() {
  // Use Apollo Client's useQuery hook to fetch data
  const { loading, error, data } = useQuery(GET_PATIENTS);

  // Handle loading and error states
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

 
  const placeholderImage = 'https://via.placeholder.com/50';

  return (
    <View style={styles.container}>
      <FlatList
        data={data.patients}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemContainer}>
              <Image
                source={{ uri: item.profileImage?.url || placeholderImage }}
                style={styles.image}
                onError={(e) => console.log('Image load error:', e.nativeEvent.error)} // Log image load errors
              />
              <Text style={styles.text}>{item.fullName || 'No Name'}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  text: {
    fontSize: 16,
  },
});
