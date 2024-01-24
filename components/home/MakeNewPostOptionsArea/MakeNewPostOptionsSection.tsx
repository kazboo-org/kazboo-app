import { View, Text } from "react-native";
import React from "react";
import PressableIcon from "../../common/UI/PressableIcon/PressableIcon";
import styles from "./MakeNewPostOptionsSection.style";
import { Link } from "expo-router";
import Colors from "../../../constants/Colors";

export default function MakeNewPostOptionsSection() {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.postOptionsText}>Hvad vil du gerne poste?</Text>
      <View style={styles.postOptionsContainer}>
        <View>
          <Link href={"/modals/postByTextModal"} asChild>
            <PressableIcon
              name="commenting-o"
              color={Colors.common.orangeColor}
            />
          </Link>
        </View>
        <View>
          <Link href={"/modals/postByAudioModal"} asChild>
            <PressableIcon
              name="microphone"
              color={Colors.common.orangeColor}
            />
          </Link>
        </View>
        <View>
          <Link href={"/modals/postByPhotoVideoModal"} asChild>
            <PressableIcon name="camera" color={Colors.common.orangeColor} />
          </Link>
        </View>
      </View>
    </View>
  );
}
