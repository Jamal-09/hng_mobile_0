import { StyleSheet } from "react-native";

export const themes = {
  light: {
    background: "#f9fafb",
    card: "#fff",
    text: "#111827",
    subtext: "#6b7280",
    accent: "#2563eb",
    border: "#e5e7eb",
  },
  dark: {
    background: "#0f172a",
    card: "#1e293b",
    text: "#f9fafb",
    subtext: "#94a3b8",
    accent: "#3b82f6",
    border: "#334155",
  },
};

export const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      padding: 20,
    },
    card: {
      backgroundColor: theme.card,
      borderRadius: 20,
      padding: 20,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 3,
    },
    title: {
      fontSize: 24,
      fontWeight: "700",
      color: theme.text,
    },
    subtitle: {
      fontSize: 16,
      color: theme.subtext,
      marginTop: 4,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "600",
      color: theme.text,
      marginVertical: 10,
    },
    text: {
      fontSize: 15,
      color: theme.text,
      lineHeight: 22,
    },
    tag: {
      backgroundColor: theme.accent + "20",
      color: theme.accent,
      paddingHorizontal: 10,
      paddingVertical: 6,
      borderRadius: 12,
      marginRight: 6,
      marginBottom: 6,
      fontWeight: "500",
    },
    input: {
      borderWidth: 1,
      borderColor: theme.border,
      backgroundColor: theme.card,
      color: theme.text,
      padding: 12,
      borderRadius: 10,
      marginBottom: 10,
    },
    button: {
      backgroundColor: theme.accent,
      borderRadius: 10,
      padding: 14,
      alignItems: "center",
      marginTop: 10,
    },
    buttonText: {
      color: "#fff",
      fontWeight: "600",
      fontSize: 16,
    },
  });
