import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';
import { useSignIn } from '@clerk/clerk-expo';
import Colors from "@constants/Colors";
import PrimaryButton from '@/components/PrimaryButton';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have @expo/vector-icons installed
import { Toast } from 'react-native-toast-notifications';

const PwReset = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [successfulCreation, setSuccessfulCreation] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { signIn, setActive } = useSignIn();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const onRequestReset = async () => {
    try {
      if (signIn) {
        const result = await signIn.create({
          strategy: 'reset_password_email_code',
          identifier: emailAddress,
        });
        setSuccessfulCreation(true);
      } else {
      
        Toast.show("is invalid", { type: "danger", duration: 2000, placement: "center" });
      }
    } catch (err:any) {
      Toast.show("is invalid", { type: "danger", duration: 2000, placement: "center" });
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
        Toast.show("Password reset successfully", { type: "normal", duration: 2000, placement: "center" });
        if (setActive) {
          await setActive({ session: result.createdSessionId });
        }
      } else {
        Toast.show("is invalid", { type: "danger", duration: 2000, placement: "center" });
      }
    } catch (err:any) {
      Toast.show("is invalid", { type: "danger", duration: 2000, placement: "center" });
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerBackVisible: !successfulCreation }} />

      {!successfulCreation ? (
        <>
          <TextInput
            autoCapitalize="none"
            placeholder="example@gmail.com"
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
              placeholder="Enter code"
              style={styles.inputField}
              onChangeText={setCode}
            />
            <View style={styles.passwordContainer}>
              <TextInput
                placeholder="Enter password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!isPasswordVisible}
                style={styles.passwordInput}
              />
              <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeBtn}>
                <Ionicons
                  name={isPasswordVisible ? "eye-off" : "eye"}
                  size={24}
                  color={Colors.BLACK}
                />
              </TouchableOpacity>
            </View>
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
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  passwordInput: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    borderRadius: 4,
    padding: 10,
    backgroundColor: Colors.WHITE,
  },
  eyeBtn: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -12 }], // Center the icon vertically
  },
  button: {
    margin: 8,
    alignItems: 'center',
  },
});

export default PwReset;
