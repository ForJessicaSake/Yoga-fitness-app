import { router, Stack } from "expo-router";
import { Pressable, Text } from "react-native";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        headerTintColor: "#DEA2FF",
        title: "",
        headerLeft: () => (
          <Pressable
            onPress={() => {
              if (router.canGoBack()) {
                router.back();
              } else {
                router.replace("/");
              }
            }}
            hitSlop={12}
            style={{ paddingHorizontal: 8 }}
          >
            <Text style={{ fontSize: 28, color: "#DEA2FF", lineHeight: 28 }}>
              ‹
            </Text>
          </Pressable>
        ),
      }}
    />
  );
}