import { StyleSheet, Text, View } from "react-native";

type CourseCardProps = {
  title: string;
  isNew?: boolean;
  icon: React.ElementType;
};

export default function CourseCard({
  title,
  isNew,
  icon: Icon,
}: CourseCardProps) {
  return (
    <View style={styles.courseCard}>
      <View style={styles.iconBox}>
        <Icon size={46} strokeWidth={2.8} color="#4f78ff" />
      </View>

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

  iconBox: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
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
