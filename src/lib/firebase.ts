import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";
import {
  Auth,
  getAuth,
  initializeAuth,
  // Metro resolves the React Native auth bundle where this export exists.
  // @ts-expect-error RN-only export
  getReactNativePersistence,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY?.trim(),
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN?.trim(),
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID?.trim(),
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET?.trim(),
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID?.trim(),
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID?.trim(),
};

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId
);

let app: FirebaseApp | null = null;
let auth: Auth | null = null;

if (isFirebaseConfigured) {
  app = getApps().length ? getApp() : initializeApp(firebaseConfig);

  try {
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(ReactNativeAsyncStorage),
    });
  } catch {
    auth = getAuth(app);
  }
} else {
  console.warn(
    "Firebase is not configured. Set EXPO_PUBLIC_FIREBASE_API_KEY in .env from GoogleService-Info.plist (API_KEY), then restart Expo."
  );
}

export function getFirebaseAuth(): Auth {
  if (!auth) {
    throw new Error(
      "Firebase Auth is not configured. Add EXPO_PUBLIC_FIREBASE_API_KEY to .env and restart the app."
    );
  }
  return auth;
}

export { app, auth };
