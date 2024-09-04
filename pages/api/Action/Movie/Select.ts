import { NextApiRequest , NextApiResponse } from "next";
import { selectMovies } from "../../Controller/Moviecontroller";

export default async ( req: NextApiRequest , res: NextApiResponse) =>{
    if (req.method != 'GET') {
        return res.status(403).json ( {message: 'method not allowed' });
        
    }

    const response = await selectMovies();

    return res.status ( response.status).json( { message: response.message ,  data: response.data});
}