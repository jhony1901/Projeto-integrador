import { prisma } from "@/db";


export async function createRatingModel(_value:number ,_coment:string ,_userId:number ,_GameId:number) {
    const rating = await prisma.rating.create({
        data: {
            value: _value,
            coment: _coment
            User: {
                connect: {
                    id: _userId
                }
            }
            Game:{
                connect: {
                    id: _GameId
                }
            }
        }
    })
    return rating;
    
}