import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    width: "50%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    borderWidth: 0.8,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "white",
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 1.62,

    elevation: 2,
  },
  pressed: {
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
});

export default styles;
