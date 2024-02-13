import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: { paddingVertical: 30, paddingHorizontal: 15, gap: 30 },
  screenDescriptionContainer: { marginHorizontal: 15, gap: 10 },
  screenTitle: { fontSize: 32, fontWeight: "900" },
  screenDescription: { fontSize: 22, fontWeight: "200" },
  cardsContainer: { gridRowStart: "", gap: 15 },
  card: {
    padding: 7,
    width: "47%",
    backgroundColor: "tomato",
  },
});

export default styles;
