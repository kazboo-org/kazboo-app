import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import HeartBadge from "../components/common/HeartBadge/HeartBadge";
import Sizes from "../constants/Sizes";
import styles from "./UserProfile.style";
import data from "../data.json";
import Filter from "../components/common/Filter/Filter";

// This function sets a heart badge randomly on a user profile photo.
// Later, the heart badge will be set according to the user data fetched from the database and set in the global state.
function getRandomBooleanForSetHeartBadge() {
  return Math.random() >= 0.5;
}

export default function UserProfile() {
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
        <Text style={styles.loginText}>{data.login}</Text>
        <Text style={styles.personalInfoText}>
          {data.age} år. {data.region}. {data.country}
        </Text>
        <Text style={styles.profileDescription}>{data.aboutProfile}</Text>
      </View>
      <Filter />
    </ScrollView>
  );
}