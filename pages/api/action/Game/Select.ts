import { NextApiRequest , NextApiResponse } from "next";
<<<<<<<< Updated upstream:pages/api/Action/Game/Select.ts
import { selectGame } from "../../Controller/GameController";
========
import { selectGame } from "../../Controller/Gamecontroller";
>>>>>>>> Stashed changes:pages/api/action/Game/Select.ts

export default async ( req: NextApiRequest , res: NextApiResponse) =>{
    if (req.method != 'GET') {
        return res.status(403).json ( {message: 'method not allowed' });
        
    }
<<<<<<<< Updated upstream:pages/api/Action/Game/Select.ts
========

>>>>>>>> Stashed changes:pages/api/action/Game/Select.ts
    const response = await selectGame();

    return res.status ( response.status).json( { message: response.message ,  data: response.data});
}
