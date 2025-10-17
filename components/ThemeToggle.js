// components/ThemeToggle.js
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Animated, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const animatedValue = new Animated.Value(isDark ? 1 : 0);

  Animated.timing(animatedValue, {
    toValue: isDark ? 1 : 0,
    duration: 250,
    useNativeDriver: false,
  }).start();

  const switchInterpolate = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 22],
  });

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={toggleTheme}
      style={[
        styles.toggleContainer,
        { backgroundColor: isDark ? "#afa4a4ff" : "#ddd" },
      ]}
    >
      <Animated.View
        style={[
          styles.circle,
          {
            transform: [{ translateX: switchInterpolate }],
            backgroundColor: isDark ? "#fff" : "#000",
          },
        ]}
      />
      <Ionicons
        name={isDark ? "moon" : "sunny"}
        size={18}
        color={isDark ? "#fff" : "#000"}
        style={{ marginLeft: isDark ? 8 : 12, position: "absolute", right: 6 }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    width: 45,
    height: 25,
    borderRadius: 20,
    justifyContent: "center",
    paddingHorizontal: 2,
    position: "relative",
    backgroundColor: "blue",
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});

export default ThemeToggle;
