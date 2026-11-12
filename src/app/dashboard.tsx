import { router } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SessionDetailModal } from "../components/SessionDetailModal";
import { useAuth } from "../context/AuthContext";
import { SESSIONS, type YogaSession } from "../data/sessions";
import { logOut } from "../lib/auth";

export default function DashboardScreen() {
  const { user } = useAuth();
  const displayName = user?.displayName?.split(" ")[0] || "Yogi";
  const [selected, setSelected] = useState<YogaSession | null>(null);

  async function onLogout() {
    try {
      await logOut();
    } finally {
      router.replace("/");
    }
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hi, {displayName}</Text>
          <Text style={styles.subtitle}>Your yoga sessions today</Text>
        </View>
        <Pressable onPress={onLogout} hitSlop={8}>
          <Text style={styles.logout}>Log out</Text>
        </Pressable>
      </View>

      <FlatList
        data={SESSIONS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable style={styles.card} onPress={() => setSelected(item)}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.cardBody}>
              <View style={styles.metaRow}>
                <Text style={styles.level}>{item.level}</Text>
                <Text style={styles.duration}>{item.duration}</Text>
              </View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.focus}>{item.focus}</Text>
            </View>
          </Pressable>
        )}
      />

      <SessionDetailModal
        session={selected}
        visible={Boolean(selected)}
        onClose={() => setSelected(null)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#FFFFFF" },
  header: {
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  greeting: {
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 28,
    color: "#111111",
  },
  subtitle: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 14,
    color: "#474747",
    marginTop: 4,
  },
  logout: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 14,
    color: "#DEA2FF",
    marginTop: 8,
  },
  list: {
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 32,
    gap: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#F0E6F7",
  },
  image: {
    width: "100%",
    height: 160,
    backgroundColor: "#F2F2F2",
  },
  cardBody: {
    padding: 16,
    gap: 6,
  },
  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  level: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 12,
    color: "#DEA2FF",
  },
  duration: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 12,
    color: "#474747",
  },
  name: {
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 18,
    color: "#111111",
  },
  description: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 13,
    lineHeight: 18,
    color: "#474747",
  },
  focus: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 12,
    color: "#DEA2FF",
    marginTop: 2,
  },
});
