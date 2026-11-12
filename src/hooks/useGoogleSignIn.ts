import Constants from "expo-constants";
import { useCallback, useState } from "react";
import { Platform } from "react-native";
import { getErrorMessage, signInWithGoogle } from "../lib/auth";

type GoogleSignInOptions = {
  onSuccess?: () => void;
  onError?: (message: string) => void;
};

type GoogleSignInModule = typeof import("@react-native-google-signin/google-signin");

let configured = false;
const isExpoGo = Constants.appOwnership === "expo";

function loadGoogleSignIn(): GoogleSignInModule {
  // Native module is unavailable in Expo Go — only require it in a real build.
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return require("@react-native-google-signin/google-signin");
}

function ensureGoogleConfigured(module: GoogleSignInModule) {
  if (configured) return;

  const webClientId = process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID;
  const iosClientId = process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID;

  if (!webClientId) {
    throw new Error(
      "Google Web Client ID is missing. Enable Google sign-in in Firebase and add EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID to .env."
    );
  }

  module.GoogleSignin.configure({
    webClientId,
    iosClientId,
    offlineAccess: false,
  });

  configured = true;
}

export function useGoogleSignIn({ onSuccess, onError }: GoogleSignInOptions = {}) {
  const [loading, setLoading] = useState(false);

  const signIn = useCallback(async () => {
    if (isExpoGo) {
      onError?.(
        "Google sign-in needs a development build. Stop Expo Go, then run: npx expo run:ios"
      );
      return;
    }

    try {
      setLoading(true);

      const google = loadGoogleSignIn();
      ensureGoogleConfigured(google);

      if (Platform.OS === "android") {
        await google.GoogleSignin.hasPlayServices({
          showPlayServicesUpdateDialog: true,
        });
      }

      const response = await google.GoogleSignin.signIn();

      if (!google.isSuccessResponse(response)) {
        return;
      }

      const idToken = response.data.idToken;
      if (!idToken) {
        onError?.(
          "Google did not return an ID token. Check that EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID is set correctly."
        );
        return;
      }

      await signInWithGoogle(idToken);
      onSuccess?.();
    } catch (error) {
      if (!isExpoGo) {
        const google = loadGoogleSignIn();
        if (google.isErrorWithCode(error)) {
          if (
            error.code === google.statusCodes.SIGN_IN_CANCELLED ||
            error.code === google.statusCodes.IN_PROGRESS
          ) {
            return;
          }

          if (error.code === google.statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            onError?.("Google Play Services is not available on this device.");
            return;
          }
        }
      }

      onError?.(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  }, [onError, onSuccess]);

  return {
    signIn,
    loading,
    ready: true,
    isExpoGo,
  };
}
