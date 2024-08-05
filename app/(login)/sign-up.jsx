import { Button, TextInput, View, StyleSheet, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { useSignUp } from '@clerk/clerk-expo';
import { useState } from 'react';
import { Stack } from 'expo-router';
import Colors from '../../Utils/Colors';
import PrimaryButton from '@/components/PrimaryButton';
import Ionicons from '@expo/vector-icons/Ionicons';

const SignUp = () => {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Validate input fields
  const validateInputs = () => {
    return firstName && lastName && emailAddress && password;
  };

  // Create the user and send the verification email
  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    if (!validateInputs()) {
      alert('Please fill in all fields.');
      return;
    }

    setLoading(true);

    try {
      // Create the user on Clerk
      await signUp.create({
        firstName,
        lastName,
        emailAddress,
        password,
      });

      // Send verification Email
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

      // Change the UI to verify the email address
      setPendingVerification(true);
    } catch (err) {
      alert(err.errors[0]?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Verify the email address
  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    if (!code) {
      alert('Please enter the verification code.');
      return;
    }

    setLoading(true);

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err) {
      alert(err.errors[0]?.message || 'Invalid code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerBackVisible: !pendingVerification }} />

      {loading && <ActivityIndicator size="large" color={Colors.PRIMARY} />}

      {!pendingVerification ? (
        <>
          <TextInput
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
            style={styles.inputField}
          />
          <TextInput
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
            style={styles.inputField}
          />
          <TextInput
            autoCapitalize="none"
            placeholder="Email Address"
            value={emailAddress}
            onChangeText={setEmailAddress}
            style={styles.inputField}
          />
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!passwordVisible}
              style={[styles.inputField, styles.passwordInput]}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              <Ionicons
                name={passwordVisible ? 'eye' : 'eye-off'}
                size={24}
                color={Colors.BLACK}
              />
            </TouchableOpacity>
          </View>

          <PrimaryButton title="Sign Up" onPress={onSignUpPress} />
        </>
      ) : (
        <>
          <TextInput
            value={code}
            placeholder="Enter Verification Code"
            style={styles.inputField}
            onChangeText={setCode}
          />
          <Button onPress={onPressVerify} title="Verify Email" color={Colors.PRIMARY} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 100,
    maxWidth: 600,
    alignSelf: "center",
    borderWidth: 1,
    width: "90%",
    borderColor: Colors.GRAY,
  },
  inputField: {
    marginVertical: 10,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
});

export default SignUp;
