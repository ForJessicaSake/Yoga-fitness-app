import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";
import { useGoogleSignIn } from "../hooks/useGoogleSignIn";

type Props = {
  label?: string;
  disabled?: boolean;
  onSuccess: () => void;
  onError: (message: string) => void;
};

export function GoogleSignInButton({
  label = "Continue with Google",
  disabled,
  onSuccess,
  onError,
}: Props) {
  const { signIn, loading, ready } = useGoogleSignIn({ onSuccess, onError });
  const isDisabled = disabled || loading || !ready;

  return (
    <Pressable
      style={[styles.button, isDisabled && styles.disabled]}
      onPress={signIn}
      disabled={isDisabled}
    >
      {loading ? (
        <ActivityIndicator color="#111111" />
      ) : (
        <>
          <Image
            source={require("../../assets/images/google.png")}
            style={styles.icon}
          />
          <Text style={styles.label}>{label}</Text>
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 52,
    borderRadius: 12,
    backgroundColor: "#F2F2F2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  disabled: { opacity: 0.7 },
  icon: { width: 22, height: 22 },
  label: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 15,
    color: "#111111",
  },
});
