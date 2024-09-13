import { prisma } from "@/db";

<<<<<<< Updated upstream
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
=======
export async function createGamemodel( _name:string , _releasedate:String , _description:String , _developer:string , _destributor:string , _price:string , _link:string , _plataform:string , _image:string , _video:string) {
    const Game = await prisma.game.create({ 
            data: {
                name: _name,
                releasedate: _releasedate,
                description: _description,
                developer: _developer,
                destributor: _destributor,
                price: _price,
                link: _link,
                platform: _plataform,
                image: _image,
                video: _video
            }
        }
    )
    return ;
}


>>>>>>> Stashed changes
