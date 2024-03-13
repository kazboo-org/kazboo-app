import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, Link } from "expo-router";
import { useEffect } from "react";
import { useColorScheme, Pressable } from "react-native";

import Colors from "../constants/Colors";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modals/postByTextModal"
          options={{ presentation: "modal", title: "What's on your mind?" }}
        />
        <Stack.Screen
          name="modals/postByAudioModal"
          options={{ presentation: "modal", title: "What's on your mind?" }}
        />
        <Stack.Screen
          name="modals/postByPhotoVideoModal"
          options={{ presentation: "modal", title: "What's on your mind?" }}
        />
        <Stack.Screen
          name="modals/searchModal"
          options={{ presentation: "modal", title: "Search" }}
        />
        <Stack.Screen
          name="userProfile"
          options={{
            // headerShown: false,
            title: "",
          }}
        />
        <Stack.Screen
          name="userProfileDashboard"
          options={{
            // headerShown: false,
            title: "",
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
          }}
        />
        {/* <Stack.Screen
          name="modals/postOptionsModal"
          options={{
            // presentation: "modals/postOptionsModal",
            title: "Search",
          }}
        /> */}
      </Stack>
    </ThemeProvider>
  );
}
