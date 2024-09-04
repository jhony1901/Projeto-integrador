import jwt from "jsonwebtoken"

const SECRET = process.env.NEXT_PUBLIC_JWT_SECRET;

export function generatetoken(_username){
    return jwt.sign(  { username: _username}, SECRET);
}

function readtoken(token){
    try{
        return jwt.verify(token , SECRET);
    }
    catch(err){
        throw new ('Invalid token')
    }
}

export function checktoken(token){
    return readtoken(token);
}