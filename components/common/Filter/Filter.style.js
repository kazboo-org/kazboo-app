import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  filtersContainer: {
    flexDirection: "row",
    marginVertical: 30,
    justifyContent: "space-evenly",
    gap: 3,
  },
  filterContainer: {
    width: 120,
    height: 48,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 1.62,

    elevation: 7,
  },
});
export default styles;
