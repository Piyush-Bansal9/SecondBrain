import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config();
const jwt_secret = process.env.JWT_SECRET;

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers["authorization"];
    const decodedData = jwt.verify(token as string, jwt_secret as string)
    if(decodedData){
        //Override the types of express Request object.
        //@ts-ignore
        req.userID = decodedData.id ;
        next();
    }else{
        res.status(403).json({
            message: "You are not logged in!"
        })
    }
}