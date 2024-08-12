// components/Error.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Error = ({ message }) => {
  return <Text style={styles.errorText}>Error: {message}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Error;
