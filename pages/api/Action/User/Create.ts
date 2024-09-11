import {NextApiRequest , NextApiResponse} from "next";
import {createUser} from "../../Controller/Usercontroller";

export default async ( req : NextApiRequest, res : NextApiResponse) =>{

    if (req.method != 'POST'){
        return res.status(403).json({message : 'method not allowed'});
    }
    
    const { name , username, password ,email,confirmpassword ,cpf} = req.body;

<<<<<<< HEAD
    const response : any = await createUser(username , password ,confirmpassword , email ,cpf ,name );
=======
    const response : any = await createUser(username , password ,email ,confirmpassword , cpf ,name );
>>>>>>> 8ee33406e610535eb247b3928141f0a5f6bcd18a

    return res.status( response.status).json( {message : response.message});
}