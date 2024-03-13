import { StyleSheet } from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../constants/Metrics";

const styles = StyleSheet.create({
  screen: {
    paddingVertical: verticalScale(30),
    paddingHorizontal: "2%",
  },
  screenDescriptionContainer: {
    marginHorizontal: horizontalScale(20),
    marginVertical: verticalScale(15),
    gap: 10,
  },
  screenTitle: { fontSize: moderateScale(32), fontWeight: "900" },
  screenDescription: { fontSize: 22, fontWeight: "200" },
  cardsContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  cardContainer: {
    borderRadius: moderateScale(10),
    paddingTop: verticalScale(13),
    paddingHorizontal: horizontalScale(8),
    margin: "2%",
    paddingBottom: horizontalScale(10),
    width: "45%",
    backgroundColor: "white",
  },
  cardContent: { alignItems: "center" },

  cardTitle: { fontSize: moderateScale(24), marginVertical: verticalScale(10) },
});

export default styles;
