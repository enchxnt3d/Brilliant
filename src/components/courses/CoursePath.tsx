import {
  Blocks,
  Calculator,
  ChartNoAxesCombined,
  Map,
} from "lucide-react-native";
import { StyleSheet, View } from "react-native";
import CourseCard from "./CourseCard";

const courses = [
  {
    title: "Arithmetic Thinking",
    icon: Calculator,
    isNew: true,
  },
  {
    title: "Coordinate Plane",
    icon: Map,
  },
  {
    title: "Proportional Reasoning",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Visual Algebra",
    icon: Blocks,
  },
];

export default function CoursePath() {
  return (
    <View style={styles.courseList}>
      {courses.map((course, index) => (
        <View key={course.title} style={styles.courseGroup}>
          <CourseCard
            title={course.title}
            icon={course.icon}
            isNew={course.isNew}
          />

          {index < courses.length - 1 && <View style={styles.connector} />}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  courseList: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 10,
    paddingBottom: 8,
  },

  courseGroup: {
    width: "100%",
    alignItems: "center",
  },

  connector: {
    width: 4,
    height: 25,
    backgroundColor: "#333333",
  },
});
