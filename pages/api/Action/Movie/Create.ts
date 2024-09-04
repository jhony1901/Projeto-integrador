import { NextApiRequest , NextApiResponse } from "next";
import { createmovie } from "../../Controller/Moviecontroller";



export default async ( req: NextApiRequest , res: NextApiResponse) =>{
    if (req.method != 'POST' ){
        return res.status(403).json( {message: 'method not allowed'});

    }
    
    const { name , releasedate , imageURL , videoURL, description} = req.body

    const response = await createmovie (  name , releasedate  , imageURL , videoURL , description , );

    return res.status(response.status).json({message : response.message });
}