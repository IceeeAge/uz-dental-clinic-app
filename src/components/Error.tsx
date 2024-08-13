// components/Error.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';

type ErrorProps = {
  message: string;
};

const Error: React.FC<ErrorProps> = ({ message }) => {
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
