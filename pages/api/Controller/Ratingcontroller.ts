<<<<<<< Updated upstream
import { createRatingModel } from "../Model/Rating";
import { findUserModelbyUsername } from "../Model/User";
import { findGameModelbyname } from "../Model/Game";

export async function createRating(_value:number , _username:string , _Gamebyname:string , _coment = "") {
    try{
        const userByUsername = await findGameModelbyname(_username);
=======

import { createRatingModel , findRatingUser, updateRating } from "../Model/Rating";
import { findusermodelbyusername } from "../Model/User";
import { findmoviemodelbyname } from "../Model/Game";

export async function createRating(_value: number, _username: string, _moviename: string, _coment = "") {
    try {
        const userByUsername = await findusermodelbyusername(_username);
>>>>>>> Stashed changes

        if (userByUsername == undefined) {
            return { status: 404, message: 'User not found ' }
        }
<<<<<<< Updated upstream
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

=======
        const movieByname = await findmoviemodelbyname(_moviename)

        if (movieByname == undefined) {
            return { status: 404, message: 'Movie not found ' };
        }
        const ratingByUser = await findRatingUser(userByUsername.id, movieByname.id);

        if (ratingByUser != undefined) {
            const updating = await updateRating(ratingByUser.id , _value, _coment);


            return { status:200, message: 'Rating update' , data:updating};
        }


        const response = await createRatingModel(_value, _coment, userByUsername.id, movieByname.id);

        return { status: 200, message: 'Rating created', data: response };

    }
    catch (err) {
        return { status: 500, message: 'something went wronk' };
    }
}
>>>>>>> Stashed changes
