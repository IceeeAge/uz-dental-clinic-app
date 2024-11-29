import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Linking,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import FontSize from "@/constants/FontsSize";
import IconSize from "@/constants/IconSize";

export default function Profile() {
  const { user } = useUser();
  const { signOut } = useAuth();
  const router = useRouter();
  const [isloading, setisLoading] = useState(false);
  const doLogout = async () => {
    setisLoading(true);
    try {
      await signOut();
      router.replace("/(auth)");
      setisLoading(false);
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  const handleUpdateImage = () => {
    Linking.openURL("https://more-gopher-43.accounts.dev/user");
  };

  const OnSchedule = () => {
    router.navigate("/schedule");
  };

  const OnChartting = () => {
    router.navigate("/chartting");
  };
  const OnEform = () => {
    router.navigate("/eform");
  };
  return (
    <View style={styles.container}>
      {isloading ? (
        <ActivityIndicator size="large" color={Colors.PRIMARY} style={styles.loader} />
      ) : (
        <>
          <View style={styles.subcontainer}>
            <View style={styles.imageContainer}>
              <TouchableOpacity onPress={handleUpdateImage}>
                <Image
                  source={{ uri: user?.imageUrl }}
                  style={styles.profileUrlImage}
                />

                <Ionicons
                  name="camera"
                  size={24}
                  color="black"
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.userText}>{user?.fullName}</Text>
            <Text style={styles.userText}>
              {" "}
              {user?.primaryEmailAddress?.emailAddress}
            </Text>
          </View>
          <View style={styles.Optionscontainer}>
            <TouchableOpacity onPress={OnEform} style={styles.btnIcon}>
              <MaterialCommunityIcons
                name="note-outline"
                size={IconSize.xl}
                color={Colors.BLACK}
              />
              <Text style={styles.IconText}>Eform</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={OnChartting} style={styles.btnIcon}>
              <MaterialCommunityIcons
                name="tooth"
                size={IconSize.xl}
                color={Colors.BLACK}
              />
              <Text style={styles.IconText}>Chartting</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={OnSchedule} style={styles.btnIcon}>
              <Ionicons
                name="calendar"
                size={IconSize.xl}
                color={Colors.BLACK}
              />
              <Text style={styles.IconText}>Schedule</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={doLogout} style={styles.btnIcon}>
              <MaterialIcons
                name="logout"
                size={IconSize.xl}
                color={Colors.BLACK}
              />
              <Text style={styles.IconText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flex: 1,
  },
  subcontainer: {
    backgroundColor: Colors.WHITE,
    padding: 20,
    borderRadius: 10,
    margin: 10,
    elevation: 5,
  },
  userText: {
    fontSize: FontSize.lg,
    textAlign: "center",
  },
  imageContainer: {
    position: "relative",
  },
  profileUrlImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
    alignSelf: "center",
  },
  icon: {
    position: "absolute",
    bottom: 10,
    right: 100,
    backgroundColor: Colors.WHITE,
    borderRadius: 12,
    padding: 2,
  },
  Optionscontainer: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    elevation: 5,
    marginBottom: 10,
  },
  btnIcon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
  },
  IconText: {
    textAlign: "center",
    fontSize: FontSize.md,
    color: Colors.BLACK,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
