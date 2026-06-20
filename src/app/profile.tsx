import { StyleSheet, View } from "react-native";
import BottomNavigationBar from "../components/home/BottomNavigationBar";
import LeagueCard from "../components/profile/LeagueCard";
import ProfileHeader from "../components/profile/ProfileHeader";
import StatCard from "../components/profile/StatCard";
import { useTheme } from "../context/ThemeContext";

export default function ProfileScreen() {
  const { isDark, toggleTheme, themeName } = useTheme();

  return (
    <View style={[styles.page, !isDark && styles.lightPage]}>
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <ProfileHeader name="John Doe" initial="J" />
        </View>

        <View style={styles.statsRow}>
          <StatCard value="⚡ 0" label="Streak" />
          <StatCard value="✦ 0" label="XP" />
        </View>

        <LeagueCard />
      </View>

      <BottomNavigationBar activeTab="You" />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#111111",
  },

  lightPage: {
    backgroundColor: "#ececec",
  },

  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 100,
  },

  statsRow: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 22,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
});
