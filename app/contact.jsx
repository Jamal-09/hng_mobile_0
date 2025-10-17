import { useTheme } from "@/components/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";
import React from "react";
import {
  KeyboardAvoidingView,
  Linking,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { createStyles, themes } from "./styles";

export default function Contact() {
  const { theme } = useTheme();
  const styles = createStyles(themes[theme]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView behavior="padding">
        <View
          style={{
            alignSelf: "flex-end",
            marginBottom: 20,
          }}
        >
          <ThemeToggle />
        </View>
        <Text style={styles.title}>Get in Touch ✉️</Text>

        <Text style={[styles.text, { marginTop: 10 }]}>
          Feel free to reach out via email or connect with me on social
          platforms below.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL("mailto:napg.adekunle.com")}
        >
          <Text style={styles.buttonText}>Email Me</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#0a66c2" }]}
          onPress={() =>
            Linking.openURL("https://linkedin.com/in/jamal-ademola-9b623236b")
          }
        >
          <Text style={styles.buttonText}>LinkedIn</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#333" }]}
          onPress={() => Linking.openURL("https://github.com/Jamal-09")}
        >
          <Text style={styles.buttonText}>GitHub</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Quick Message</Text>
        <TextInput
          placeholder="Your Name"
          style={styles.input}
          placeholderTextColor="#888"
        />
        <TextInput
          placeholder="Your Email"
          style={styles.input}
          placeholderTextColor="#888"
        />
        <TextInput
          placeholder="Your Message"
          multiline
          numberOfLines={4}
          style={[styles.input, { height: 100 }]}
          placeholderTextColor="#888"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
