import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import TagList from "./TagsList";
import styles from "./Post.style";
import HeartBadge from "../UI/HeartBadge/HeartBadge";
import { Link } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import CustomModal from "../UI/CustomModal/CustomModal";

export default function Post({ post }: any) {
  const [showModal, setShowModal] = useState(false);

  // This function sets a heart badge randomly on a user profile photo.
  // Later, the heart badge will be set according to the user data fetched from the database and set in the global state.
  function getRandomBooleanForSetHeartBadge() {
    return Math.random() >= 0.5;
  }

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
              <FontAwesome
                name="ellipsis-v"
                size={25}
                color={"black"}
                style={{ opacity: pressed ? 0.5 : 1 }}
              />
            )}
          </Pressable>
        </View>
        <Text>{post.body}</Text>
        <TagList tags={post.tags} />
        <Text>Reactions: {post.reactions}</Text>
      </View>
      <CustomModal
        showModal={showModal}
        setShowModal={setShowModal}
        modalTitle={"Her kan du"}
      >
        <View style={styles.modalOption}>
          <Pressable onPress={() => setShowModal(!showModal)}>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>Anbefale til venner</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.modalOption}>
          <Pressable onPress={() => setShowModal(!showModal)}>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>Send til en ven</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.modalOption}>
          <Pressable onPress={() => setShowModal(!showModal)}>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>Besøg profil</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.modalOption}>
          <Pressable onPress={() => setShowModal(!showModal)}>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>Send besked</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.lastChild}>
          <Pressable onPress={() => setShowModal(!showModal)}>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>Anmelde indholdet</Text>
            </View>
          </Pressable>
        </View>
      </CustomModal>
    </>
  );
}
