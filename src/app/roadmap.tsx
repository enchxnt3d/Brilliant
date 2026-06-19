import { router, useLocalSearchParams } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { courseSections } from "../data/courseSections";

export default function RoadmapScreen() {
  const params = useLocalSearchParams<{ sectionId?: string }>();

  // this gets the course section that was selected from the home page
  // if something breaks it just uses the first section so the screen still works
  const selectedSection =
    courseSections.find((section) => section.id === params.sectionId) ??
    courseSections[0];

  // this will connect to my classmate first level screen later
  function openFirstLevel() {
    router.push("/level" as any);
  }

  return (
    <View style={styles.page}>
      {/* this keeps the roadmap inside a mobile size when testing on web */}
      <View style={styles.phoneScreen}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* top row with back button and stats */}
          <View style={styles.topRow}>
            <Pressable onPress={() => router.back()}>
              <Text style={styles.backButton}>←</Text>
            </Pressable>

            <View style={styles.statBadge}>
              <Text style={styles.statText}>3</Text>
              <Text style={styles.keyIcon}>🔑</Text>
            </View>

            <View style={styles.statBadge}>
              <Text style={styles.statText}>1</Text>
              <Text style={styles.energyIcon}>⚡</Text>
            </View>
          </View>

          {/* small course artwork and course info */}
          <View style={styles.courseHeader}>
            <MiniArtwork color={selectedSection.themeColor} />

            <Text style={styles.title}>{selectedSection.title}</Text>

            <Text style={styles.description}>
              Build solid foundations for computational problem solving
            </Text>

            <View style={styles.courseStats}>
              <Text style={styles.courseStatText}>◉ 48 Lessons</Text>
              <Text style={styles.courseStatText}>✚ 588 Exercises</Text>
            </View>
          </View>

          {/* level title card */}
          <View
            style={[
              styles.levelBanner,
              { borderColor: selectedSection.themeColor },
            ]}
          >
            <Text
              style={[styles.levelText, { color: selectedSection.themeColor }]}
            >
              LEVEL 1
            </Text>

            <Text style={styles.levelTitle}>Taking the First Steps</Text>
          </View>

          {/* roadmap path */}
          <View style={styles.pathArea}>
            <RoadmapNode
              title="Writing Programs"
              status="done"
              color={selectedSection.themeColor}
            />

            <RoadmapNode
              title={selectedSection.activeLesson}
              status="active"
              color={selectedSection.themeColor}
              onPress={openFirstLevel}
            />

            <RoadmapNode
              title="Repeating Patterns"
              status="locked"
              color={selectedSection.themeColor}
            />

            <RoadmapNode
              title="Debugging Programs"
              status="locked"
              color={selectedSection.themeColor}
            />
          </View>
        </ScrollView>

        {/* bottom card for the current active lesson */}
        <View style={styles.bottomCard}>
          <Text style={styles.bottomCardTitle}>
            {selectedSection.activeLesson}
          </Text>

          <Pressable
            style={[
              styles.startButton,
              { backgroundColor: selectedSection.themeColor },
            ]}
            onPress={openFirstLevel}
          >
            <Text style={styles.startButtonText}>Start</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

type MiniArtworkProps = {
  color: string;
};

// small fake course artwork for now
// later we can replace this with real assets if we want it closer
function MiniArtwork({ color }: MiniArtworkProps) {
  return (
    <View style={styles.miniArtwork}>
      <View style={[styles.artTopBar, { backgroundColor: color }]} />
      <View style={styles.artBody}>
        <View style={styles.artLineLong} />
        <View style={[styles.artLineShort, { backgroundColor: color }]} />
      </View>
    </View>
  );
}

type RoadmapNodeProps = {
  title: string;
  status: "done" | "active" | "locked";
  color: string;
  onPress?: () => void;
};

function RoadmapNode({ title, status, color, onPress }: RoadmapNodeProps) {
  const isActive = status === "active";
  const isDone = status === "done";

  return (
    <Pressable
      onPress={onPress}
      disabled={!isActive}
      style={[
        styles.nodeRow,
        isActive ? styles.activeNodeRow : styles.sideNodeRow,
      ]}
    >
      <View
        style={[
          styles.nodeCircle,
          isActive && {
            borderColor: color,
            shadowColor: color,
          },
          isDone && {
            backgroundColor: color,
            borderColor: color,
          },
        ]}
      >
        {isDone ? (
          <Text style={styles.nodeCheck}>✓</Text>
        ) : isActive ? (
          <View style={styles.nodeGlow} />
        ) : (
          <View style={styles.lockedInner} />
        )}
      </View>

      <Text
        style={[
          styles.nodeTitle,
          isActive && styles.activeNodeTitle,
          !isActive && !isDone && styles.lockedNodeTitle,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
  },

  phoneScreen: {
    flex: 1,
    width: "100%",
    maxWidth: 430,
    backgroundColor: "#111111",
    position: "relative",
  },

  scrollContent: {
    paddingTop: 36,
    paddingHorizontal: 24,
    paddingBottom: 250,
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  backButton: {
    color: "white",
    fontSize: 34,
    fontWeight: "800",
  },

  statBadge: {
    minWidth: 78,
    height: 46,
    borderRadius: 26,
    borderWidth: 3,
    borderColor: "#2c2c2c",
    backgroundColor: "#111111",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
  },

  statText: {
    color: "white",
    fontSize: 23,
    fontWeight: "900",
  },

  keyIcon: {
    fontSize: 21,
  },

  energyIcon: {
    fontSize: 21,
  },

  courseHeader: {
    alignItems: "center",
    marginTop: 34,
  },

  miniArtwork: {
    width: 120,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
  },

  artTopBar: {
    width: 88,
    height: 24,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },

  artBody: {
    width: 105,
    height: 68,
    borderRadius: 14,
    backgroundColor: "#222222",
    borderWidth: 3,
    borderColor: "#333333",
    padding: 14,
    gap: 10,
  },

  artLineLong: {
    width: "90%",
    height: 10,
    borderRadius: 7,
    backgroundColor: "white",
  },

  artLineShort: {
    width: "55%",
    height: 10,
    borderRadius: 7,
  },

  title: {
    color: "white",
    fontSize: 31,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 22,
  },

  description: {
    color: "#9b9b9b",
    fontSize: 18,
    textAlign: "center",
    lineHeight: 27,
    marginTop: 16,
  },

  courseStats: {
    flexDirection: "row",
    gap: 22,
    marginTop: 24,
  },

  courseStatText: {
    color: "white",
    fontSize: 15,
    fontWeight: "800",
  },

  levelBanner: {
    borderWidth: 3,
    borderRadius: 20,
    paddingVertical: 18,
    alignItems: "center",
    marginTop: 46,
    marginBottom: 48,
    backgroundColor: "#191919",
  },

  levelText: {
    fontSize: 16,
    fontWeight: "900",
    letterSpacing: 1,
  },

  levelTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "900",
    marginTop: 6,
  },

  pathArea: {
    gap: 60,
  },

  nodeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 26,
  },

  sideNodeRow: {
    opacity: 0.5,
    transform: [{ translateX: 44 }],
  },

  activeNodeRow: {
    transform: [{ translateX: 0 }],
  },

  nodeCircle: {
    width: 108,
    height: 68,
    borderRadius: 55,
    backgroundColor: "#3b3b3b",
    borderWidth: 5,
    borderColor: "#4b4b4b",
    alignItems: "center",
    justifyContent: "center",
  },

  nodeCheck: {
    color: "white",
    fontSize: 32,
    fontWeight: "900",
  },

  nodeGlow: {
    width: 68,
    height: 42,
    borderRadius: 28,
    backgroundColor: "white",
  },

  lockedInner: {
    width: 52,
    height: 34,
    borderRadius: 22,
    backgroundColor: "#777777",
    opacity: 0.45,
  },

  nodeTitle: {
    color: "#8c8c8c",
    fontSize: 21,
    fontWeight: "700",
    flex: 1,
  },

  activeNodeTitle: {
    color: "white",
    fontWeight: "900",
  },

  lockedNodeTitle: {
    color: "#555555",
  },

  bottomCard: {
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 24,
    backgroundColor: "#191919",
    borderRadius: 28,
    borderWidth: 2,
    borderColor: "#333333",
    padding: 22,
    alignItems: "center",
  },

  bottomCardTitle: {
    color: "white",
    fontSize: 25,
    fontWeight: "900",
    marginBottom: 18,
    textAlign: "center",
  },

  startButton: {
    width: "100%",
    height: 58,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  startButtonText: {
    color: "white",
    fontSize: 22,
    fontWeight: "900",
  },
});
