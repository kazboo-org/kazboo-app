import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

const styles = StyleSheet.create({
  filtersContainer: {
    flexDirection: "row",
    marginVertical: 30,
    justifyContent: "space-evenly",
    gap: 3,
  },
  filterIconContainer: { position: "absolute", bottom: 20 },
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
    shadowRadius: 1.62,

    elevation: 2,
  },
  pressedFilterContainer: {
    shadowOpacity: 0.6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3.62,
    elevation: 2,
  },
  isActive: {
    shadowOpacity: 0.6,
  },
});
export default styles;
