import { router } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GoogleSignInButton } from "../../components/GoogleSignInButton";
import { getErrorMessage, signUp } from "../../lib/auth";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSignUp() {
    if (!fullName.trim() || !email.trim() || !password || !confirmPassword) {
      setError("Fill in all fields to continue.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      await signUp(email, password, fullName);
      router.replace("/dashboard");
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Image
          source={require("../../../assets/images/YOFIT.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.formContainer}>
          <View style={styles.header}>
            <Text style={styles.eyebrow}>Join YOFIT Today!</Text>
            <Text style={styles.title}>Sign Up</Text>
          </View>

          <View style={styles.form}>
            <TextInput
              placeholder="Enter your full name"
              placeholderTextColor="#9A9A9A"
              value={fullName}
              onChangeText={setFullName}
              style={styles.input}
            />
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#9A9A9A"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={setEmail}
              style={styles.input}
            />
            <TextInput
              placeholder="Create a password"
              placeholderTextColor="#9A9A9A"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              style={styles.input}
            />
            <TextInput
              placeholder="Confirm your password"
              placeholderTextColor="#9A9A9A"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              style={styles.input}
            />

            {error ? <Text style={styles.error}>{error}</Text> : null}

            <Pressable
              style={[styles.primaryButton, loading && styles.disabled]}
              onPress={onSignUp}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text style={styles.primaryText}>Sign Up</Text>
              )}
            </Pressable>
          </View>

          <View style={styles.socialBlock}>
            <Text style={styles.socialLabel}>Or continue with</Text>
            <GoogleSignInButton
              label="Continue with Google"
              disabled={loading}
              onSuccess={() => router.replace("/dashboard")}
              onError={setError}
            />
          </View>
        </View>

        <Text style={styles.terms}>
          By signing up, you agree to our Terms of Service and Privacy Policy.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#FFFFFF" },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 16,
  },
  logo: { marginTop: 36, width: 114, height: 48, alignSelf: "flex-start" },
  header: { marginTop: 28, marginBottom: 24 },
  eyebrow: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 18,
    color: "#111111",
  },
  title: {
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 40,
    color: "#111111",
    marginTop: 4,
  },
  formContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  form: { gap: 12 },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#DEA2FF",
    borderRadius: 10,
    paddingHorizontal: 14,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 14,
    color: "#111111",
  },
  error: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 13,
    color: "#D32F2F",
  },
  primaryButton: {
    height: 52,
    borderRadius: 12,
    backgroundColor: "#DEA2FF",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  disabled: { opacity: 0.7 },
  primaryText: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 16,
    color: "#FFFFFF",
  },
  socialBlock: { marginTop: 28, gap: 12 },
  socialLabel: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 13,
    color: "#474747",
    textAlign: "center",
  },
  terms: {
    marginTop: 20,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 10,
    lineHeight: 14,
    color: "#474747",
    textAlign: "center",
  },
});
