import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import {
  Text,
  TextInput,
  Button,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import PrimaryButton from "../../components/PrimaryButton";
import { Image } from "react-native";
import Colors from "../../Utils/Colors";

export default function Page() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSignInPress = React.useCallback(async () => {
    if (!isLoaded) {
      return;
    }

    // Allow login only for the specified email address
    const allowedEmail = "izmealsjh@gmail.com";

    if (emailAddress !== allowedEmail) {
      setErrorMessage("You are not Admin.");
      router.replace("home");
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
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
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
          placeholder="salih@gmail.com"
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
      </View>
      <View>
        <PrimaryButton onPress={onSignInPress} title="Login" />
      </View>
      <View style={styles.pressableContainer}>
        <Link href="/reset" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.text}>Reset Password</Text>
          </Pressable>
        </Link>
        <Link href="sign-up" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.text}>Sign Up</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

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
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  passwordInput: {
    flex: 1,
  },
  button: {
    margin: 8,
    alignItems: "center",
  },
  pressableContainer: {
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: "outfit-medium",
  },
});
