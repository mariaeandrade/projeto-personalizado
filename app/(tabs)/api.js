//importa as hooks e componentes

import { React, useState, useEffect } from "react"
import { View, Text, Image, ActivityIndicator, StyleSheet, ScrollView } from "react-native"
import axios from "axios" // lib usada pra fazer chamadas HTTP para API
import { SafeAreaView } from "react-native-safe-area-context" // evita que conteudo fique embaixo do notch/barra do celular


//config url base do projeto
const API_KEY = "cv_sdyvb9lO24ESc0bRoG07rNAtsLbVQS8Vtc_Vw66iRAUqcO8-Oziey1zNLAP9w1D5";


const api = axios.create({
    baseURL: "https://api-ds.codeverse.dev.br",
    headers: {
        "x-api-key": API_KEY // passo pelo header a key da API
    }
})

//auxilia o encaixe da imagem no celular
async function resolverImageUrl(url) {
    if (!url || typeof url !== "string") return null

    const urlNormalizada = url.includes("commons.wikimedia.org/wiki/Special:FilePath/")
        ? url.replace(/ /g, "_")
        : url

    try {
        const resposta = await fetch(urlNormalizada, { method: "HEAD" })
        return resposta?.url || urlNormalizada
    } catch (error) {
        console.log("Nao foi possivel resolver a URL da imagem:", urlNormalizada)
        return urlNormalizada
    }
}


export default function FilmesListarScreen() {
    const [filmes, setFilmes] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState(null)

    //busca o filme com a imagem resolvida, se nao funcionar, mostra mensagem de erro 
    async function buscarFilmes() {
        setCarregando(true)
        setErro(null)
        try {
            const resposta = await api.get("/api/filmes", {
                params: { limit: 50 }
            })
            const filmesComImagemResolvida = await Promise.all(
                resposta.data.data.map(async (filme) => ({
                    ...filme,
                    imageUrl: await resolverImageUrl(filme.imageUrl)
                }))
            )
            setFilmes(filmesComImagemResolvida)
        } catch (error) {
            setErro("Não foi possivel carregar filmes")
        } finally {
            setCarregando(false)
        }
    }

    useEffect(() => {
        buscarFilmes()
    }, [])


    //renderiza td q foi feito acima
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.conteudo}>
                <View style={styles.header}>
                    <Text style={styles.tituloPagina}>Listar filmes</Text>
                    <Text style={styles.subtitulo}>GET /api/filmes</Text>
                </View>

                {carregando && <ActivityIndicator style={{ marginVertical: 16 }} />}

                {erro && <Text style={styles.erro}>{erro}</Text>}

                {!carregando &&
                    filmes.map((filme) => (
                        <View key={filme.id} style={styles.card}>
                            <Image source={{ uri: filme.imageUrl }} height={64} width={64} style={styles.imagem} />
                            
                            <View style={styles.info}>
                                <Text style={styles.titulo}>{filme.title}</Text>
                                <Text style={styles.categoria}>{filme.genero}</Text>
                                  <Text style={styles.director}>Diretor: {filme.diretor}</Text>
                                   <Text style={styles.duracao}>nota {filme.nota}</Text>
                                    <Text style={styles.ano}>Ano: {filme.ano}</Text>
                            </View>
                        </View>
                    ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { 
        flex: 1, 
        backgroundColor: '#3d0042' 
    }, // ocupa a tela toda, cor de fundo clara
    
    conteudo: { 
        padding: 24, 
        paddingBottom: 48 
    }, // respiro nas bordas do conteúdo
    
    header: { 
        marginBottom: 16 
    }, // espaço abaixo do cabeçalho
    
    tituloPagina: { 
        fontSize: 24, 
        fontWeight: "800", 
        color: '#ff96e5' 
    }, // título grande e escuro
    
    subtitulo: { 
        fontSize: 14, 
        color: "#ff4dd6" , 
        marginTop: 2 
    }, // texto menor e mais claro, abaixo do título

    erro: { 
        color: '#ff96e5', 
        marginTop: 12 
    }, // texto de erro em vermelho
    
    card: {
        flexDirection: "row", // imagem e texto lado a lado
        gap: 12, // espaço entre imagem e texto
        marginTop: 12, // espaço entre um card e outro
        backgroundColor: '#ffc5f1',
        borderRadius: 10, // cantos arredondados
        overflow: "hidden", // corta a imagem nos cantos arredondados do card
    },

    imagem: { 
        width: 64, 
        height: 64,
        margin: 20
    }, // tamanho fixo da foto do filme
    
    info: { 
        flex: 1, 
        justifyContent: "center", 
        paddingRight: 12,
    }, // ocupa o espaço que sobra ao lado da imagem
    
    titulo: { 
        fontSize: 16, 
        fontWeight: "700" 
    }, // nome do filme em destaque
    
    categoria: { 
        fontSize: 13, 
        color: "#ff4dd6" 
    }, // categoria/ano em cinza, menor
});