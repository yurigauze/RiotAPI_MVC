import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ChampionController from "../controller/controller";

class ChampionInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            championData: null,
        };
    }

    championController = new ChampionController();

    fetchChampionData = async () => {
        try {
            const championData = await this.championController.getChampionData();
            this.setState({ championData });
            console.log(championData);
        } catch (error) {
            console.error('Erro ao buscar dados do campeão:', error);
        }
    };

    render() {
        return (
            <View>
                <Button title="Buscar Dados da fila RANKED_SOLO_5x5" onPress={this.fetchChampionData} />
                {this.state.championData && (
                    <View>
                        {this.state.championData.map((champion, index) => (
                            <View style={styles.championContainer} key={index}>
                                <View style={styles.championInfo}>
                                    <Text>Nome: {champion.summonerName}</Text>
                                    <Text>Rank: {champion.rank}</Text>
                                    <Text>Vitórias: {champion.wins}</Text>
                                    <Text>Derrotas: {champion.losses}</Text>
                                    <Text>Pontos da Liga: {champion.leaguePoints}</Text>
                                </View>
                                <View style={styles.divider}></View>
                            </View>

                        ))}
                    </View>
                )}
            </View>
        );
    }

    
}
const styles = StyleSheet.create({
    championContainer: {
        marginBottom: 10, // Espaçamento inferior entre campeões
        borderBottomWidth: 1, // Largura da borda inferior
        borderBottomColor: '#ccc', // Cor da borda inferior (linha de separação)
    },
    championInfo: {
        backgroundColor: '#f0f0f0', // Cor de fundo da caixa de informações
        padding: 10, // Espaçamento interno para o conteúdo
        borderRadius: 5, // Cantos arredondados da caixa de informações
    },
    divider: {
        height: 1, // Altura da linha de separação
        backgroundColor: '#ccc', // Cor da linha de separação
    },
    // Outros estilos podem ser adicionados aqui
});

export default ChampionInfo;
