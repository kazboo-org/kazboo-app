import { StyleSheet } from "react-native";
import Sizes from "../constants/Sizes";

const styles = StyleSheet.create({
  horizontalCenteredProfileImage: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
  },
  userProfileImageWhiteContainer: {
    top: Sizes.userProfileBackgroundImageHeight - Sizes.userProfileImage / 2,
    backgroundColor: "white",
    width: Sizes.userProfileImage + 10,
    height: Sizes.userProfileImage + 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.5,
    shadowOffset: 0.5,
    shadowRadius: 8,
  },
  bioSection: {
    marginTop: Sizes.userProfileImage / 1.2,
    alignItems: "center",
    gap: 10,
  },
  loginText: { fontSize: 18, fontWeight: "800" },
  personalInfoText: { fontSize: 18, fontWeight: "500" },
  profileDescription: {
    marginHorizontal: 44,
    shadowOpacity: 0.2,
  },
});

export default styles;
