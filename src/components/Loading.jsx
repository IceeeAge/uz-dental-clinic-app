// components/Loading.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Loading = () => {
  return <Text style={styles.loadingText}>Loading...</Text>;
};

const styles = StyleSheet.create({
  loadingText: {
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Loading;
