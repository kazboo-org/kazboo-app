import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "white",
    borderRadius: 10,
    shadowOpacity: 0.3,
    shadowOffset: 0.3,
  },
  headerContainer: { flexDirection: "row", marginBottom: 10 },
  headerInfoContainer: { justifyContent: "center", marginLeft: 10 },
  title: {
    fontWeight: "bold",
  },
  postDate: { fontWeight: "300" },
  postOptionsButton: { marginLeft: "auto" },
  modalHeader: {
    width: 300,
    height: 60,
    paddingHorizontal: 35,
    flexDirection: "row",
    alignItems: "center",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: Colors.common.modalHeaderColor,
  },
  headerText: {
    marginLeft: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  modalOption: {
    width: 260,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
  },
  lastChild: {
    borderBottomColor: "transparent",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    marginLeft: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "400",
  },
});

export default styles;
