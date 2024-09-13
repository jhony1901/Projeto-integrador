import { prisma } from "@/db";

export async function createGamemodel( _name:string , _releasedate:string , _imageURL:string ,  _videoURL:string , _description:string ) {
    const Game = await prisma.Game.create({ 
        data:{
            name: _name,
            releasedate: _releasedate,
            imageURL: _imageURL,
            videoURL: _videoURL,
            description: _description


        }
    })
    return Game;
}


export async function findGameModelbyname (_name:string ){

    const Game = await prisma.Game.findUnique({
        where: {
            name : _name
        },
        include:{
            ratings :{
                include:{
                    user: true
                }
            }
        }
    
    });
    return Game;
    
}

export async function selectGameModel() {
    const Game = await prisma.Game.findMany();

    return Game;
    
}