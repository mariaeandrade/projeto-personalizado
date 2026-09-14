import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function ModalScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.description}>
          Acesse os aplicativos  pelos links abaixo:
        </Text>


        <View style={styles.linksContainer}>
          <Link href="/aulas" style={styles.botao}>
            <Text style={styles.texto}>Aulas</Text>
          </Link>

          <Link href="/interface" style={styles.botao}>
            <Text style={styles.texto}>Interface</Text>
          </Link>

          <Link href="/exemplo" style={styles.botao}>
            <Text style={styles.texto}>Exemplo</Text>
          </Link>

          <Link href="/sobre" style={styles.botao}>
            <Text style={styles.texto}>Sobre</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f3f7ff",
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    gap: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#102542",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#334e68",
    marginBottom: 8,
  },
  linksContainer: {
    gap: 12,
  },
  botao: {
    backgroundColor: "#3d0042",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  texto: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});