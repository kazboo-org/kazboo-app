import { View, Text, Button } from "react-native";
import { useEffect, useRef, useState } from "react";
import {
  registerForPushNotificationsAsync,
  sendPushNotification,
} from "../services/PushNotificationService";

import * as expoNotifications from "expo-notifications";
import { Subscription } from "expo-notifications";

// Define types for the push token and notification
type ExpoPushToken = string;
type Notification = expoNotifications.Notification;

expoNotifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function Notifications() {
  const [expoPushToken, setExpoPushToken] = useState<ExpoPushToken | "">("");
  const [notification, setNotification] = useState<Notification | null>(null);
  const notificationListener = useRef<Subscription | null>(null);
  const responseListener = useRef<Subscription | null>(null);

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      if (token) setExpoPushToken(token);
      console.log("expoPushToken", expoPushToken);
    });

    notificationListener.current =
      expoNotifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      expoNotifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      expoNotifications.removeNotificationSubscription(
        notificationListener.current as any
      );
      expoNotifications.removeNotificationSubscription(
        responseListener.current as any
      );
    };
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Text>Your expo push token: {expoPushToken}</Text>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>
          Title: {notification && notification.request.content.title}{" "}
        </Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>
          Data:{" "}
          {notification && JSON.stringify(notification.request.content.data)}
        </Text>
      </View>
      <Button
        title="Press to Send Notification"
        onPress={async () => {
          await sendPushNotification(expoPushToken);
        }}
      />
    </View>
  );
}
