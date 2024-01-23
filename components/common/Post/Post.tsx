import React from "react";
import { View, Text, Image } from "react-native";
import TagList from "./TagsList";
import styles from "./Post.style";
import HeartBadge from "../UI/HeartBadge/HeartBadge";

export default function Post({ post }: any) {
  // This function sets a heart badge randomly on a user profile photo.
  // Later, the heart badge will be set according to the user data fetched from the database and set in the global state.
  function getRandomBooleanForSetHeartBadge() {
    return Math.random() >= 0.5;
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Image
            source={require("../../../assets/images/userPhoto.png")}
            style={{ height: 47, width: 47 }}
          />
          {getRandomBooleanForSetHeartBadge() && <HeartBadge />}
        </View>
        <Text style={styles.title}>JohnDoe</Text>
      </View>
      <Text>{post.body}</Text>
      <TagList tags={post.tags} />
      <Text>Reactions: {post.reactions}</Text>
    </View>
  );
}
