import {
  View,
  Text,
  Image,
  ScrollView,
  useColorScheme,
  Pressable,
} from "react-native";
import React from "react";
import Button from "../components/common/Button/Button";
import styles from "./userProfileDashboard.style";
import SpeechButton from "../components/common/SpeechButton/SpeechButton";
import { Link } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "../constants/Colors";
import UserProfileCard from "../components/common/UserProfileCard/UserProfileCard";

const screenDescription =
  "Her kan du ændre på hvordan din profil ser ud, hvordan du vil have notifikationer og få hjælp.";

export default function UserProfileDashboard() {
  const colorScheme = useColorScheme();

  return (
    <ScrollView style={styles.screen}>
      <Button buttonText="Se min profil" path="/userProfile" />
      <View style={styles.screenDescriptionContainer}>
        <Text style={styles.screenTitle}>Dine indstillinger</Text>
        <Text style={styles.screenDescription}>{screenDescription}</Text>
        <SpeechButton speechText={screenDescription} />
      </View>
      <View style={styles.cardsContainer}>
        {/* <UserProfileCard /> */}
        {/* <View style={styles.cardContainer}>
          <Link href="/home">
            <View style={styles.cardContent}>
              <Image
                source={require("../assets/images/user-profile/havebilledde-2.jpg")}
                style={{ width: 157, height: 157 }}
              />
              <FontAwesome
                name="heart"
                size={40}
                color={Colors[colorScheme ?? "light"].text}
              />
              <Text style={styles.cardTitle}>Kærester</Text>
            </View>
          </Link>
        </View> */}
        <View style={styles.cardContainer}>
          <Link href="/notifications">
            <View style={styles.cardContent}>
              <Image
                source={require("../assets/images/user-profile/havebilledde-2.jpg")}
                style={{ width: 157, height: 157 }}
              />
              <FontAwesome
                name="heart"
                size={40}
                color={Colors[colorScheme ?? "light"].text}
              />
              <Text style={styles.cardTitle}>Kærester</Text>
            </View>
          </Link>
        </View>
        <View style={styles.cardContainer}>
          <Link href="/notifications">
            <View style={styles.cardContent}>
              <Image
                source={require("../assets/images/user-profile/havebilledde-2.jpg")}
                style={{ width: 157, height: 157 }}
              />
              <FontAwesome
                name="heart"
                size={40}
                color={Colors[colorScheme ?? "light"].text}
              />
              <Text style={styles.cardTitle}>Kærester</Text>
            </View>
          </Link>
        </View>
        <View style={styles.cardContainer}>
          <Link href="/notifications">
            <View style={styles.cardContent}>
              <Image
                source={require("../assets/images/user-profile/havebilledde-2.jpg")}
                style={{ width: 157, height: 157 }}
              />
              <FontAwesome
                name="heart"
                size={40}
                color={Colors[colorScheme ?? "light"].text}
              />
              <Text style={styles.cardTitle}>Kærester</Text>
            </View>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}
