import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import { Pressable } from "react-native";

export default function PressableIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return (
    <Link href={"/modals/postByTextModal"} asChild>
      <Pressable>
        {({ pressed }) => <FontAwesome size={50} {...props} />}
      </Pressable>
    </Link>
  );
}
