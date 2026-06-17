import { StyleSheet, Text, View } from "react-native";

export default function LeagueCard() {
  return (
    <View style={styles.leagueCard}>
      <View style={styles.badge}>
        <Text style={styles.lock}>🔒</Text>
      </View>

      <Text style={styles.cardTitle}>
        Unlock leagues and{"\n"}let the games begin!
      </Text>

      <Text style={styles.cardText}>
        Go head-to-head with problem solvers{"\n"}
        around the world in a weekly leaderboard.
      </Text>

      <View style={styles.progressBar}>
        <Text style={styles.progressText}>140 of 175 XP to unlock</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  leagueCard: {
    borderWidth: 2,
    borderColor: "#2b2b2b",
    borderRadius: 22,
    minHeight: 430,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 80,
  },

  badge: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: "#c79500",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 28,
  },

  lock: {
    fontSize: 36,
  },

  cardTitle: {
    color: "white",
    fontSize: 25,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 20,
  },

  cardText: {
    color: "#9b9b9b",
    fontSize: 18,
    textAlign: "center",
    lineHeight: 27,
    marginBottom: 28,
  },

  progressBar: {
    width: "100%",
    height: 54,
    borderRadius: 30,
    backgroundColor: "#232323",
    justifyContent: "center",
    alignItems: "center",
  },

  progressText: {
    color: "#8f8f8f",
    fontSize: 18,
    fontWeight: "800",
  },
});
