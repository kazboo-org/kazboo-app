import { View, Image } from "react-native";
import React from "react";

import styles from "./HeartBadge.style";
import Sizes from "../../../constants/Sizes";

export default function HeartBadge({ size }: any) {
  return (
    <>
      {size === "2x" ? (
        <View style={styles.doubleSizedHeartBadgeContainer}>
          <Image
            source={require("../../../assets/images/heartBadge.png")}
            style={{
              position: "absolute",
              height: Sizes.heartBadge.height * 2,
              width: Sizes.heartBadge.width * 2,
            }}
          />
        </View>
      ) : (
        <View style={styles.heartBadgeContainer}>
          <Image
            source={require("../../../assets/images/heartBadge.png")}
            style={{
              position: "absolute",
              height: Sizes.heartBadge.height,
              width: Sizes.heartBadge.width,
            }}
          />
        </View>
      )}
    </>
  );
}
