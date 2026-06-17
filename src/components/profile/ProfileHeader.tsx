import { StyleSheet, Text, View } from "react-native";

type ProfileHeaderProps = {
  name: string;
  initial: string;
};

export default function ProfileHeader({ name, initial }: ProfileHeaderProps) {
  return (
    <View style={styles.profileHeader}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initial}</Text>
      </View>

      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
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
});
