# YOFIT

YOFIT is an Expo / React Native yoga companion app. It includes a welcome screen, email and Google authentication with Firebase, and a dashboard of yoga sessions with detail modals.

**Bundle / package ID:** `com.yofit.app`

## Stack

- Expo SDK 58 + Expo Router (`src/app`)
- React Native + TypeScript
- Firebase Auth (email/password + Google)
- `@react-native-google-signin/google-signin` (native Google Sign-In)
- Plus Jakarta Sans

## Features

- Welcome / overview screen
- Sign up and log in with email and password
- Continue with Google (development build required)
- Auth state via Firebase + AsyncStorage persistence
- Dashboard of yoga sessions (poses, benefits, breath cues)
- Session detail modal when a card is tapped

## Prerequisites

- Node.js 20+ recommended
- npm
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (via `npx`)
- A Firebase project with **Email/Password** and **Google** sign-in enabled

### iOS (macOS only)

- Xcode (full install from the App Store)
- Xcode Command Line Tools
- CocoaPods (`brew install cocoapods`)
- iOS Simulator

Point the active developer directory at Xcode if needed:

```bash
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
```

### Android

- [Android Studio](https://developer.android.com/studio)
- Android SDK + an emulator (AVD), or a physical device with USB debugging
- For Google Sign-In on Android: add an Android app in Firebase and set `EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID` (and SHA-1 in Firebase / Google Cloud)

## Setup

1. Clone and install dependencies:

```bash
cd yofit
npm install
```

2. Create your env file:

```bash
cp .env.example .env
```

3. Fill in `.env` (see [Environment variables](#environment-variables)).

4. Place Firebase config files in the project root when using native builds:

- iOS: `GoogleService-Info.plist` (already referenced in `app.json`)
- Android: `google-services.json` (add and point `android.googleServicesFile` in `app.json` when ready)

5. In Firebase Console → **Authentication** → **Sign-in method**:

- Enable **Email/Password**
- Enable **Google** and copy the **Web client ID** into `.env`

## Environment variables

| Variable | Purpose |
| --- | --- |
| `EXPO_PUBLIC_FIREBASE_API_KEY` | Firebase API key |
| `EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN` | Auth domain |
| `EXPO_PUBLIC_FIREBASE_PROJECT_ID` | Project ID |
| `EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET` | Storage bucket |
| `EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Sender ID |
| `EXPO_PUBLIC_FIREBASE_APP_ID` | Firebase App ID |
| `EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID` | Web OAuth client ID (required for Google → Firebase) |
| `EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID` | iOS OAuth client ID from `GoogleService-Info.plist` |
| `EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID` | Android OAuth client ID (when Android Google Sign-In is set up) |

Restart Metro after changing `.env` so values reload.

## Run on iOS

Google Sign-In needs a **development build** (native binary). Expo Go is fine for UI and email/password only.

### Option A — Development build (recommended)

Install CocoaPods if you do not have it:

```bash
brew install cocoapods
pod --version
```

Then:

```bash
npm run ios
# same as: npx expo run:ios
```

This generates/updates the `ios/` project, installs pods, builds with Xcode, and launches the iOS Simulator.

### Option B — Expo Go (limited)

```bash
npx expo start
# then press i, or scan the QR code
```

Email/password works. **Continue with Google** will not work in Expo Go (native module + OAuth redirect limits).

## Run on Android

### Option A — Development build (recommended)

Start an emulator from Android Studio, or plug in a device, then:

```bash
npm run android
# same as: npx expo run:android
```

This generates/updates `android/`, builds the app, and installs it on the emulator/device.

For Google Sign-In on Android:

1. Register an Android app in Firebase with package `com.yofit.app`
2. Add your debug SHA-1 in Firebase / Google Cloud
3. Download `google-services.json` into the project
4. Set `EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID` in `.env`

### Option B — Expo Go (limited)

```bash
npx expo start
# then press a, or scan the QR code
```

Same limits as iOS: email/password yes, Google Sign-In no.

## Project structure

```text
src/
  app/                 # Expo Router screens
    index.tsx          # Welcome
    dashboard.tsx      # Session list + modal
    auth/              # Login & signup
  components/          # Shared UI (Google button, session modal)
  context/             # AuthProvider
  data/sessions.ts     # Yoga session content
  hooks/               # Google sign-in hook
  lib/                 # Firebase + auth helpers
assets/images/         # Logos and illustrations
```

## Useful scripts

| Command | Description |
| --- | --- |
| `npm start` / `npx expo start` | Start Metro |
| `npm run ios` | Native iOS build + Simulator |
| `npm run android` | Native Android build + emulator/device |
| `npm run web` | Start for web |
| `npm run lint` | Lint with Expo |

## Notes

- First `run:ios` / `run:android` can take several minutes.
- If iOS fails with `simctl` / Xcode errors, ensure Xcode is fully installed and selected with `xcode-select`.
- If CocoaPods install via Expo’s gem path hangs, cancel (`Ctrl+C`) and install with Homebrew instead.
- Keep `.env` and local secrets out of git (`.env` is gitignored).
