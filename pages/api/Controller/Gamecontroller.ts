import { createGameModel , findGameModelByName, selectGamesModel } from "../Model/Game";

export async function createGame(_name:string , _releaseDate:string , _imgURL = "" , _videoURL = "",  _description = "") {
    try {
        // Verificar atributos ÚNICOS

        const GameByName = await findGameModelByName(_name);

        if ( GameByName != undefined ) {
            return { status: 403 , message: 'Name already registered' };
        }

        const response = await createGameModel(_name , _releaseDate , _imgURL , _videoURL, _description);

        return { status: 201 , message:'Game created' , data: response };

    }
    catch (err) {
        return { status: 500 , message: 'Something went wrong' };
    }
}

export async function selectGames() {
    try {
        const Games = await selectGamesModel();

        return { status: 200 , message: 'Select Games', data: Games }
    }
    catch (err) {
        return { status: 500 , message: 'Something went wrong' };
    }
}


export async function findGameByName(_name:string) {
    try {
        const GameByName = await findGameModelByName(_name);

        if ( GameByName == undefined ) {
            return { status: 404, message: 'Game not found' };
        }
        else {
            return { status: 200, message: 'Game found', data: GameByName };
        }
        
    }
    catch (err) {
        return { status: 500 , message: 'Something went wrong' };
    }
}