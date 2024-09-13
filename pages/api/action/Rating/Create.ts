import { createRating } from "@/pages/api/Controller/Ratingcontroller";
import { NextApiRequest , NextApiResponse } from "next";


export default async ( req: NextApiRequest , res: NextApiResponse) =>{
    if ( req.method != 'POST') {
        return res.status(403).json( { message: 'mothod not allowed'});

    }

    const { value , comment , username , moviename,} = req.body;

    const response = await createRating(value , username , moviename , comment);

    return res.status ( response.status).json( {message : response.message});
}