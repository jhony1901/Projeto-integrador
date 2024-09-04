import {NextApiRequest , NextApiResponse} from "next";
import {createUser} from "../../Controller/Usercontroller";

export default async ( req : NextApiRequest, res : NextApiResponse) =>{

    if (req.method != 'POST'){
        return res.status(403).json({message : 'method not allowed'});
    }
    
    const { name , username, password ,confirmpassword ,cpf} = req.body;

    const response : any = await createUser(username , password ,confirmpassword ,cpf ,name );

    return res.status( response.status).json( {message : response.message});
}