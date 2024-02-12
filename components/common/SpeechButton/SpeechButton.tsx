import { View, Text, Pressable, useColorScheme, Button } from "react-native";
import React from "react";
import Colors from "../../../constants/Colors";
import * as Speech from "expo-speech";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./SpeechButton.style";

export default function SpeechButton(speech: string) {
  const colorScheme = useColorScheme();

  const speak = () => {
    const thingToSay =
      "Her kan du ændre på hvordan din profil ser ud, hvordan du vil have notifikationer og få hjælp";
    Speech.speak(speech);
    const voices = Speech.getAvailableVoicesAsync();
    console.log(voices);
  };

  return (
    <Pressable
      onPress={() => {
        speak();
      }}
    >
      {({ pressed }) => (
        // <UserProfileScreenIcon fill={""} width={35} height={40} />
        <View style={styles.button}>
          <FontAwesome
            name="volume-up"
            size={25}
            color={Colors[colorScheme ?? "light"].text}
            style={{
              opacity: pressed ? 0.5 : 1,
            }}
          />
          <Text style={{ opacity: pressed ? 0.5 : 1 }}>Læs op</Text>
        </View>
      )}
    </Pressable>
  );
}
