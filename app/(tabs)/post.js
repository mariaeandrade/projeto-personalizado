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

const API_KEY = "cv_sdyvb9lO24ESc0bRoG07rNAtsLbVQS8Vtc_Vw66iRAUqcO8-Oziey1zNLAP9w1D5";


const api = axios.create({
    baseURL: "https://api-ds.codeverse.dev.br",
    headers: {
        "x-api-key": API_KEY // passo pelo header a key da API
    }
});

//um usestate para cada info dos filmes e "enviado" para controlar a renderizacao da pagina

export default function FilmesCriarScreen() {
  const [titulo, setTitulo] = useState("");
  const [genero, setGenero] = useState("");
  const [ano, setAno] = useState("");
  const [imagemUrl, setImagemUrl] = useState("");
  const [diretor, setDiretor] = useState("");
  const [nota, setNota] = useState("");


  const [enviando, setEnviando] = useState(false);


  //valiacao no front, checa tds os campos vazios
  async function criarFilme() {
    if (!titulo || !genero || !ano ||!diretor ||!nota ) {
      Alert.alert("Preencha campos obrigatórios.");
      return;
    }
//coloca um limite pro titulo
    if (titulo.trim().length < 3 || titulo.trim().length > 120) {
      Alert.alert("O titulo deve ter entre 3 e 120 caracteres");
      return;
    }

    //converte ano e nota para numero
    const anoNum = Number(ano);
    const notaNum = Number(nota);

    //se n for numero, eh invalido
    if (isNaN(anoNum)) {
      Alert.alert("Ano invalido");
      return;
    }

      if (isNaN(notaNum)) {
      Alert.alert("Nota invalido");
      return;
    }

    //se a url n comecar com http n da certo
    const urlFinal = imagemUrl.trim().startsWith("http")
    ? imagemUrl.trim()
    :"https://via.placeholder.com/300";

  
    //envia o filme criado, se der certo mostra uma msg de sucesso se n  der da msg de erro
    setEnviando(true);
    try {
      const resposta = await api.post("/api/filmes", {
        title: titulo.trim(),
        imageUrl: urlFinal,
        diretor: diretor,
        genero: genero.trim(),
        ano: anoNum,
        nota: notaNum,
      });

      Alert.alert("Filme criado!", resposta.data.title);
      setTitulo("");
      setImagemUrl("");
      setDiretor("");
      setGenero("");
      setAno("");
      setNota("");
    } catch (e) {

      console.log("Erro ao criar filme", e.response?.data || e.message);
Alert.alert(
      "Não deu pra criar o filme",
      e.response?.data?.message || "A API respondeu com erro. Confere se todos os campos estão certinhos e tenta de novo."
    );    } finally {
      setEnviando(false);
    }
  }

  
    //renderiza td q foi feito acima

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
                <Text style={styles.rotulo}>Gênero</Text>
        <TextInput
          style={styles.campo}
          value={genero}
          onChangeText={setGenero}
          placeholder="Ex: Fantasia"
        />


        <Text style={styles.rotulo}>URL da imagem</Text>
        <TextInput
          style={styles.campo}
          value={imagemUrl}
          onChangeText={setImagemUrl}
          placeholder="Ex: /logo-white-semfundo.webp"
        />

          <Text style={styles.rotulo}>Diretor</Text>
        <TextInput
          style={styles.campo}
          value={diretor}
          onChangeText={setDiretor}
          placeholder="Ex:..."
        />

                  <Text style={styles.rotulo}>Ano de Lançamento</Text>
        <TextInput
          style={styles.campo}
          value={ano}
          onChangeText={setAno}
          placeholder="Ex:..."
        />

                  <Text style={styles.rotulo}>Nota</Text>
        <TextInput
          style={styles.campo}
          value={nota}
          onChangeText={setNota}
          placeholder="Ex:..."
        />

        //botao que confirma criacao do filme

        <Pressable style={styles.botao} onPress={criarFilme} disabled={enviando}>
          <Text style={styles.botaoTexto}>{enviando ? "Enviando..." : "Criar filme"}</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#3d0042'},
  conteudo: { padding: 24, paddingBottom: 48 },
  header: { marginBottom: 16 },
  tituloPagina: { fontSize: 24, fontWeight: "800", color: '#ff96e5' },
  subtitulo: { fontSize: 14, color: "#ff4dd6", marginTop: 2 },
  secao: {
    fontSize: 14,
    fontWeight: "700",
    color: '#ff4dd6',
    marginTop: 8,
    marginBottom: 8,
  },

  rotulo: { fontSize: 13, fontWeight: "600", color: '#ff4dd6', marginBottom: 4 },
  campo: {
    borderWidth: 1,
    borderColor:  '#ff96e5',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    backgroundColor: "white",
  },
  botao: {
    backgroundColor: '#ff4dd6',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  botaoTexto: { color: "ff4dd6", fontWeight: "700" },

});