import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import {
  IFollowContentIcon,
  IFollowContentIconFocused,
  MyFriendsContentIcon,
  MyFriendsContentIconFocused,
  MyInterestsContentIcon,
  MyInterestsContentIconFocused,
} from "../../../assets/svgComponents/filtersOnUserProfilePage";

import styles from "./Filter.style";
import Colors from "../../../constants/Colors";

export default function Filter() {
  const [themIFollowContent, setThemIFollowContent] = useState(false);
  const [friendsContent, setFriendsContent] = useState(false);
  const [contentByInterests, setContentByInterests] = useState(false);

  return (
    <View style={styles.filtersContainer}>
      <Pressable
        onPress={() => {
          setThemIFollowContent(true);
          setFriendsContent(false);
          setContentByInterests(false);
        }}
      >
        {({ pressed }) => (
          <View
            style={[
              styles.filterContainer,
              pressed && styles.pressedFilterContainer,
              themIFollowContent && styles.isActive,
            ]}
          >
            <View style={styles.filterIconContainer}>
              {themIFollowContent ? (
                <IFollowContentIconFocused fill={Colors.common.orangeColor} />
              ) : (
                <IFollowContentIcon fill={Colors.common.orangeColor} />
              )}
            </View>

            <Text>Jeg følger</Text>
          </View>
        )}
      </Pressable>
      <Pressable
        onPress={() => {
          setThemIFollowContent(false);
          setFriendsContent(true);
          setContentByInterests(false);
        }}
      >
        {({ pressed }) => (
          <View
            style={[
              styles.filterContainer,
              pressed && styles.pressedFilterContainer,
              friendsContent && styles.isActive,
            ]}
          >
            <View style={styles.filterIconContainer}>
              {friendsContent ? (
                <MyFriendsContentIconFocused fill={Colors.common.orangeColor} />
              ) : (
                <MyFriendsContentIcon fill={Colors.common.orangeColor} />
              )}
            </View>
            <Text>Venner</Text>
          </View>
        )}
      </Pressable>
      <Pressable
        onPress={() => {
          setThemIFollowContent(false);
          setFriendsContent(false);
          setContentByInterests(true);
        }}
      >
        {({ pressed }) => (
          <View
            style={[
              styles.filterContainer,
              pressed && styles.pressedFilterContainer,
              contentByInterests && styles.isActive,
            ]}
          >
            <View style={styles.filterIconContainer}>
              {contentByInterests ? (
                <MyInterestsContentIconFocused
                  fill={Colors.common.orangeColor}
                />
              ) : (
                <MyInterestsContentIcon fill={Colors.common.orangeColor} />
              )}
            </View>
            <Text>Interesser</Text>
          </View>
        )}
      </Pressable>
    </View>
  );
}
