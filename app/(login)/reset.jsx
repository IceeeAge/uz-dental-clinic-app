import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Alert } from 'react-native';
import { Stack } from 'expo-router';
import { useSignIn } from '@clerk/clerk-expo';
import Colors from '../../Utils/Colors';
import PrimaryButton from '../../components/PrimaryButton';

const PwReset = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [successfulCreation, setSuccessfulCreation] = useState(false);
  const { signIn, setActive } = useSignIn();

  const onRequestReset = async () => {
    try {
      if (signIn) {
        const result = await signIn.create({
          strategy: 'reset_password_email_code',
          identifier: emailAddress,
        });
        console.log(result); // Log the result
        setSuccessfulCreation(true);
      } else {
        Alert.alert('Error', 'Sign-in object is not defined');
      }
    } catch (err) {
      console.log(err); // Log the error
      Alert.alert('Error', err.errors[0]?.message || 'An unknown error occurred');
    }
  };
  
  const onReset = async () => {
    try {
      if (signIn) {
        const result = await signIn.attemptFirstFactor({
          strategy: 'reset_password_email_code',
          code,
          password,
        });
        console.log(result); // Log the result
        Alert.alert('Success', 'Password reset successfully');
  
        if (setActive) {
          await setActive({ session: result.createdSessionId });
        }
      } else {
        Alert.alert('Error', 'Sign-in object is not defined');
      }
    } catch (err) {
      console.log(err); // Log the error
      Alert.alert('Error', err.errors[0]?.message || 'An unknown error occurred');
    }
  };
  
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerBackVisible: !successfulCreation }} />

      {!successfulCreation ? (
        <>
          <TextInput
            autoCapitalize="none"
            placeholder="salih@gmail.com"
            value={emailAddress}
            onChangeText={setEmailAddress}
            style={styles.inputField}
          />
          <PrimaryButton title="Send Reset Email" onPress={onRequestReset} />
        </>
      ) : (
        <>
          <View>
            <TextInput
              value={code}
              placeholder="Code..."
              style={styles.inputField}
              onChangeText={setCode}
            />
            <TextInput
              placeholder="New password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.inputField}
            />
          </View>
          <PrimaryButton title="Set New Password" onPress={onReset} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    maxWidth: 600,
    alignSelf: 'center',
    width: '90%',
  },
  inputField: {
    marginVertical: 10,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    borderRadius: 4,
    padding: 10,
    backgroundColor: Colors.WHITE,
  },
  button: {
    margin: 8,
    alignItems: 'center',
  },
});

export default PwReset;
