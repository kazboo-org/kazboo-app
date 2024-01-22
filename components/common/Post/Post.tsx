import React from "react";
import { View, Text, Image } from "react-native";
import TagList from "./TagsList";
import styles from "./Post.style";

export default function Post({ post }: any) {
  function getRandomBoolean() {
    return Math.random() >= 0.5;
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Image
            source={require("../../../assets/images/userPhoto.jpeg")}
            style={{ height: 47, width: 47 }}
          />
          {getRandomBoolean() && (
            <Image
              source={require("../../../assets/images/heartBadge.png")}
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                height: 17,
                width: 17,
              }}
            />
          )}
        </View>
        <Text style={styles.title}>JohnDoe</Text>
      </View>
      <Text>{post.body}</Text>
      <TagList tags={post.tags} />
      <Text>Reactions: {post.reactions}</Text>
    </View>
  );
}
