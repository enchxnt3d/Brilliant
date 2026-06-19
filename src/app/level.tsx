import { router } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";

export default function LevelScreen() {
  const move = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(move, {
          toValue: 120,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(move, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0B0B0B",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 28,
          fontWeight: "bold",
        }}
      >
        Sequencing Commands
      </Text>

      <Text
        style={{
          color: "#999",
          marginTop: 10,
        }}
      >
        Watch the arrow movement
      </Text>

      <Animated.Text
        style={{
          fontSize: 80,
          color: "#A855F7",
          marginTop: 50,
          transform: [{ translateX: move }],
        }}
      >
        ➜
      </Animated.Text>

      <Text
        style={{
          color: "white",
          marginTop: 50,
          marginBottom: 20,
        }}
      >
        Which direction is the arrow moving?
      </Text>

      <TouchableOpacity
        onPress={() => router.push("/correct" as any)}
        style={{
          backgroundColor: "#22C55E",
          padding: 15,
          borderRadius: 12,
          width: 250,
          marginBottom: 15,
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Moving Right
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/wrong" as any)}
        style={{
          backgroundColor: "#EF4444",
          padding: 15,
          borderRadius: 12,
          width: 250,
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Moving Left
        </Text>
      </TouchableOpacity>
    </View>
  );
}
