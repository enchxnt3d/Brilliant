import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import type { CourseSection } from "../../types/course";
import CourseCard from "./CourseCard";
import ProgressDots from "./ProgressDots";

type Props = {
  sections: CourseSection[];
  onStartPress: (section: CourseSection) => void;
};

// this controls which course section is selected on the home screen
// the dots change this index, and then the whole screen updates from that
export default function CourseCarousel({ sections, onStartPress }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSection = sections[activeIndex];

  // this changes the selected section when the user taps a dot
  function changeSection(index: number) {
    setActiveIndex(index);
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentArea}>
        <Text style={styles.title}>{activeSection.title}</Text>
        <Text style={[styles.levelLabel, { color: activeSection.themeColor }]}>
          {activeSection.levelLabel}
        </Text>

        <Pressable onPress={() => onStartPress(activeSection)}>
          <CourseArtwork section={activeSection} />
        </Pressable>

        <ProgressDots
          total={sections.length}
          activeIndex={activeIndex}
          activeColor={activeSection.themeColor}
          onDotPress={changeSection}
        />
      </View>

      <CourseCard
        section={activeSection}
        onStartPress={() => onStartPress(activeSection)}
      />
    </View>
  );
}

type ArtworkProps = {
  section: CourseSection;
};

// this is just mock artwork for now
// later we can replace this with real assets if we want it to look closer
function CourseArtwork({ section }: ArtworkProps) {
  if (section.artworkType === "variables") {
    return (
      <View style={styles.artwork}>
        <View
          style={[styles.bigBlock, { backgroundColor: section.themeColor }]}
        >
          <Text style={styles.artText}>x = 5</Text>
        </View>
        <View style={styles.smallBlock}>
          <Text style={styles.smallArtText}>y</Text>
        </View>
      </View>
    );
  }

  if (section.artworkType === "data") {
    return (
      <View style={styles.artwork}>
        <View style={styles.chartBox}>
          <View
            style={[
              styles.bar,
              { height: 42, backgroundColor: section.themeColor },
            ]}
          />
          <View
            style={[
              styles.bar,
              { height: 72, backgroundColor: section.themeColor },
            ]}
          />
          <View
            style={[
              styles.bar,
              { height: 56, backgroundColor: section.themeColor },
            ]}
          />
        </View>
      </View>
    );
  }

  if (section.artworkType === "science") {
    return (
      <View style={styles.artwork}>
        <View style={[styles.circleArt, { borderColor: section.themeColor }]}>
          <Text style={[styles.gearText, { color: section.themeColor }]}>
            ⚙
          </Text>
        </View>
      </View>
    );
  }

  if (section.artworkType === "probability") {
    return (
      <View style={styles.artwork}>
        <View
          style={[styles.circleArt, { backgroundColor: section.themeColor }]}
        >
          <Text style={styles.probabilityText}>?</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.artwork}>
      <View style={[styles.codePanel, { borderColor: section.themeColor }]}>
        <View style={styles.codeLineLong} />
        <View style={styles.codeLineShort} />
        <View
          style={[
            styles.codeLineMedium,
            { backgroundColor: section.themeColor },
          ]}
        />
      </View>

      <View
        style={[styles.playCircle, { backgroundColor: section.themeColor }]}
      >
        <Text style={styles.playIcon}>▶</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentArea: {
    alignItems: "center",
    paddingHorizontal: 24,
  },

  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 26,
  },

  levelLabel: {
    fontSize: 16,
    fontWeight: "900",
    letterSpacing: 1,
    marginTop: 14,
    marginBottom: 24,
  },

  artwork: {
    width: "100%",
    height: 255,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  codePanel: {
    width: 190,
    height: 135,
    borderWidth: 4,
    borderRadius: 22,
    backgroundColor: "#1d1d1d",
    padding: 22,
    gap: 14,
  },

  codeLineLong: {
    height: 12,
    width: "90%",
    borderRadius: 8,
    backgroundColor: "#f7f7f7",
  },

  codeLineShort: {
    height: 12,
    width: "45%",
    borderRadius: 8,
    backgroundColor: "#5f5f5f",
  },

  codeLineMedium: {
    height: 12,
    width: "70%",
    borderRadius: 8,
  },

  playCircle: {
    width: 66,
    height: 66,
    borderRadius: 33,
    position: "absolute",
    bottom: 48,
    alignItems: "center",
    justifyContent: "center",
  },

  playIcon: {
    color: "white",
    fontSize: 24,
    fontWeight: "900",
    marginLeft: 4,
  },

  bigBlock: {
    width: 160,
    height: 96,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ rotate: "-8deg" }],
  },

  artText: {
    color: "white",
    fontSize: 30,
    fontWeight: "900",
  },

  smallBlock: {
    width: 78,
    height: 70,
    borderRadius: 18,
    backgroundColor: "#2b2b2b",
    position: "absolute",
    right: 70,
    bottom: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  smallArtText: {
    color: "#c7a9ff",
    fontSize: 32,
    fontWeight: "900",
  },

  chartBox: {
    width: 180,
    height: 140,
    borderRadius: 22,
    backgroundColor: "#1d1d1d",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 18,
    paddingBottom: 22,
    borderWidth: 3,
    borderColor: "#343434",
  },

  bar: {
    width: 28,
    borderRadius: 10,
  },

  circleArt: {
    width: 145,
    height: 145,
    borderRadius: 75,
    borderWidth: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  gearText: {
    fontSize: 76,
  },

  probabilityText: {
    color: "white",
    fontSize: 72,
    fontWeight: "900",
  },
});
