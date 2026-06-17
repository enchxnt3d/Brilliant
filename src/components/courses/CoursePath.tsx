import { StyleSheet, View } from "react-native";
import CourseCard from "./CourseCard";

export default function CoursePath() {
  return (
    <View style={styles.courseList}>
      <CourseCard title="Arithmetic Thinking" isNew />

      <View style={styles.connector} />

      <CourseCard title="Coordinate Plane" />

      <View style={styles.connector} />

      <CourseCard title="Proportional Reasoning" />

      <View style={styles.connector} />

      <CourseCard title="Visual Algebra" />
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

  connector: {
    width: 4,
    height: 25,
    backgroundColor: "#333333",
  },
});
