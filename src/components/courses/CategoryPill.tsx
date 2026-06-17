import { StyleSheet, Text, View } from "react-native";

type CategoryPillProps = {
  title: string;
  active?: boolean;
};

export default function CategoryPill({ title, active }: CategoryPillProps) {
  return (
    <View style={[styles.box, active && styles.activeBox]}>
      <Text style={[styles.text, active && styles.activeText]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 110,
    height: 60,
    borderWidth: 3,
    borderColor: "#333333",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  activeBox: {
    borderColor: "#4f78ff",
    backgroundColor: "#08112b",
  },

  text: {
    color: "#999999",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },

  activeText: {
    color: "white",
    fontSize: 17,
  },
});
