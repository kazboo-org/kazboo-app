import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./MakeNewPostOptionsSection.style";
import { Link } from "expo-router";
import Colors from "../../../constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MessageIcon from "../../../assets/svgComponents/postOptionsSvgComponents/MessageIcon";

export default function MakeNewPostOptionsSection() {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.postOptionsText}>Hvad vil du gerne poste?</Text>
      <View style={styles.postOptionsContainer}>
        <View>
          <Link href={"/modals/postByTextModal"} asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  size={50}
                  name="commenting-o"
                  color={
                    pressed
                      ? Colors.common.modalIconPressedColor
                      : Colors.common.orangeColor
                  }
                />
                // FontAwesome icons need to be exchanged with local svg files
                // <MessageIcon fill={"orange"} />
              )}
            </Pressable>
          </Link>
        </View>
        <View>
          <Link href={"/modals/postByAudioModal"} asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  size={50}
                  name="microphone"
                  color={
                    pressed
                      ? Colors.common.modalIconPressedColor
                      : Colors.common.orangeColor
                  }
                />
              )}
            </Pressable>
          </Link>
        </View>
        <View>
          <Link href={"/modals/postByPhotoVideoModal"} asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  size={50}
                  name="camera"
                  color={
                    pressed
                      ? Colors.common.modalIconPressedColor
                      : Colors.common.orangeColor
                  }
                />
              )}
            </Pressable>
          </Link>
        </View>
      </View>
    </View>
  );
}
