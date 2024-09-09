import { prisma } from "@/db";

export async function createMoviemodel( _name:string , _releasedate:string , _imageURL:string ,  _videoURL:string , _description:string ) {
    const movie = await prisma.Movie.create({ 
        data:{
            name: _name,
            releasedate: _releasedate,
            imageURL: _imageURL,
            videoURL: _videoURL,
            description: _description


        }
    })
    return movie;
}


export async function findmovieModelbyname (_name:string ){

    const movie = await prisma.Movie.findUnique({
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
    return movie;
    
}

export async function selectMoviesModel() {
    const movies = await prisma.Movie.findMany();

    return movies;
    
}