import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import BottomNavigationBar from "../components/home/BottomNavigationBar";
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

  // this is temporary until the other tab screens are ready
  // for now it proves the bottom buttons actually do something
  function handleTabPress(tab: string) {
    if (tab === "Home") {
      router.push("/");
    }

    if (tab === "Courses") {
      router.push("/courses");
    }

    if (tab === "You") {
      router.push("/profile");
    }

    if (tab === "Premium") {
      console.log("Premium button pressed");
    }
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

        {/* this is the bottom navigation bar component */}
        <BottomNavigationBar />
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
});
