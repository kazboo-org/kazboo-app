import { View, Text, Pressable } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import styles from "./MakeNewPostOptionsSection.style";
import { Link } from "expo-router";

function PostOption(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return (
    <Pressable>
      {({ pressed }) => (
        <FontAwesome
          size={50}
          //   color={Colors[colorScheme ?? "light"].text}
          style={{ opacity: pressed ? 0.5 : 1 }}
          {...props}
        />
      )}
    </Pressable>
  );
}

export default function MakeNewPostOptionsSection() {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.postOptionsText}>Hvad vil du gerne poste?</Text>
      <View style={styles.postOptionsContainer}>
        <View>
          <Link href={"/postByTextModal"} asChild>
            <PostOption name="commenting-o" color="orange" />
          </Link>
        </View>
        <View>
          <Link href={"/postByAudioModal"} asChild>
            <PostOption name="microphone" color="orange" />
          </Link>
        </View>
        <View>
          <Link href={"/postByPhotoVideoModal"} asChild>
            <PostOption name="camera" color="orange" />
          </Link>
        </View>
      </View>
    </View>
  );
}
