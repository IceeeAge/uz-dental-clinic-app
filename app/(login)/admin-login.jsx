import { useSignIn } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import PrimaryButton from "../../components/PrimaryButton";
import Colors from "../../Utils/Colors";

export default function AdminLogin() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSignInPress = React.useCallback(async () => {
    if (!isLoaded) {
      return;
    }

    // Allowed email address for login
    const allowedEmail = "izmealsjh@gmail.com";

    // Check if the entered email address matches the allowed email
    if (emailAddress !== allowedEmail) {
      setErrorMessage("You are not Admin.");
      return;
    }

    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("(dashboard)");
      } else {
        // Handle sign-in attempt failure
        setErrorMessage("Login failed. Please check your credentials.");
      }
    } catch (err) {
      // Handle unexpected errors
      setErrorMessage("An error occurred. Please try again.");
    }
  }, [isLoaded, emailAddress, password]);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/dental-logo.jpg")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View>
        <TextInput
          autoCapitalize="none"
          placeholder="example@gmail.com"
          value={emailAddress}
          onChangeText={setEmailAddress}
          style={styles.inputField}
        />
        <View style={styles.subContainer}>
          <TextInput
            placeholder="password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!isPasswordVisible}
            style={[styles.inputField, styles.passwordInput]}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Ionicons
              name={isPasswordVisible ? "eye-off" : "eye"}
              size={24}
              color={Colors.BLACK}
              style={styles.eyeBtn}
            />
          </TouchableOpacity>
        </View>
        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}
      </View>
      <View>
        <PrimaryButton onPress={onSignInPress} title="Login" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
    marginTop: 100,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 100,
    alignSelf: "center",
  },
  inputField: {
    height: 60,
    borderColor: Colors.WHITE,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.WHITE,
    borderRadius: 4,
    marginVertical: 10,
    backgroundColor: "#fff",
  },
  eyeBtn: {
    paddingHorizontal: 10,
  },
  passwordInput: {
    flex: 1,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
});
