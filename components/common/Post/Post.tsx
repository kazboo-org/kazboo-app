import React from "react";
import { View, Text } from "react-native";
import TagList from "./TagsList";

const Post = ({ post }: any) => {
  return (
    <View>
      <Text>{post.title}</Text>
      <Text>{post.body}</Text>
      <TagList tags={post.tags} />
      <Text>Reactions: {post.reactions}</Text>
    </View>
  );
};

export default Post;
