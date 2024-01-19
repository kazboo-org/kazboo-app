import React from "react";
import { View, Text } from "react-native";

const TagList = ({ tags }: any) => {
  return (
    <View>
      {tags.map((tag: any, index: any) => (
        <Text key={index}>{tag}</Text>
      ))}
    </View>
  );
};

export default TagList;
