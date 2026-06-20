import { Pressable, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";

type ProfileHeaderProps = {
  name: string;
  initial: string;
};

export default function ProfileHeader({ name, initial }: ProfileHeaderProps) {
  const { themeName, toggleTheme } = useTheme();

  return (
    <View style={styles.profileHeader}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initial}</Text>
      </View>

      <Text style={styles.name}>{name}</Text>

      <Pressable style={styles.themeButton} onPress={toggleTheme}>
        <Text style={styles.themeButtonText}>
          {themeName === "dark" ? "Light" : "Dark"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  avatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#2dcc5a",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },

  avatarText: {
    fontSize: 24,
    fontWeight: "800",
    color: "#111111",
  },

  name: {
    flex: 1,
    color: "white",
    fontSize: 26,
    fontWeight: "800",
  },

  themeButton: {
    backgroundColor: "#4f78ff",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },

  themeButtonText: {
    color: "white",
    fontWeight: "800",
  },
});
