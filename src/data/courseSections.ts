import type { CourseSection } from "../types/course";

// this is the data for the course sections shown in the home carousel
// I put it here so the UI can change based on data instead of hardcoding everything

export const courseSections: CourseSection[] = [
  {
    id: "thinking-code",
    title: "Thinking in Code",
    levelLabel: "LEVEL 1",
    themeColor: "#9b5cff",
    inactiveLesson: "Warm Up",
    activeLesson: "Looping With Logic",
    startButtonText: "Start",
    artworkType: "code",
  },
  {
    id: "variables",
    title: "Programming with Variables",
    levelLabel: "LEVEL 1 · RECOMMENDED",
    themeColor: "#9b5cff",
    inactiveLesson: "Writing Programs",
    activeLesson: "Using Variables",
    startButtonText: "Start",
    artworkType: "variables",
  },
  {
    id: "data-visual",
    title: "Exploring Data Visually",
    levelLabel: "LEVEL 1 · RECOMMENDED",
    themeColor: "#ff8a22",
    inactiveLesson: "Reading Bar Charts",
    activeLesson: "Analyzing Bar Charts",
    startButtonText: "Start",
    artworkType: "data",
  },
  {
    id: "scientific-thinking",
    title: "Scientific Thinking",
    levelLabel: "LEVEL 1 · RECOMMENDED",
    themeColor: "#f8c827",
    inactiveLesson: "Connecting Gears",
    activeLesson: "Gears Changing Speeds",
    startButtonText: "Start",
    artworkType: "science",
  },
  {
    id: "probability",
    title: "Probability and Chance",
    levelLabel: "LEVEL 1 · RECOMMENDED",
    themeColor: "#4c74ff",
    inactiveLesson: "Comparing Likelihoods",
    activeLesson: "Multiple Decks",
    startButtonText: "Start",
    artworkType: "probability",
  },
];
