import { createGamemodel, findGameModelbyname,selectGameModel } from "../Model/Game";

export async function createGame(_name:string , _releaseDate:string ,_description = "", _developer:"", _distributor:"", _price:"", _link:"", _plataform:"", _imgURL = "" , _videoURL = "",  ) {
    try {
        // Verificar atributos ÚNICOS

        const GameByName = await findGameModelbyname(_name);

        if ( GameByName != undefined ) {
            return { status: 403 , message: 'Name already registered' };
        }

        const response = await createGamemodel(_name , _releaseDate , _description, _developer, _distributor, _price,_link , _plataform, _imgURL , _videoURL, );
     

        return { status: 201 , message:'Game created' , data: response };

    }
    catch (err) {
        return { status: 500 , message: 'Something went wrong' };
    }
}

export async function selectGame() {
    try {
        const Game = await selectGameModel();

        return { status: 200 , message: 'Select Games', data: Game }
    }
    catch (err) {
        return { status: 500 , message: 'Something went wrong' };
    }
}


export async function findGameByName(_name:string) {
    try {
        const GameByName = await findGameModelbyname(_name);

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