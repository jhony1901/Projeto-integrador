import { NextApiRequest , NextApiResponse } from "next";
import { selectGame } from "../../Controller/GameController";

export default async ( req: NextApiRequest , res: NextApiResponse) =>{
    if (req.method != 'GET') {
        return res.status(403).json ( {message: 'method not allowed' });
        
    }
    const response = await selectGame();

    return res.status ( response.status).json( { message: response.message ,  data: response.data});
}
