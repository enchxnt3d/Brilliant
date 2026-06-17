// this is the structure for each section inside the programming course
// I made it a type so all sections follow the same data shape

export type CourseSection = {
  id: string;
  title: string;
  levelLabel: string;
  themeColor: string;
  inactiveLesson: string;
  activeLesson: string;
  startButtonText: string;
  artworkType: "code" | "variables" | "data" | "science" | "probability";
};
