<<<<<<< Updated upstream
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
=======

import {prisma } from '@/db'


export async function createRatingModel(_value:number , _coment:string , _userId:number , _movieId:number ) {
    const rating = await prisma.rating.create({
        data: {
            value: _value,
            coment: _coment,
            user: {
                connect: {
                    id: _userId
                }
            },
            movie:{
                connect:{
                    id: _movieId
>>>>>>> Stashed changes
                }
            }
        }
    })
    return rating;
<<<<<<< Updated upstream
    
=======
}

export async function findRatingUser(_userId:number, _movieId:number ) {
    const rating = await prisma.rating.findFirst({
        where: {
            userId: _userId,
            movieId: _movieId
        }
    })

    return rating;
}

export async function updateRating(_id:number , _value:number ,_comment:string) {
    const rating = await prisma.rating.update({
        where: {
            id:_id
        },
        data: {
            value: _value,
            coment: _comment
        }
    });

    return rating
>>>>>>> Stashed changes
}