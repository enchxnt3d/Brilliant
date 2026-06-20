import { router } from "expo-router";
import { Calculator } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";
import CategoryPill from "../components/courses/CategoryPill";
import CoursePath from "../components/courses/CoursePath";
import BottomNavigationBar from "../components/home/BottomNavigationBar";
import { useTheme } from "../context/ThemeContext";

export default function CoursesScreen() {
  const { isDark } = useTheme();
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
    <View style={[styles.page, !isDark && styles.lightPage]}>
      <View style={styles.container}>
        <View style={styles.categoryRow}>
          <CategoryPill title="Math" active />
          <CategoryPill title="Basic Algebra" />
          <CategoryPill title="Algebra" />
        </View>

        <View style={[styles.header, !isDark && styles.lightHeader]}>
          <View>
            <Text style={[styles.title, !isDark && styles.lightTitle]}>
              Math Foundations
            </Text>
            <Text style={[styles.subtitle, !isDark && styles.lightSubtitle]}>
              Strengthen your math fundamentals
            </Text>
          </View>

          <Calculator size={72} strokeWidth={2.5} color="#4f78ff" />
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  lightPage: {
    backgroundColor: "#ececec",
  },

  lightHeader: {
    backgroundColor: "#f2f2f2",
  },

  lightTitle: {
    color: "#111111",
  },

  lightSubtitle: {
    color: "#555555",
  },
});
