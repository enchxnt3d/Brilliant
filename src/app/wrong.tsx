import { router } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";

export default function WrongScreen() {
  const shake = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(shake, {
        toValue: 20,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shake, {
        toValue: -20,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shake, {
        toValue: 20,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shake, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
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
          transform: [{ translateX: shake }],
        }}
      >
        ❌
      </Animated.Text>

      <Text
        style={{
          color: "#EF4444",
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        Wrong Answer
      </Text>

      <TouchableOpacity
        onPress={() => router.push("/level" as any)}
        style={{
          marginTop: 30,
          backgroundColor: "#A855F7",
          padding: 15,
          borderRadius: 12,
        }}
      >
        <Text style={{ color: "white" }}>Try Again</Text>
      </TouchableOpacity>
    </View>
  );
}
