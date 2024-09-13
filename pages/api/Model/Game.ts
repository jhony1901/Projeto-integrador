import { prisma } from "@/db";

export async function createGamemodel( _name:string , _releasedate:string ,_description:string , _developer:string, _distributor:string, _price:string, _link:string, _plataform:string, _imageURL:string ,  _videoURL:string , ) {
    const Game = await prisma.game.create({ 
        data:{
            name: _name,
            releasedate: _releasedate,
            description: _description,
            developer: _developer,
            distributor:_distributor,
            price: _price,
            link: _link,
            platform: _plataform,
            image: _imageURL,
            video: _videoURL,
            


        }
    })
    return Game;
}


export async function findGameModelbyname (_name:string ){

    const Game = await prisma.game.findUnique({
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
    const Game = await prisma.game.findMany();

    return Game;
    
}
