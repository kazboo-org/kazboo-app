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
  headerContainer: { flexDirection: "row" },
  title: {
    textTransform: "uppercase",
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default styles;
