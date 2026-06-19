import { router } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";

export default function CorrectScreen() {
  const scale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0B0B0B",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.Text
        style={{
          fontSize: 100,
          transform: [{ scale }],
        }}
      >
        ✅
      </Animated.Text>

      <Text
        style={{
          color: "#22C55E",
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        Correct!
      </Text>

      <TouchableOpacity
        onPress={() => router.push("/")}
        style={{
          marginTop: 30,
          backgroundColor: "#A855F7",
          padding: 15,
          borderRadius: 12,
        }}
      >
        <Text style={{ color: "white" }}>Back Home</Text>
      </TouchableOpacity>
    </View>
  );
}
