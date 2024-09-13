import { createRatingModel } from "../Model/Rating";
import { findUserModelbyUsername } from "../Model/User";
import { findGameModelbyname } from "../Model/Game";

export async function createRating(_value:number , _username:string , _Gamebyname:string , _coment = "") {
    try{
        const userByUsername = await findGameModelbyname(_username);

        if (userByUsername == undefined) {
            return { status: 404, message: 'User not found ' }
        }
        const Gamebyname = await findGameModelbyname(_Gamebyname)

        if (Gamebyname == undefined) { 
            return { status: 404, message: 'Game not found ' };
        }
        const response = await createRatingModel(_value , _coment , _userByUsername.id , Gamebyname.id);

        return { status: 200, message: 'Rating created', data: response };
    }
    

    catch (err) {
            return { status: 500, message: 'something went wronk' };
    }
}

