import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Menu() {
  return (
    <View>
      <Link href="/userProfile" asChild>
        <Pressable>
          {({ pressed }) => (
            <Text style={{ marginLeft: 20, opacity: pressed ? 0.5 : 1 }}>
              Check Profile Page
            </Text>
          )}
        </Pressable>
      </Link>
    </View>
  );
}
