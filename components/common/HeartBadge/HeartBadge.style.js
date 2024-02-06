import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  heartBadgeContainer: {
    position: "absolute",
    right: 0,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    height: 13,
    width: 13,
    backgroundColor: "#fff",
    borderRadius: 50,
    shadowOpacity: 0.5,
    shadowOffset: 0.5,
  },
  doubleSizedHeartBadgeContainer: {
    position: "absolute",
    right: 0,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    height: 13 * 2,
    width: 13 * 2,
    backgroundColor: "#fff",
    borderRadius: 50,
    shadowOpacity: 0.5,
    shadowOffset: 0.5,
  },
});

export default styles;
