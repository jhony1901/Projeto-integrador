import { prisma } from "@/db";

export async function createrusermodel( _name:string , _username:string , _email:string, _password:string , _cpf:string) {
    const user= await prisma.user.create({ 
        data:{
            name: _name,
            username: _username,
            email: _email,
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
export async function findusermodelbylogin(_name:string, _password:string, _email:string) {

    const user = await prisma.user.findUnique ({

            where:{
                username: _name ,
                password: _password,
                email: _email
            }
    
     })
     return user
}