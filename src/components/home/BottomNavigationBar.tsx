import { BadgeCheck, BookOpenCheck, Home, User } from "lucide-react-native";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type TabName = "Home" | "Courses" | "Premium" | "You";

type NavItem = {
  name: TabName;
  icon: React.ElementType;
};

type BottomNavigationBarProps = {
  onTabPress?: (tab: TabName) => void;
};

const navItems: NavItem[] = [
  {
    name: "Home",
    icon: Home,
  },
  {
    name: "Courses",
    icon: BookOpenCheck,
  },
  {
    name: "Premium",
    icon: BadgeCheck,
  },
  {
    name: "You",
    icon: User,
  },
];

// this is the bottom navigation bar
// I made it reusable so the home screen does not get messy
export default function BottomNavigationBar({
  onTabPress,
}: BottomNavigationBarProps) {
  const [activeTab, setActiveTab] = useState<TabName>("Home");

  // this changes the active button and also runs whatever function the screen sends
  function handlePress(tab: TabName) {
    setActiveTab(tab);

    if (onTabPress) {
      onTabPress(tab);
    }
  }

  return (
    <View style={styles.container}>
      {navItems.map((item) => {
        const isActive = activeTab === item.name;
        const Icon = item.icon;

        return (
          <Pressable
            key={item.name}
            onPress={() => handlePress(item.name)}
            style={styles.navItem}
          >
            <View style={[styles.pill, isActive && styles.activePill]}>
              <Icon
                size={30}
                strokeWidth={2.8}
                color={isActive ? "#f2f2f2" : "#777777"}
              />
            </View>

            <Text style={[styles.label, isActive && styles.activeLabel]}>
              {item.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 106,
    width: "100%",
    backgroundColor: "#070707",
    borderTopWidth: 1,
    borderTopColor: "#171717",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 14,
  },

  navItem: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 78,
  },

  pill: {
    width: 72,
    height: 50,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },

  activePill: {
    backgroundColor: "#252525",
  },

  label: {
    color: "#777777",
    fontSize: 17,
    fontWeight: "800",
  },

  activeLabel: {
    color: "#f2f2f2",
    fontWeight: "900",
  },
});
