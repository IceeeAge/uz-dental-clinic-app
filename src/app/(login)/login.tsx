import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useCallback } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import PrimaryButton from "@/components/PrimaryButton";
import Colors from "@constants/Colors";
import { Toast } from "react-native-toast-notifications";

const Page: React.FC = () => {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onSignInPress = useCallback(async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.push("/home");
        Toast.show("Login successfully", {
          type: "Normal",
          placement: "bottom",
          duration: 4000,
          animationType: "slide-in",
        });
        return;
      } else {
        setErrorMessage("Sign-in failed. Please check your credentials.");
      }
    } catch (err: any) {
      setErrorMessage("Login failed. Please try again.");
    }
  }, [isLoaded, emailAddress, password, signIn, setActive, router]);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={require("../../assets/images/dental-logo.jpg")}
          style={styles.logo}
          resizeMode="contain"
        />
        <View>
          {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
          <TextInput
            autoCapitalize="none"
            placeholder="Email"
            value={emailAddress}
            onChangeText={setEmailAddress}
            style={styles.inputField}
          />
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Password"
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
        <PrimaryButton onPress={onSignInPress} title="Login" />
        <View style={styles.pressableContainer}>
          <Link href="/reset" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.text}>Reset Password</Text>
            </Pressable>
          </Link>
          <Link href="/sign-up" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.text}>Sign Up</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  innerContainer: {
    padding: 20,
    marginTop: 100,
    maxWidth: 500,
    alignSelf: "center",
    borderWidth: 1,
    width: "90%",
    borderColor: Colors.GRAY,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    elevation: 1,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    alignSelf: "center",
  },
  inputField: {
    height: 50,
    borderColor: Colors.GRAY,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: Colors.WHITE,
  },
  passwordContainer: {
    position: "relative",
    marginBottom: 10,
  },
  passwordInput: {
    height: 50,
    borderColor: Colors.GRAY,
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    backgroundColor: Colors.WHITE,
    paddingRight: 40, // Add padding to the right to make space for the eye icon
  },
  eyeBtn: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: [{ translateY: -12 }], // Center the icon vertically
  },
  button: {
    marginVertical: 10,
    alignItems: "center",
  },
  pressableContainer: {
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: "outfit-medium",
    color: Colors.BLACK,
  },
  errorText: {
    color: "red",
    marginVertical: 10,
    textAlign: "center",
  },
});

export default Page;
