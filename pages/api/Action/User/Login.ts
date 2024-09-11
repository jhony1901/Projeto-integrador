import {NextApiRequest , NextApiResponse} from "next";
import { login } from "../../Controller/Usercontroller";
export default async ( req : NextApiRequest, res : NextApiResponse) =>{

    if (req.method != 'POST'){
        return res.status(403).json({message : 'method not allowed'});
    }
   
    const{username , password} = req.body;

    const response = await login(username , password , email);


   // if (response.status == 200){
   //     return res.status(response.status).json({message : response.message , token : response.token });
    }
//    else{
//        return res.status( response.status ).json( { message: response.message});
 //   }
//}