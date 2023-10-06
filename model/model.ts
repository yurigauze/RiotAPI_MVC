import axios from 'axios';

export interface Personagem {
    summonerName: string;
    rank: string;
    wins: number;
    losses: number;
    leaguePoints: number;
}

class ChampionModel {
    apiKey = 'RGAPI-87834469-ec3e-4cd6-9b82-029a21c6324d';

    async fetchChampionData() {
        try {
            const response = await axios.get(
                'https://br1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5',
                {
                    headers: {
                        'X-Riot-Token': this.apiKey,
                    },
                }
            );

            const championData = response.data;
            const personagens: Personagem[] = championData.entries.map(entry => {
                return {
                    summonerName: entry.summonerName,
                    rank: entry.rank,
                    wins: entry.wins,
                    losses: entry.losses,
                    leaguePoints: entry.leaguePoints,
                };
            });

            return personagens;
        } catch (error) {
            console.error('Erro ao buscar dados do campeão:', error);
            throw error;
        }
    }
}

export default ChampionModel;
