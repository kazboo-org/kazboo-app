import { View, Text, Pressable } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import styles from "./MakeNewPostOptionsSection.style";
import { Link } from "expo-router";
import Colors from "../../../constants/Colors";

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
          <Link href={"/modals/postByTextModal"} asChild>
            <PostOption
              name="commenting-o"
              color={Colors.common.iconMainColor}
            />
          </Link>
        </View>
        <View>
          <Link href={"/modals/postByAudioModal"} asChild>
            <PostOption name="microphone" color={Colors.common.iconMainColor} />
          </Link>
        </View>
        <View>
          <Link href={"/modals/postByPhotoVideoModal"} asChild>
            <PostOption name="camera" color={Colors.common.iconMainColor} />
          </Link>
        </View>
      </View>
    </View>
  );
}
