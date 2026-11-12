import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { YogaSession } from "../data/sessions";

type Props = {
  session: YogaSession | null;
  visible: boolean;
  onClose: () => void;
};

export function SessionDetailModal({ session, visible, onClose }: Props) {
  const insets = useSafeAreaInsets();

  if (!session) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View style={[styles.sheet, { paddingTop: insets.top || 12 }]}>
        <View style={styles.handleRow}>
          <View style={styles.handle} />
          <Pressable onPress={onClose} hitSlop={12} style={styles.closeButton}>
            <Text style={styles.closeText}>Close</Text>
          </Pressable>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            styles.content,
            { paddingBottom: Math.max(insets.bottom, 24) + 16 },
          ]}
        >
          <Image source={{ uri: session.image }} style={styles.image} />

          <View style={styles.metaRow}>
            <Text style={styles.level}>{session.level}</Text>
            <Text style={styles.metaDot}>·</Text>
            <Text style={styles.meta}>{session.duration}</Text>
            <Text style={styles.metaDot}>·</Text>
            <Text style={styles.meta}>{session.focus}</Text>
          </View>

          <Text style={styles.title}>{session.name}</Text>
          <Text style={styles.about}>{session.about}</Text>

          <Text style={styles.sectionTitle}>Key poses</Text>
          <View style={styles.list}>
            {session.poses.map((pose) => (
              <View key={pose} style={styles.listItem}>
                <View style={styles.bullet} />
                <Text style={styles.listText}>{pose}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Benefits</Text>
          <View style={styles.list}>
            {session.benefits.map((benefit) => (
              <View key={benefit} style={styles.listItem}>
                <View style={styles.bullet} />
                <Text style={styles.listText}>{benefit}</Text>
              </View>
            ))}
          </View>

          <View style={styles.breathCard}>
            <Text style={styles.breathLabel}>Breath cue</Text>
            <Text style={styles.breathText}>{session.breathCue}</Text>
          </View>

          <Pressable style={styles.cta} onPress={onClose}>
            <Text style={styles.ctaText}>Start when ready</Text>
          </Pressable>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  sheet: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  handleRow: {
    paddingHorizontal: 24,
    paddingBottom: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  handle: {
    width: 40,
    height: 4,
    borderRadius: 999,
    backgroundColor: "#E5E5E5",
    marginBottom: 8,
  },
  closeButton: {
    position: "absolute",
    right: 24,
    top: 0,
  },
  closeText: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 14,
    color: "#DEA2FF",
  },
  content: {
    paddingHorizontal: 24,
    gap: 12,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 16,
    backgroundColor: "#F2F2F2",
    marginBottom: 4,
  },
  metaRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 6,
  },
  level: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 12,
    color: "#DEA2FF",
  },
  meta: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 12,
    color: "#474747",
  },
  metaDot: {
    color: "#C4C4C4",
    fontSize: 12,
  },
  title: {
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 28,
    color: "#111111",
    lineHeight: 34,
  },
  about: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 15,
    lineHeight: 22,
    color: "#474747",
  },
  sectionTitle: {
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 16,
    color: "#111111",
    marginTop: 8,
  },
  list: { gap: 8 },
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 999,
    backgroundColor: "#DEA2FF",
    marginTop: 7,
  },
  listText: {
    flex: 1,
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 14,
    lineHeight: 20,
    color: "#111111",
  },
  breathCard: {
    marginTop: 8,
    backgroundColor: "#FAF5FF",
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: "#F0E6F7",
    gap: 6,
  },
  breathLabel: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 12,
    color: "#DEA2FF",
    textTransform: "uppercase",
    letterSpacing: 0.4,
  },
  breathText: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 14,
    lineHeight: 20,
    color: "#111111",
  },
  cta: {
    marginTop: 8,
    height: 52,
    borderRadius: 12,
    backgroundColor: "#DEA2FF",
    alignItems: "center",
    justifyContent: "center",
  },
  ctaText: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 16,
    color: "#FFFFFF",
  },
});
