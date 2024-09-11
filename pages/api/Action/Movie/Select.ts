import { NextApiRequest , NextApiResponse } from "next";

export default async ( req: NextApiRequest , res: NextApiResponse) =>{
    if (req.method != 'GET') {
        return res.status(403).json ( {message: 'method not allowed' });
        
    }
}