
import { createGamemodel , findGamemodelbyname , selectGameModel} from "../Model/Game"

export async function createGame(_name:string , _releasedate:string , _imageURL:"" , _videoURL:"") {
    try {
        const gamebyname = await findGamemodelbyname(_name);
 
        if (gamebyname != undefined) {
            return{  status:403, message : "name already registered" }
        }

        const response = await createGamemodel( _name , _releasedate , _imageURL , _videoURL );

        return {status:201, message:'game registered', data:response };
    }
    catch(err){
        return { status:500, message: 'Something went wrong' };
    }
} 

export async function selectGame() {
    try{
        const Game =  await selectGameModel();
        return{ status : 200 , message : 'select Game ', data: Game }
    }
    catch (err){
        return { status:500, message: 'Something went wrong' };
    }   
    
}

export async function findGamemodelbyname(_name:string) {
    try{
        const Gamebyname = await findGamemodelbyname(_name);

        if (Gamebyname != undefined){
            return { status: 404 , message: 'game not found'};
        }
        else{
            return { status:200 , message : 'game found' , data: Gamebyname}; 
            
        }
        
    }
    catch(err) {
        return { status: 500 , message: 'Something went wrong'};
    }
}
    