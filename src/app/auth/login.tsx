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
import { getErrorMessage, logIn, resetPassword } from "../../lib/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function onLogin() {
    if (!email.trim() || !password) {
      setError("Enter your email and password.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setMessage("");
      await logIn(email, password);
      router.replace("/dashboard");
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }

  async function onForgotPassword() {
    if (!email.trim()) {
      setError("Enter your email first to reset your password.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      await resetPassword(email);
      setMessage("Password reset email sent. Check your inbox.");
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
            <Text style={styles.welcomeText}>Welcome Back</Text>
            <Text style={styles.title}>Log In</Text>
          </View>

          <View style={styles.form}>
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
              placeholder="Enter your password"
              placeholderTextColor="#9A9A9A"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              style={styles.input}
            />

            {error ? <Text style={styles.error}>{error}</Text> : null}
            {message ? <Text style={styles.message}>{message}</Text> : null}

            <Pressable
              style={[styles.primaryButton, loading && styles.disabled]}
              onPress={onLogin}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text style={styles.primaryText}>Log In</Text>
              )}
            </Pressable>

            <Pressable onPress={onForgotPassword} disabled={loading}>
              <Text style={styles.link}>Forgot Password?</Text>
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
  },
  logo: { marginTop: 36, width: 114, height: 48, alignSelf: "flex-start" },
  header: { marginTop: 36, marginBottom: 28 },
  welcomeText: {
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
  message: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 13,
    color: "#2E7D32",
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
  link: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 13,
    color: "#474747",
    textAlign: "center",
    marginTop: 8,
  },
  socialBlock: { marginTop: 40, gap: 12 },
  socialLabel: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 13,
    color: "#474747",
    textAlign: "center",
  },
});
