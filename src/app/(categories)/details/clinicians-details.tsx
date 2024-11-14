import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
  ScrollView,
} from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { GetMedicalTeamQuery } from "@generated/graphql";
import Colors from "@/constants/Colors";
import FontSize from "@/constants/FontsSize";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import IconSize from "@/constants/IconSize";
import PrimaryButton from "@/components/PrimaryButton";

export default function ClinicianDetails() {
  const router = useRouter();
  const { medical } = useLocalSearchParams();
  const medicalData: GetMedicalTeamQuery["medicalTeams"][0] | null = medical
    ? JSON.parse(medical as string)
    : null;

  const handlePressEmail = async () => {
    if (medicalData?.email) {
      const url = `mailto:${medicalData.email}`;
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Error", "Unable to open email app");
      }
    }
  };

  const handlePressPhone = async () => {
    if (medicalData?.phoneNumber) {
      const url = `tel:${medicalData.phoneNumber}`;
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Error", "Unable to open phone dialer");
      }
    }
  };
  const handlePressLocation = async () => {
    if (medicalData?.location) {
      const url = `https://www.google.com/maps/search/?api=1&query=${medicalData.location.latitude},${medicalData.location.longitude}`;
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Error", "Unable to open map app");
      }
    }
  };
  

  const handlePressChat = async () => {
    if (medicalData?.phoneNumber) {
      const url = `sms:${medicalData.phoneNumber}`;
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Error", "Unable to open messaging app");
      }
    }
  };

  const handleAppointmentPress = () => {
    router.replace("/appointment")
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <Image
        source={{ uri: medicalData?.profileImage?.url }}
        style={styles.image}
      />
      <Text style={styles.title}>{medicalData?.title}</Text>
      <View style={styles.nameContainer}>
      <Text style={styles.name}>{medicalData?.fullName}</Text>
      </View>
  

      <View style={styles.infoRow}>
        <TouchableOpacity
          style={styles.BorderContainer}
          onPress={handlePressEmail}
        >
          <FontAwesome
            name="envelope"
            size={IconSize.md}
            color={Colors.PRIMARY}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.BorderContainer}
          onPress={handlePressPhone}
        >
          <FontAwesome name="phone" size={IconSize.md} color={Colors.PRIMARY} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.BorderContainer}
          onPress={handlePressLocation}
        >
          <Ionicons
            name="location-sharp"
            size={IconSize.md}
            color={Colors.PRIMARY}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.BorderContainer}
          onPress={handlePressChat}
        >
          <Ionicons
            name="chatbubble"
            size={IconSize.md}
            color={Colors.PRIMARY}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.DescContainer}>
        <Text style={styles.about}>About</Text>
        <Text style={styles.description}>{medicalData?.aboutDoctor}</Text>
      </View>
      <View style={styles.buttonContainer}>
     <PrimaryButton title="Appointment Now" onPress={handleAppointmentPress} />
     </View>
    </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    resizeMode: "cover",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  nameContainer: {
    borderWidth: 1,
    alignSelf: "center",
    backgroundColor: Colors.PRIMARY,
    borderColor: Colors.GRAY,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: FontSize.md,
    color: Colors.WHITE,
    textAlign: "center",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 10,
  },
  about:{
  fontSize: FontSize.xl,
  fontFamily:"outfit-bold",
  },
  DescContainer: {
    borderWidth: 1,
    padding: 15,
    borderColor: Colors.GRAY,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
  },
  description: {
    fontSize: FontSize.md,
    color: Colors.BLACK,
    textAlign: "justify",
    marginTop: 10,
  },
  BorderContainer: {
    borderWidth: 1,
    padding: 10,
    borderColor: Colors.GRAY,
    backgroundColor: Colors.WHITE,
    borderRadius: 60,
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 50,
  },
});
