import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme, Image, View } from "react-native";
// import UserProfileScreenIcon from "../../assets/svgComponents/headerIcons/UserProfileScreenIcon";
// import NotificationsIcon from "../../assets/svgComponents/headerIcons/NotificationsIcon";

import Colors from "../../constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -15 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? "light"].headerBackground,
        },
        headerLeft: () => (
          <Link href="/userProfile" asChild>
            <Pressable>
              {({ pressed }) => (
                // <UserProfileScreenIcon fill={""} width={35} height={40} />
                <FontAwesome
                  name="user"
                  size={28}
                  color={Colors[colorScheme ?? "light"].text}
                  style={{ marginLeft: 20, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        ),
        headerTitle: () => (
          <Image
            source={require("../../assets/images/kazboo_logo.png")}
            style={{ height: 25, width: 150 }}
          />
        ),
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tabIconDefault,
        headerRight: () => (
          <Link href="/notifications" asChild>
            <Pressable>
              {({ pressed }) => (
                // <NotificationsIcon fill={""} width={33} height={37} />
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
          backgroundColor: Colors[colorScheme ?? "light"].tabBarBackground,
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
          headerRight: () => (
            <Link href="/modals/searchModal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="search"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 20, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
    </Tabs>
  );
}
