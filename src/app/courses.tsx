import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import CategoryPill from "../components/courses/CategoryPill";
import CoursePath from "../components/courses/CoursePath";
import BottomNavigationBar from "../components/home/BottomNavigationBar";

export default function CoursesScreen() {
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
      <View style={styles.container}>
        <View style={styles.categoryRow}>
          <CategoryPill title="Math" active />
          <CategoryPill title="Basic Algebra" />
          <CategoryPill title="Algebra" />
        </View>

        <View style={styles.header}>
          <Text style={styles.title}>Math Foundations</Text>
          <Text style={styles.subtitle}>Strengthen your math fundamentals</Text>
        </View>

        <CoursePath />
      </View>

      <BottomNavigationBar onTabPress={handleTabPress} activeTab="Courses" />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#111111",
  },

  container: {
    flex: 1,
    paddingBottom: 75,
  },

  categoryRow: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },

  header: {
    paddingHorizontal: 24,
    paddingVertical: 18,
    backgroundColor: "#071026",
  },

  title: {
    color: "white",
    fontSize: 27,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#aaaaaa",
    fontSize: 16,
    marginTop: 4,
  },
});
