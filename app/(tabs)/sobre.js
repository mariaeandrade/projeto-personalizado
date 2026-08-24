import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function App() {
    return (

        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>

            <StatusBar style="auto" />

            <View style={styles.header}>
                <Text style={styles.headerTitle}> Meu Perfil</Text>
                <Text style={styles.headerSubtitle}>
                    {' '}
                    Seja Bem-Vindo. Conheça mais sobre mim abaixo.
                </Text>
            </View>

            <View style={styles.cardOne}>
                <Image source={require('../../assets/eu.png')} style={styles.fotoPerfil} />

                <Text style={styles.nome}> Maria Eduarda de Andrade</Text>
                <Text style={styles.infos}> Profissional</Text>

                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.iconContainer}
                        onPress={() => Linking.openURL('https://github.com/mariaeandrade')}>
                        <AntDesign name="github" size={24} color="#eea1e3" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.iconContainer}
                        onPress={() => Linking.openURL('https://github.com/mariaeandrade')}>
                        <AntDesign name="linkedin" size={24} color="#eea1e3" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.iconContainer}
                        onPress={() => Linking.openURL('mailto:maria.e.andrade17@aluno.senai.br')}>
                        <MaterialIcons name="email" size={24} color="#eea1e3" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.cardTwo}>
                <Image source={require('../../assets/cecilia.png')} style={styles.fotoPerfil} />

                <Text style={styles.nome}> Duda</Text>
                <Text style={styles.infos}> Pessoal </Text>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.iconContainer}
                        onPress={() => Linking.openURL('https://www.instagram.com/dudsandrsde')}>
                        <AntDesign name="instagram" size={24} color="#eea1e3" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.iconContainer}
                        onPress={() => Linking.openURL('https://x.com/blondedpvt')}>
                        <AntDesign name="twitter" size={24} color="#eea1e3" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.containerBotao}>
                <TouchableOpacity
                    style={styles.primeiroBotao}
                    onPress={() => alert('Portifolios disponiveis em breve')}>
                    <Text style={styles.primeiroBotaoText}> Ver portifolio</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.segundoBotao}
                    onPress={() => alert('Mensagem enviada')}>
                    <Text style={styles.segundoBotaoText}> Enviar Mensagem</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#3d0042',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        paddingTop: 15,
        paddingBottom: 15,

    },
    header: {
        alignItems: 'center',
        backgroundColor: '#7c7c7c',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 20,
        width: '90%',
        backgroundColor: '#3d0042',
        borderWidth: 5,
        borderColor: '#ff96e5',
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#f1b2e8',
    },
    headerSubtitle: {
        fontSize: 15,
        color: '#f7cdf0',
        marginTop: 2,
    },
    cardOne: {
        borderRadius: 30,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#3d0042',
        borderWidth: 5,
        borderColor: '#ff96e5',
    },
    cardTwo: {
        borderRadius: 30,
        padding: 20,
        paddingLeft: 100,
        paddingRight: 100,
        alignItems: 'center',
        backgroundColor: '#3d0042',
        borderWidth: 5,
        borderColor: '#ff96e5',
    },
    fotoPerfil: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    nome: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#eea1e3',
    },
    infos: {
        fontSize: 16,
        color: '#eea1e3',
        marginBottom: 30,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
    },
    iconContainer: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerBotao: {
        flexDirection: 'row',
        gap: 12,
        justifyContent: 'center',
        width: '100%',
    },
    primeiroBotao: {
        backgroundColor: '#ff96e5',
        paddingVertical: 12,
        paddingHorizontal: 22,
        borderRadius: 25,
    },
    primeiroBotaoText: {
        color: '#3d0042',
        fontWeight: 'bold',
        fontSize: 14,
    },
    segundoBotao: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#ff96e5',
        paddingVertical: 10,
        paddingHorizontal: 22,
        borderRadius: 25,
    },
    segundoBotaoText: {
        color: '#ff96e5',
        fontWeight: 'bold',
        fontSize: 14,
    },
});
