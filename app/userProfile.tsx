import {
  View,
  Text,
  ImageBackground,
  Image,
  Pressable,
  useColorScheme,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import HeartBadge from "../components/common/HeartBadge/HeartBadge";
import Sizes from "../constants/Sizes";
import styles from "./UserProfile.style";
import data from "../data.json";
import Filter from "../components/common/Filter/Filter";
import { Link } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "../constants/Colors";

// This function sets a heart badge randomly on a user profile photo.
// Later, the heart badge will be set according to the user data fetched from the database and set in the global state.
function getRandomBooleanForSetHeartBadge() {
  return Math.random() >= 0.5;
}

export default function UserProfile() {
  const colorScheme = useColorScheme();
  return (
    <ScrollView>
      <View>
        <Image
          source={require("../assets/images/userProfileBackgroundImage.jpeg")}
          style={{
            width: "100%",
            height: Sizes.userProfileBackgroundImageHeight,
          }}
        />
      </View>
      <View style={styles.horizontalCenteredProfileImage}>
        <View style={styles.userProfileImageWhiteContainer}>
          <View>
            <Image
              source={require("../assets/images/userPhoto.png")}
              style={{
                height: Sizes.userProfileImage,
                width: Sizes.userProfileImage,
              }}
            />
            {getRandomBooleanForSetHeartBadge() && <HeartBadge size={"2x"} />}
          </View>
        </View>
      </View>
      <View style={styles.bioSection}>
        <Text style={styles.login}>{data.login}</Text>
        <Text style={styles.personalInfo}>
          {data.age} år. {data.region}. {data.country}
        </Text>
        <Text style={styles.profileDescription}>{data.aboutProfile}</Text>
        <Link href="/dashboard" asChild>
          <Pressable>
            {({ pressed }) => (
              // <UserProfileScreenIcon fill={""} width={35} height={40} />
              <View
                style={[
                  styles.profileSettingsButton,
                  pressed && styles.pressed,
                ]}
              >
                <FontAwesome
                  name="gear"
                  size={25}
                  color={Colors[colorScheme ?? "light"].text}
                  style={{
                    opacity: pressed ? 0.5 : 1,
                  }}
                />
                <Text style={{ opacity: pressed ? 0.5 : 1 }}>
                  Ret i din profil
                </Text>
              </View>
            )}
          </Pressable>
        </Link>
      </View>
      <Filter />
    </ScrollView>
  );
}
