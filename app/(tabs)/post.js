import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

const API_KEY = "cv_hAfaSH2ToKc3BIlrb5DzbhIxkuxkaFqE8hsebUCpO8tznOq-rE_LHVTbz_-Nl8jB"


const api = axios.create({
    baseURL: "https://api-ds.codeverse.dev.br",
    headers: {
        "x-api-key": API_KEY // passo pelo header a key da API
    }
});

export default function HeroisCriarScreen() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState("");
  const [imagemUrl, setImagemUrl] = useState("");
  const [diretor, setDiretor] = useState("");
  const [duracaoMinutos, setDuracaoMinutos] = useState("");
  const [genero, setGenero] = useState("");

  const [enviando, setEnviando] = useState(false);

  async function criarFilme() {
    if (!titulo) {
      Alert.alert("Preencha pelo menos o título.");
      return;
    }

    setEnviando(true);
    try {
      const resposta = await api.post("/api/herois", {
        title: titulo,
        description: descricao,
        status: status,
        imageUrl: imagemUrl,
        diretor: diretor,
        duracaoMinutos: duracaoMinutos,
        grupo_principal: genero,
      });

      Alert.alert("Filme criado!", resposta.data.title);
      setTitulo("");
      setDescricao("");
      setImagemUrl("");
      setDiretor("");
      setDuracaoMinutos("");
      setGenero("");
    } catch (e) {
      Alert.alert(
        "Não deu pra criar o filme",
        "A API respondeu com erro. Confere se todos os campos estão certinhos e tenta de novo."
      );
    } finally {
      setEnviando(false);
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        <View style={styles.header}>
          <Text style={styles.tituloPagina}>Criar filme</Text>
          <Text style={styles.subtitulo}>POST /api/filmes</Text>
        </View>

        <Text style={styles.rotulo}>Título</Text>
        <TextInput
          style={styles.campo}
          value={titulo}
          onChangeText={setTitulo}
          placeholder="Ex: Harry Potter"
        />

        <Text style={styles.rotulo}>Descrição</Text>
        <TextInput
          style={styles.campo}
          value={descricao}
          onChangeText={setDescricao}
          placeholder="Ex:..."
        />

         <Text style={styles.rotulo}>Status</Text>
        <TextInput
          style={styles.campo}
          value={status}
          onChangeText={setStatus}
          placeholder="Ex: Lançado"
        />

        <Text style={styles.rotulo}>URL da imagem</Text>
        <TextInput
          style={styles.campo}
          value={imagemUrl}
          onChangeText={setImagemUrl}
          placeholder="Ex: /logo-white-semfundo.webp"
        />

          <Text style={styles.rotulo}>diretor</Text>
        <TextInput
          style={styles.campo}
          value={diretor}
          onChangeText={setDiretor}
          placeholder="Ex:..."
        />

    
        <Text style={styles.rotulo}>Duração</Text>
        <TextInput
          style={styles.campo}
          value={duracaoMinutos}
          onChangeText={setDuracaoMinutos}
          placeholder="Ex: ..."
        />

        <Text style={styles.rotulo}>Categoria</Text>
        <TextInput
          style={styles.campo}
          value={genero}
          onChangeText={setGenero}
          placeholder="Ex: Terror"
        />

        <Pressable style={styles.botao} onPress={criarFilme} disabled={enviando}>
          <Text style={styles.botaoTexto}>{enviando ? "Enviando..." : "Criar filme"}</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#e3efff'},
  conteudo: { padding: 24, paddingBottom: 48 },
  header: { marginBottom: 16 },
  tituloPagina: { fontSize: 24, fontWeight: "800", color: '#5fb7ff' },
  subtitulo: { fontSize: 14, color: "#5f6b7a", marginTop: 2 },
  secao: {
    fontSize: 14,
    fontWeight: "700",
    color: '#5fb7ff',
    marginTop: 8,
    marginBottom: 8,
  },

  rotulo: { fontSize: 13, fontWeight: "600", color: '#ffc4db', marginBottom: 4 },
  campo: {
    borderWidth: 1,
    borderColor:  '#fdfcce',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    backgroundColor: "white",
  },
  botao: {
    backgroundColor: '#5fb7ff',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  botaoTexto: { color: "white", fontWeight: "700" },
});