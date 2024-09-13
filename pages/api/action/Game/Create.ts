import { NextApiRequest , NextApiResponse } from "next";
import { createGame } from "../../Controller/Gamecontroller";




export default async ( req: NextApiRequest , res: NextApiResponse) =>{
    if (req.method != 'POST' ){
        return res.status(403).json( {message: 'method not allowed'});

    }
    
    const { name , description, releasedate ,developer,distributor, price , link , plataform, imageURL , videoURL, } = req.body

    console.log(req.body)
    const response = await createGame (  name , releasedate , description  , developer , distributor , price , link, plataform ,imageURL , videoURL );
  

    return res.status(response.status).json({message : response.message });
}