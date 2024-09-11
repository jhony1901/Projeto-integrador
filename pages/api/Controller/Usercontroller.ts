
<<<<<<< HEAD

=======
>>>>>>> 8ee33406e610535eb247b3928141f0a5f6bcd18a
import {createrusermodel , findusermodelbycpf, findusermodelbyusername , findusermodelbylogin}  from "../Model/User";
import { generatetoken } from "../../../Services/TokenConfig";


<<<<<<< HEAD
export async function createUser(_username:string , _email:string, _password:string , _confirmPassword:string , _cpf:string , _name = "") {
=======
export async function createUser(_username:string , _password:string , _email:string, _confirmPassword:string , _cpf:string , _name = "") {
>>>>>>> 8ee33406e610535eb247b3928141f0a5f6bcd18a
    // Realizar verificações em atributos Únicos das tabelas.
    // Verificar se os valores já estão cadastrados no banco de dados
    try {
        if( _password != _confirmPassword ) {
            return { status:400, message: 'Passwords dont match' };
        }

        //Verificar username e cpf
        const userbycpf = await findusermodelbycpf(_cpf);

        if (userbycpf != undefined ) {
            return{ status:403, message : "cpf already registered"};
        }
        const userbyname = await findusermodelbyusername(_name);

        if (userbyname != undefined) {
            return{ status:403, message : "username already registered"};
        }

<<<<<<< HEAD
        const response = await createrusermodel( _name , _username , _email , _password , _cpf );
=======
        const response = await createrusermodel( _name , _username ,_email, _password , _cpf );
>>>>>>> 8ee33406e610535eb247b3928141f0a5f6bcd18a

        return {status:201, message:'User registered', data:response  };

    }
    catch(err) {
        return { status:500, message: 'Something went wrong' };
    }
}


<<<<<<< HEAD
export async function login(_username: string , _password: string , _email:string){
    try{

        const userlogin = await findusermodelbylogin(_username , _password ,_email );
=======
export async function login(_username: string , _password: string, _email:string ){
    try{

        const userlogin = await findusermodelbylogin(_username , _password , _email );
>>>>>>> 8ee33406e610535eb247b3928141f0a5f6bcd18a

        if (userlogin == undefined){
            return {status: 404, message: 'incorrect username or password' };


        }
        else {
            const _token = generatetoken(_username)
            return { status : 200, message :'loggin in' , token: _token}
        }

    }
    catch(err){
        return { status:500, message: 'Something went wrong' };
    
    }
}