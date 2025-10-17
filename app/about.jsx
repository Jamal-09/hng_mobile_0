import { useTheme } from "@/components/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { createStyles, themes } from "./styles";

export default function About() {
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
      <Text style={[styles.title, { textAlign: "center" }]}>About Me 👋</Text>
      <Text style={[styles.text, { marginTop: 10 }]}>
        I’m a passionate developer who loves turning ideas into reality through
        clean, elegant, and performant code. My goal is to build impactful
        products that deliver great user experiences and solve real-world
        problems.
      </Text>

      <Text style={styles.sectionTitle}>Core Values</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {["Simplicity", "Performance", "User Focus", "Continuous Learning"].map(
          (tech) => (
            <Text key={tech} style={styles.tag}>
              {tech}
            </Text>
          )
        )}
      </View>
      <Text style={styles.sectionTitle}>Tech Stack</Text>
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
        ].map((tech) => (
          <Text key={tech} style={styles.tag}>
            {tech}
          </Text>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Soft skills</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {[
          "Quick learner",
          "Fast paced",
          "Team worker",
          "Versatile",
          "Problem solver",
        ].map((tech) => (
          <Text key={tech} style={styles.tag}>
            {tech}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}
