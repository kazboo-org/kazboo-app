import { View, Image } from "react-native";
import React from "react";

import styles from "./HeartBadge.style";

export default function HeartBadge() {
  return (
    <View style={styles.heartBadgeContainer}>
      <Image
        source={require("../../../../assets/images/heartBadge.png")}
        style={{
          position: "absolute",
          height: 8,
          width: 9,
        }}
      />
    </View>
  );
}
