import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TagList from "./TagsList";
import styles from "./Post.style";

export default function Post({ post }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{post.title}</Text>
      </View>
      <Text>{post.body}</Text>
      <TagList tags={post.tags} />
      <Text>Reactions: {post.reactions}</Text>
    </View>
  );
}
