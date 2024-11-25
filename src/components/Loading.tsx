import Colors from "@constants/Colors";
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const Loading: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a delay of 13 seconds before stopping the loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 13000); // 13000 milliseconds = 13 seconds

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size="large" color={Colors.PRIMARY} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
