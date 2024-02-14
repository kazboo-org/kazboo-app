import { View, Text, Image, useColorScheme } from "react-native";
import React from "react";
import { Link } from "expo-router";

import styles from "./UserProfileCard.style";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "../../../constants/Colors";

export default function UserProfileCard() {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.cardContainer}>
      <Link href="/home">
        <View style={styles.cardContent}>
          <Image
            source={require("../../../assets/images/user-profile/havebilledde-2.jpg")}
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
  );
}
