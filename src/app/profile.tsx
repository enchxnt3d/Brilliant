import { router } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import BottomNavigationBar from "../components/home/BottomNavigationBar";
import LeagueCard from "../components/profile/LeagueCard";
import ProfileHeader from "../components/profile/ProfileHeader";
import StatCard from "../components/profile/StatCard";

export default function ProfileScreen() {
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
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <ProfileHeader name="John Doe" initial="J" />

        <View style={styles.statsRow}>
          <StatCard value="⚡ 0" label="Streak" />
          <StatCard value="✦ 0" label="XP" />
        </View>

        <LeagueCard />
      </ScrollView>

      <BottomNavigationBar onTabPress={handleTabPress} activeTab="You" />
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
    paddingHorizontal: 24,
    paddingTop: 48,
  },

  contentContainer: {
    paddingBottom: 100,
  },

  statsRow: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 22,
  },
});
