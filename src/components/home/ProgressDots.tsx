import { Pressable, StyleSheet, View } from "react-native";

type Props = {
  total: number;
  activeIndex: number;
  activeColor: string;
  onDotPress: (index: number) => void;
};

// this is the small section selector under the artwork
// each dot changes the selected course section
export default function ProgressDots({
  total,
  activeIndex,
  activeColor,
  onDotPress,
}: Props) {
  return (
    <View style={styles.container}>
      {Array.from({ length: total }).map((_, index) => {
        const isActive = index === activeIndex;

        return (
          <Pressable
            key={index}
            onPress={() => onDotPress(index)}
            style={styles.dotButton}
          >
            <View
              style={[styles.dot, isActive && { backgroundColor: activeColor }]}
            />
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    marginTop: 8,
    marginBottom: 36,
  },

  dotButton: {
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
  },

  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#464646",
  },
});
