import { Pressable, StyleSheet, Text, View } from "react-native";
import type { CourseSection } from "../../types/course";

type Props = {
  section: CourseSection;
  onStartPress: () => void;
};

// this is the bottom card for the selected section
// it updates every time the user changes the selected dot
export default function CourseCard({ section, onStartPress }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.lessonRow}>
        <View style={styles.finishedCircle}>
          <Text style={styles.finishedText}>✓</Text>
        </View>

        <Text style={styles.inactiveLesson}>{section.inactiveLesson}</Text>

        <View style={styles.rightCircleDone}>
          <Text style={styles.rightCheck}>✓</Text>
        </View>
      </View>

      <View style={styles.lessonRow}>
        <View
          style={[styles.activeCircle, { borderColor: section.themeColor }]}
        >
          <View style={styles.innerGlow} />
        </View>

        <Text style={styles.activeLesson}>{section.activeLesson}</Text>

        <View style={styles.rightCircle} />
      </View>

      <Pressable
        style={[styles.startButton, { backgroundColor: section.themeColor }]}
        onPress={onStartPress}
      >
        <Text style={styles.startButtonText}>{section.startButtonText}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1b1b1b",
    borderRadius: 34,
    padding: 22,
    marginHorizontal: 24,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#343434",
  },

  lessonRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
    gap: 16,
  },

  finishedCircle: {
    width: 52,
    height: 38,
    borderRadius: 25,
    backgroundColor: "#3a3a3a",
    alignItems: "center",
    justifyContent: "center",
  },

  finishedText: {
    color: "#8a8a8a",
    fontSize: 22,
    fontWeight: "900",
  },

  inactiveLesson: {
    flex: 1,
    color: "#8a8a8a",
    fontSize: 18,
    fontWeight: "800",
  },

  rightCircleDone: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#6f4ab5",
    alignItems: "center",
    justifyContent: "center",
  },

  rightCheck: {
    color: "#b99dff",
    fontSize: 18,
    fontWeight: "900",
  },

  activeCircle: {
    width: 58,
    height: 46,
    borderRadius: 28,
    borderWidth: 4,
    backgroundColor: "#2d2d2d",
    alignItems: "center",
    justifyContent: "center",
  },

  innerGlow: {
    width: 34,
    height: 22,
    borderRadius: 14,
    backgroundColor: "white",
  },

  activeLesson: {
    flex: 1,
    color: "white",
    fontSize: 19,
    fontWeight: "900",
  },

  rightCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#8a8a8a",
  },

  startButton: {
    height: 58,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },

  startButtonText: {
    color: "white",
    fontSize: 22,
    fontWeight: "900",
  },
});
