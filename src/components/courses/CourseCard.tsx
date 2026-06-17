import { StyleSheet, Text, View } from "react-native";

type CourseCardProps = {
  title: string;
  isNew?: boolean;
};

export default function CourseCard({ title, isNew }: CourseCardProps) {
  return (
    <View style={styles.courseCard}>
      <View style={styles.iconPlaceholder} />

      <Text style={styles.courseTitle}>{title}</Text>

      {isNew && <Text style={styles.newBadge}>NEW</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  courseCard: {
    width: "88%",
    height: 130,
    borderWidth: 3,
    borderColor: "#333333",
    borderRadius: 20,
    backgroundColor: "#1a1a1a",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    gap: 16,
  },

  iconPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#4f78ff",
  },

  courseTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },

  newBadge: {
    color: "white",
    backgroundColor: "#22cc55",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 16,
    fontSize: 14,
    fontWeight: "bold",
  },
});
