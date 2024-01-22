import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#d3dadb",
    borderRadius: 10,
    shadowOpacity: 2,
  },
  headerContainer: { flexDirection: "row" },
  title: {
    textTransform: "uppercase",
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default styles;
