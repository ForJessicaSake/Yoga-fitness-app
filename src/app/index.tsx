import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OverviewScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/Illustration.png")}
          style={styles.illustration}
          resizeMode="contain"
        />

        <View style={styles.copy}>
          <Text style={styles.welcome}>welcome to</Text>
          <Text style={styles.brand}>
            YO<Text style={styles.brandAccent}>FIT</Text>
          </Text>
          <Text style={styles.tagline}>Your Personal Yoga Companion</Text>
          <Text style={styles.body}>
            Discover a healthier, more balanced you with YOFIT. Join our
            community and start your journey towards wellness today.
          </Text>
        </View>

        <View style={styles.buttonRow}>
          <Pressable
            style={[styles.button, styles.primaryButton]}
            onPress={() => router.push("/auth/signup")}
          >
            <Text style={styles.primaryText}>Get Started</Text>
          </Pressable>

          <Pressable
            style={[styles.button, styles.secondaryButton]}
            onPress={() => router.push("/auth/login")}
          >
            <Text style={styles.secondaryText}>Log In</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#FFFFFF" },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 24,
    justifyContent: "space-between",
  },
  illustration: {
    width: "100%",
    height: 320,
    alignSelf: "center",
    marginTop: 12,
  },
  copy: { gap: 8 },
  welcome: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 28,
    color: "#111111",
  },
  brand: {
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 48,
    color: "#111111",
    lineHeight: 52,
  },
  brandAccent: { color: "#DEA2FF" },
  tagline: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 16,
    color: "#111111",
    marginTop: 4,
  },
  body: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 14,
    lineHeight: 20,
    color: "#474747",
    marginTop: 8,
  },
  buttonRow: { flexDirection: "row", gap: 12 },
  button: {
    flex: 1,
    height: 52,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButton: { backgroundColor: "#DEA2FF" },
  primaryText: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 16,
    color: "#FFFFFF",
  },
  secondaryButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#DEA2FF",
  },
  secondaryText: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 16,
    color: "#DEA2FF",
  },
});