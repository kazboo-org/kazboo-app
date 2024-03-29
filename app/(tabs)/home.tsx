import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import MakeNewPostOptionsSection from "../../components/home/MakeNewPostOptionsArea/MakeNewPostOptionsSection";
import Feed from "../../components/home/Feed/Feed";

export default function TabOneScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
          }}
        >
          <MakeNewPostOptionsSection />
          <Feed />
          {/* <FriendSuggestionsSection/> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
