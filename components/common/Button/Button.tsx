import { View, Text, Pressable, useColorScheme } from "react-native";
import React from "react";
import { Link } from "expo-router";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "../../../constants/Colors";
import styles from "./Button.style";

type RelativePathString = `/${string}`;

interface ButtonProps {
  iconName: React.ComponentProps<typeof FontAwesome>["name"];
  buttonText: string;
  path: RelativePathString;
}

export default function Button({ iconName, buttonText, path }: ButtonProps) {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.buttonContainer}>
      <Link href={path} asChild>
        <Pressable>
          {({ pressed }) => (
            // <UserProfileScreenIcon fill={""} width={35} height={40} />
            <View style={[styles.button, pressed && styles.pressed]}>
              <FontAwesome
                name={iconName}
                size={25}
                color={Colors[colorScheme ?? "light"].text}
                style={{
                  opacity: pressed ? 0.5 : 1,
                }}
              />
              <Text style={{ opacity: pressed ? 0.5 : 1 }}>{buttonText}</Text>
            </View>
          )}
        </Pressable>
      </Link>
    </View>
  );
}
