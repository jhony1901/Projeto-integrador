import { NextApiRequest , NextApiResponse } from "next";
import { createGame } from "../../Controller/Gamecontroller";




export default async ( req: NextApiRequest , res: NextApiResponse) =>{
    if (req.method != 'POST' ){
        return res.status(403).json( {message: 'method not allowed'});

    }
    
    const { name , description, releasedate ,developer,destributor, price , link , plataform, imageURL , videoURL, } = req.body

    const response = await creatGame (  name , description ,  releasedate  , developer , destributor , price , link, plataform ,imageURL , videoURL ,   );

    return res.status(response.status).json({message : response.message });
}