import { StyleSheet } from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../constants/Metrics";

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: moderateScale(10),
    paddingTop: verticalScale(13),
    paddingHorizontal: horizontalScale(8),
    margin: "2%",
    paddingBottom: horizontalScale(10),
    width: "46%",
    backgroundColor: "white",
  },
  cardContent: { alignItems: "center" },

  cardTitle: { fontSize: moderateScale(24), marginVertical: verticalScale(10) },
});

export default styles;
