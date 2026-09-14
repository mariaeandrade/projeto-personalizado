import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

export default function Exemplo() {
    //logica aqui
    //usar api
    return (
    <View style={styles.container}>
            <Text style={styles.conteudo}> Estrutura padrão pra criação de telas</Text>
        </View>
    )
}


const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "#3d0042",
    justifyContent: "center",
    alignItems: "center",
    },
    conteudo: {
    fontSize: 20,
    justifyContent: "center",
    fontWeight: "800",
    color: "#ff96e5",
    }
    
})
