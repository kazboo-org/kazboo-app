import { StyleSheet } from "react-native";

import Colors from "../../../../constants/Colors";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    width: 300,
    height: 60,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: "center",
    backgroundColor: Colors.common.orangeColor,
  },
  headerText: { textAlign: "center", fontWeight: "bold", fontSize: 20 },
  modalContent: {},
});

export default styles;
