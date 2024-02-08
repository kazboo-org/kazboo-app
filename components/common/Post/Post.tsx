import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import TagList from "./TagsList";
import HeartBadge from "../HeartBadge/HeartBadge";
import CustomModal from "../CustomModal/CustomModal";
import {
  ThreeDotsIcon,
  HeartPlusIcon,
  PaperFlyIcon,
  UserProfileIcon,
  MailIcon,
  AttentionIcon,
} from "../../../assets/svgComponents/postModalSvgComponents";

import styles from "./Post.style";
import Colors from "../../../constants/Colors";

// This function sets a heart badge randomly on a user profile photo.
// Later, the heart badge will be set according to the user data fetched from the database and set in the global state.
function getRandomBooleanForSetHeartBadge() {
  return Math.random() >= 0.5;
}
export default function Post({ post }: any) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View>
            <Image
              source={require("../../../assets/images/userPhoto.png")}
              style={{ height: 47, width: 47 }}
            />
            {getRandomBooleanForSetHeartBadge() && <HeartBadge />}
          </View>
          <View style={styles.headerInfoContainer}>
            <Text style={styles.title}>JohnDoe</Text>
            <Text style={styles.postDate}>22. januar 2024</Text>
          </View>
          <Pressable
            onPress={() => setShowModal(true)}
            style={[styles.button, { marginLeft: "auto" }]}
          >
            {({ pressed }) => (
              <ThreeDotsIcon
                fill={
                  pressed
                    ? Colors.common.modalIconPressedColor
                    : Colors.common.modalIconBlackColor
                }
              />
            )}
          </Pressable>
        </View>
        <Text>{post.body}</Text>
        <TagList tags={post.tags} />
        <Text>Reactions: {post.reactions}</Text>
      </View>
      <CustomModal showModal={showModal} setShowModal={setShowModal}>
        <View style={styles.modalHeader}>
          <ThreeDotsIcon fill={Colors.common.modalIconBlackColor} />
          <Text style={styles.headerText}>Her kan du</Text>
        </View>
        <View>
          <Pressable onPress={() => setShowModal(!showModal)}>
            <View style={styles.modalOption}>
              <HeartPlusIcon fill={Colors.common.modalIconBlackColor} />
              <Text style={styles.textStyle}>Anbefale til venner</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => setShowModal(!showModal)}>
            <View style={styles.modalOption}>
              <PaperFlyIcon fill={Colors.common.modalIconBlackColor} />
              <Text style={styles.textStyle}>Send til en ven</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => setShowModal(!showModal)}>
            <View style={styles.modalOption}>
              <UserProfileIcon fill={Colors.common.modalIconBlackColor} />
              <Text style={styles.textStyle}>Besøg profil</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => setShowModal(!showModal)}>
            <View style={styles.modalOption}>
              <MailIcon fill={Colors.common.modalIconBlackColor} />
              <Text style={styles.textStyle}>Send besked</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => setShowModal(!showModal)}>
            <View style={[styles.modalOption, styles.lastChild]}>
              <AttentionIcon fill={Colors.common.modalIconBlackColor} />
              <Text style={styles.textStyle}>Anmelde indholdet</Text>
            </View>
          </Pressable>
        </View>
      </CustomModal>
    </>
  );
}
