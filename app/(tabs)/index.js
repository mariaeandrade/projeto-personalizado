import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const logo = require("../../assets/logo.png");

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.hero}>
          <Image
            source={logo}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.eyebrow}>Projeto Personalizado</Text>
          <Text style={styles.title}>Bem-vindo ao meu App </Text>
          <Text style={styles.description}>
           Projeto criado para ser usado de base nas aulas de mobile
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>O que pode ajudar</Text>
          <Text style={styles.cardItem}>• Estrutura de codigo</Text>
          <Text style={styles.cardItem}>• Cards e css</Text>
          <Text style={styles.cardItem}>• Abas e modal de exemplo</Text>
          <Text style={styles.cardItem}>• Scripts para Android, iOS e Web</Text>
        </View>

        <Link href="/modal" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Abrir modal de exemplo</Text>
          </Pressable>
        </Link>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#3d0042",
  },
  container: {
    flex: 1,
    padding: 24,
    gap: 20,
  },
  hero: {
    alignItems: "center",
    gap: 10,
    padding: 24,
    borderRadius: 24,
    backgroundColor: "#3d0042",
    borderWidth: 5,
    borderColor: '#ff96e5',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 4,
  },
  eyebrow: {
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#ff96e5",
    textAlign: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#ff96e5",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#ff96e5",
    textAlign: "center",
  },
  card: {
    gap: 8,
    padding: 20,
    borderRadius: 20,
 backgroundColor: "#3d0042",
    borderWidth: 5,
    borderColor: '#ff96e5',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#ff96e5",
  },
  cardItem: {
    fontSize: 15,
    color: "#663368",
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: "center",
     backgroundColor: "#3d0042",
    borderWidth: 5,
    borderColor: '#ff96e5',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ff96e5",
  },
});
