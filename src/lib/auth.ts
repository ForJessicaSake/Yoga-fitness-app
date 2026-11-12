import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithCredential,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getFirebaseAuth } from "./firebase";

function getErrorMessage(error: unknown) {
  if (typeof error === "object" && error && "code" in error) {
    const code = String((error as { code: string }).code);
    switch (code) {
      case "auth/email-already-in-use":
        return "An account already exists with this email.";
      case "auth/invalid-email":
        return "Enter a valid email address.";
      case "auth/invalid-credential":
      case "auth/wrong-password":
      case "auth/user-not-found":
        return "Incorrect email or password.";
      case "auth/weak-password":
        return "Password should be at least 6 characters.";
      case "auth/too-many-requests":
        return "Too many attempts. Try again later.";
      case "auth/network-request-failed":
        return "Network error. Check your connection.";
      case "auth/invalid-api-key":
        return "Firebase API key is missing or invalid. Check your .env file.";
      case "auth/operation-not-allowed":
        return "This sign-in method is disabled. Enable it in Firebase Authentication → Sign-in method.";
      case "auth/account-exists-with-different-credential":
        return "An account already exists with this email using a different sign-in method.";
      case "auth/popup-closed-by-user":
        return "Google sign-in was cancelled.";
      default:
        break;
    }
  }

  if (error instanceof Error && error.message) {
    return error.message;
  }

  return "Something went wrong. Please try again.";
}

export async function signUp(email: string, password: string, fullName: string) {
  const auth = getFirebaseAuth();
  const credential = await createUserWithEmailAndPassword(
    auth,
    email.trim(),
    password
  );

  if (fullName.trim()) {
    await updateProfile(credential.user, { displayName: fullName.trim() });
  }

  return credential.user;
}

export async function logIn(email: string, password: string) {
  const auth = getFirebaseAuth();
  const credential = await signInWithEmailAndPassword(
    auth,
    email.trim(),
    password
  );
  return credential.user;
}

export async function logOut() {
  await signOut(getFirebaseAuth());
}

export async function resetPassword(email: string) {
  await sendPasswordResetEmail(getFirebaseAuth(), email.trim());
}

export async function signInWithGoogle(idToken: string) {
  const credential = GoogleAuthProvider.credential(idToken);
  const result = await signInWithCredential(getFirebaseAuth(), credential);
  return result.user;
}

export { getErrorMessage };
