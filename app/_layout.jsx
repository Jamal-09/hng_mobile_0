import { ThemeProvider, useTheme } from "@/components/ThemeContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function RootLayout() {
  const { theme } = useTheme();

  const isLight = theme === "light";
  const tabBg = isLight ? "#ffffffcc" : "#1E1E1Ecc";
  const screenBg = isLight ? "#f8f8f8" : "#0D0D0D";
  const focusBg = isLight ? "#e4e4e4" : "#333";
  const iconActive = isLight ? "#000" : "#fff";
  const iconInactive = isLight ? "#aaa" : "#777";

  return (
    <View style={{ flex: 1, backgroundColor: screenBg }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            backgroundColor: tabBg,
            borderRadius: 200,
            marginHorizontal: 15,
            marginBottom: 25,
            justifyContent: "center",
            borderTopWidth: 0,
            shadowColor: "#000",
            shadowOpacity: 0.15,
            shadowRadius: 6,
            elevation: 8,
            height: 60,
            paddingTop: 4,
          },
          tabBarActiveTintColor: iconActive,
          tabBarInactiveTintColor: iconInactive,
          tabBarBackground: () => (
            <View
              style={{
                flex: 1,
                borderRadius: 200,
                backgroundColor: tabBg,
              }}
            />
          ),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ focused, color }) => (
              <View
                style={{
                  backgroundColor: focused ? focusBg : "transparent",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 35,
                  borderRadius: 18,
                  width: 65,
                  marginBottom: 5,
                }}
              >
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  size={20}
                  color={color}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: "About",
            tabBarIcon: ({ focused, color }) => (
              <View
                style={{
                  backgroundColor: focused ? focusBg : "transparent",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 35,
                  borderRadius: 18,
                  width: 65,
                  marginBottom: 5,
                }}
              >
                <Ionicons
                  name={focused ? "document-text" : "document-text-outline"}
                  size={20}
                  color={color}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="contact"
          options={{
            title: "Contact",
            tabBarIcon: ({ focused, color }) => (
              <View
                style={{
                  backgroundColor: focused ? focusBg : "transparent",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 35,
                  borderRadius: 18,
                  width: 65,
                  marginBottom: 5,
                }}
              >
                <Ionicons
                  name={focused ? "person" : "person-outline"}
                  size={20}
                  color={color}
                />
              </View>
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

export default function Layout() {
  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <RootLayout />
      </SafeAreaView>
    </ThemeProvider>
  );
}
