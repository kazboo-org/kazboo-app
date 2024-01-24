import { StyleSheet } from "react-native";

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
  textContainer: { marginBottom: 15 },
  modalOption: {
    height: 60,
    justifyContent: "flex-end",
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
  },
  lastChild: {
    height: 60,
    justifyContent: "flex-end",
    borderBottomColor: "transparent",
    borderBottomWidth: 0,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "400",
  },
});

export default styles;
