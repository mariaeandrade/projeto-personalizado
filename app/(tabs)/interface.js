import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao app!</Text>
      <Text style={styles.subtitle}>
        Sua primeira interface em React Native
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3d0042",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#ff96e5",
  },
  subtitle: {
    fontSize: 22,
    color: "#ff96e5",
    marginTop: 8,
  },
});
