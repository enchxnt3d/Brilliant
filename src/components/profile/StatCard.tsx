import { StyleSheet, Text, View } from "react-native";

type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statNumber}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  statCard: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#2b2b2b",
    borderRadius: 16,
    padding: 18,
  },

  statNumber: {
    color: "white",
    fontSize: 30,
    fontWeight: "800",
  },

  statLabel: {
    color: "#9b9b9b",
    fontSize: 20,
    marginTop: 6,
  },
});
