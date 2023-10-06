import ChampionModel from "../model/model";


class ChampionController {

    championModel = new ChampionModel(); 

    async getChampionData() {
        try {
            const championData = await this.championModel.fetchChampionData();
            return championData;
        } catch (error) {
            throw error;
        }
    }
}

export default ChampionController;
