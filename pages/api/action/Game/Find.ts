import { NextApiRequest , NextApiResponse } from "next";
<<<<<<<< Updated upstream:pages/api/Action/Game/Find.ts
import { findGameModelbyname } from "../../Controller/GameController";

========
import { findGamebyname } from "../../Controller/Gamecontroller";
>>>>>>>> Stashed changes:pages/api/action/Game/Find.ts

export default async ( req: NextApiRequest , res: NextApiResponse ) => {
    if ( req.method != 'GET' ) {
        return res.status(403).json( { message: 'Method not allowed' } );
    }

    const { name }:any = req.query;
<<<<<<<< Updated upstream:pages/api/Action/Game/Find.ts
========
    
    // Criar o usuário - Chamar controller
    const response = await findGamebyname(name);
>>>>>>>> Stashed changes:pages/api/action/Game/Find.ts

    // Criar o usuário - Chamar controller

    const response = await findGameModelbyname(name);

    if ( response.status = 200){
        return res.status ( response.status).json ({ message: response.message , data: response.data} );

    }
    else{
        return res.status (response.status).json({ message: response.message})
    }
}