import { NextApiRequest , NextApiResponse } from "next";




export default async ( req: NextApiRequest , res: NextApiResponse) =>{
    if (req.method != 'POST' ){
        return res.status(403).json( {message: 'method not allowed'});

    }
    
    const { name , releasedate , imageURL , videoURL, description} = req.body

}