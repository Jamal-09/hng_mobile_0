import me from "@/assets/images/me.jpg";
import { useTheme } from "@/components/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { createStyles, themes } from "./styles";

export default function Home() {
  const { theme } = useTheme();

  const styles = createStyles(themes[theme]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View
        style={{
          alignSelf: "flex-end",
          marginBottom: 20,
        }}
      >
        <ThemeToggle />
      </View>
      <View style={[styles.card, { alignItems: "center" }]}>
        <Image
          source={me}
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            marginBottom: 15,
          }}
        />
        <Text style={styles.title}>Ademola Jamal</Text>
        <Text style={styles.subtitle}>Full-stack | Mobile Developer</Text>
      </View>

      <View style={{ marginTop: 25 }}>
        <Text style={styles.sectionTitle}>Top Skills</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "React Native",
            "TailwindCSS",
            "MongoDB",
            "Express",
            "Node.js",
          ].map((skill) => (
            <Text key={skill} style={styles.tag}>
              {skill}
            </Text>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Experience</Text>
        <Text style={styles.text}>
          3+ years building mobile and web applications 🚀
        </Text>
      </View>
    </ScrollView>
  );
}
