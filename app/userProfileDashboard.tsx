import { View, Text, Image } from "react-native";
import React from "react";
import Button from "../components/common/Button/Button";
import styles from "./userProfileDashboard.style";
import SpeechButton from "../components/common/SpeechButton/SpeechButton";
import { Link } from "expo-router";

const screenDescription =
  "Her kan du ændre på hvordan din profil ser ud, hvordan du vil have notifikationer og få hjælp.";

export default function UserProfileDashboard() {
  return (
    <View style={styles.screen}>
      <Button buttonText="Se min profil" path="/userProfile" />
      <View style={styles.screenDescriptionContainer}>
        <Text style={styles.screenTitle}>Dine indstillinger</Text>
        <Text style={styles.screenDescription}> {screenDescription}</Text>
        <SpeechButton speechText={screenDescription} />
      </View>
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Link href="/notifications" asChild>
            <Image
              source={require("../assets/images/user-profile/havebilledde-2.jpg")}
              style={{ width: 157, height: 157 }}
            />
          </Link>
        </View>
        <View style={styles.card}>
          <Link href="/notifications" asChild>
            <Image
              source={require("../assets/images/user-profile/havebilledde-2.jpg")}
              style={{ width: 157, height: 157 }}
            />
          </Link>
        </View>
        <View style={styles.card}>
          <Link href="/notifications" asChild>
            <Image
              source={require("../assets/images/user-profile/havebilledde-2.jpg")}
              style={{ width: 157, height: 157 }}
            />
          </Link>
        </View>
        <View style={styles.card}>
          <Link href="/notifications" asChild>
            <Image
              source={require("../assets/images/user-profile/havebilledde-2.jpg")}
              style={{ width: 157, height: 157 }}
            />
          </Link>
        </View>
      </View>
    </View>
  );
}
