import { View, Text } from "react-native";
import React from "react";

import styles from "./Filter.style";

export default function Filter() {
  return (
    <View style={styles.filtersContainer}>
      <View style={styles.filterContainer}>
        <Text>Jeg følger</Text>
      </View>
      <View style={styles.filterContainer}>
        <Text>Venner</Text>
      </View>
      <View style={styles.filterContainer}>
        <Text>Interesser</Text>
      </View>
    </View>
  );
}
