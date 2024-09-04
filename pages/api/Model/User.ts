<<<<<<< HEAD
import { prisma } from "@/db";

export async function createrusermodel( _name:string , _username:string , _email:string, _password:string , _cpf:string) {
=======
import { prisma } from "@/";

export async function createrusermodel( _name:string , _username:string , _password:string , _cpf:string) {
>>>>>>> 8e5925bf09abb680eb37ccb180a66bce81faa3e0
    const user= await prisma.user.create({ 
        data:{
            name: _name,
            username: _username,
<<<<<<< HEAD
            email: _email,
=======
>>>>>>> 8e5925bf09abb680eb37ccb180a66bce81faa3e0
            password: _password,
            cpf: _cpf
        }
    })
    return user;
}

export async function findusermodelbycpf (_cpf : string){
    const user = await prisma.user.findUnique({
        where : {
            cpf : _cpf
        }
        
    });

    return user;
}
export async function findusermodelbyusername (_name:string ){

    const user = await prisma.user.findUnique({
        where: {
            username : _name
        }
    
    });
    return user;
    
}
<<<<<<< HEAD
export async function findusermodelbylogin(_name:string, _password:string, _email:string) {
=======
export async function findusermodelbylogin(_name:string, _password:string) {
>>>>>>> 8e5925bf09abb680eb37ccb180a66bce81faa3e0

    const user = await prisma.user.findUnique ({

            where:{
                username: _name ,
<<<<<<< HEAD
                password: _password,
                email: _email
=======
                password: _password
>>>>>>> 8e5925bf09abb680eb37ccb180a66bce81faa3e0
            }
    
     })
     return user
}