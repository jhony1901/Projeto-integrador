import { NextApiRequest , NextApiResponse } from "next";
import { findGameModelbyname } from "../../Controller/GameController
import { findGamebyname } from "../../Controller/Gamecontroller";


export default async ( req: NextApiRequest , res: NextApiResponse ) => {
    if ( req.method != 'GET' ) {
        return res.status(403).json( { message: 'Method not allowed' } );
    }

    const { name }:any = req.query;

    
    // Criar o usuário - Chamar controller
    const response = await findGamebyname(name);

    // Criar o usuário - Chamar controller

    const response = await findGameModelbyname(name);

    if ( response.status = 200){
        return res.status ( response.status).json ({ message: response.message , data: response.data} );

    }
    else{
        return res.status (response.status).json({ message: response.message})
    }
}