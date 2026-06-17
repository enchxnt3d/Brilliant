import { StyleSheet, Text, View } from "react-native";

type Props = {
  value: string;
  icon: string;
  iconColor: string;
};

// this is for the small top badges like the key and energy
// I made it reusable so we dont write the same badge twice
export default function StatBadge({ value, icon, iconColor }: Props) {
  return (
    <View style={styles.badge}>
      <Text style={styles.value}>{value}</Text>
      <Text style={[styles.icon, { color: iconColor }]}>{icon}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    minWidth: 100,
    height: 52,
    borderWidth: 3,
    borderColor: "#2c2c2c",
    borderRadius: 28,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#111111",
  },

  value: {
    color: "white",
    fontSize: 24,
    fontWeight: "900",
  },

  icon: {
    fontSize: 26,
    fontWeight: "900",
  },
});
