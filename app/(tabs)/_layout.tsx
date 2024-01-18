import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Feather } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme, Image, View } from "react-native";

import Colors from "../../constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function Chats() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#2BC4A9",
        },
        headerLeft: () => (
          <Link href="/menu" asChild>
            <Pressable>
              {({ pressed }) => (
                <Feather
                  name="menu"
                  size={25}
                  color={Colors[colorScheme ?? "light"].text}
                  style={{ marginLeft: 20, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        ),
        headerTitle: () => (
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../../assets/images/splash.png")}
              style={{ height: 25, width: 600 }}
            />
          </View>
        ),
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerRight: () => (
          <Link href="/notifications" asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="bell"
                  size={25}
                  color={Colors[colorScheme ?? "light"].text}
                  style={{ marginRight: 20, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        ),
        tabBarStyle: {
          backgroundColor: "#2BC4A9",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="connections"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <TabBarIcon name="users" color={color} />,
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <TabBarIcon name="wechat" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explorer"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <TabBarIcon name="safari" color={color} />,
        }}
      />
    </Tabs>
  );
}
