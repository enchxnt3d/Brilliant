import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CourseCarousel from "../components/home/CourseCarousel";
import StatBadge from "../components/home/StatBadge";
import { courseSections } from "../data/courseSections";
import type { CourseSection } from "../types/course";

export default function HomeScreen() {
  // this sends the selected course section to the roadmap screen
  // the sectionId is passed so the roadmap knows what course section was clicked
  function handleStartSection(section: CourseSection) {
    router.push({
      pathname: "/roadmap",
      params: { sectionId: section.id },
    });
  }

  return (
    <View style={styles.page}>
      {/* this keeps the app looking like a phone when I test it on web */}
      <View style={styles.phoneScreen}>
        {/* top stats like Brilliant */}
        <View style={styles.topRow}>
          <StatBadge value="2" icon="🔑" iconColor="#ffcc24" />
          <StatBadge value="1" icon="⚡" iconColor="#d6ff1f" />
        </View>

        {/* this is the main home carousel with all the course sections */}
        <CourseCarousel
          sections={courseSections}
          onStartPress={handleStartSection}
        />

        {/* this is just the bottom navigation mockup for now */}
        <View style={styles.bottomTabs}>
          <Pressable style={styles.activeTab}>
            <Text style={styles.activeTabIcon}>⌂</Text>
          </Pressable>

          <Pressable style={styles.tabItem}>
            <Text style={styles.tabIcon}>▣</Text>
            <Text style={styles.tabText}>Courses</Text>
          </Pressable>

          <Pressable style={styles.tabItem}>
            <Text style={styles.tabIcon}>♙</Text>
            <Text style={styles.tabText}>Premium</Text>
          </Pressable>

          <Pressable style={styles.tabItem}>
            <Text style={styles.tabIcon}>♙</Text>
            <Text style={styles.tabText}>You</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

// main page styles
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
    paddingTop: 28,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 26,
    marginBottom: 8,
  },

  bottomTabs: {
    height: 92,
    backgroundColor: "#111111",
    borderTopWidth: 1,
    borderTopColor: "#1f1f1f",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 12,
  },

  activeTab: {
    width: 58,
    height: 44,
    borderRadius: 24,
    backgroundColor: "#2b2b2b",
    alignItems: "center",
    justifyContent: "center",
  },

  activeTabIcon: {
    color: "white",
    fontSize: 30,
    fontWeight: "900",
  },

  tabItem: {
    alignItems: "center",
    gap: 4,
  },

  tabIcon: {
    color: "#8a8a8a",
    fontSize: 28,
    fontWeight: "900",
  },

  tabText: {
    color: "#8a8a8a",
    fontSize: 14,
    fontWeight: "800",
  },
});
