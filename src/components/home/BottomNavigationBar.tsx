import { router, usePathname } from "expo-router";
import { BadgeCheck, BookOpenCheck, Home, User } from "lucide-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";

type TabName = "Home" | "Courses" | "Premium" | "You";

type NavItem = {
  name: TabName;
  icon: React.ElementType;
  path: "/" | "/courses" | "/profile" | "/premium";
};

const navItems: NavItem[] = [
  {
    name: "Home",
    icon: Home,
    path: "/",
  },
  {
    name: "Courses",
    icon: BookOpenCheck,
    path: "/courses",
  },
  {
    name: "Premium",
    icon: BadgeCheck,
    path: "/premium",
  },
  {
    name: "You",
    icon: User,
    path: "/profile",
  },
];

type BottomNavigationBarProps = {
  onTabPress?: (tab: string) => void;
  activeTab?: string;
};

export default function BottomNavigationBar({
  onTabPress,
  activeTab = "Home",
}: BottomNavigationBarProps) {
  const pathname = usePathname();

  function handlePress(
    tab: TabName,
    path: "/" | "/courses" | "/profile" | "/premium",
  ) {
    if (tab === "Premium") {
      alert("Premium page is not ready yet");
      return;
    }

    router.navigate(path as "/" | "/courses" | "/profile");
  }

  return (
    <View style={styles.container}>
      {navItems.map((item) => {
        const isActive = pathname === item.path;
        const Icon = item.icon;

        return (
          <Pressable
            key={item.name}
            onPress={() => handlePress(item.name, item.path)}
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
