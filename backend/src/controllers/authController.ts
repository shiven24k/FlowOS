import { Request, Response } from "express";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import db from "../config/db";
import { env } from '../../env';

dotenv.config();

const ACCESS_TOKEN = env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN = env.REFRESH_TOKEN_SECRET;

function createAccessToken(userId: string) {
  return jwt.sign({ sub: userId }, ACCESS_TOKEN, { expiresIn: "1hr" });
}

function createRefreshToken(userId: string) {
  return jwt.sign({ sub: userId }, REFRESH_TOKEN, { expiresIn: "7d" });
}

const handleSignup = async(req: Request, res: Response) => {
    const {username, email, password} = req.body;
    try{
        const userExists = await db.query("SELECT * FROM users WHERE email = $1",[email]);
        if(userExists.rows.length > 0){
            return res.status(400).json({message:"User already exists"});
        }

        const hashedPassword = await bcrypt.hash(password,12);

        const newUser = await db.query(
            "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email",
            [username, email, hashedPassword]
        )
        const userId = newUser.rows[0].id;

        // const accessToken = createAccessToken(userId);
        // const refreshToken = createRefreshToken(userId);
        
        // // Store refresh token in database
        // await db.query("UPDATE users SET refreshtoken = $1 WHERE id = $2",[refreshToken,userId]);

        // // Set access token in cookies
        // res.cookie("session_token", accessToken, {
        //     httpOnly: true,
        //     secure: false,
        //     maxAge: 15 * 60 * 1000, //15 min
        // })
        res.status(201).json({
            user: newUser.rows[0],
            // refreshToken,
            message: "Signup Succeed"
        })
    }catch(error){
        console.error(error),
        res.status(500).json({message: "Signup Error"})
    }

};


const handleLogin = async(req: Request, res: Response) => {
    const {email, password} = req.body;
    try{
        // find user from users table
        const result = await db.query("SELECT * FROM users WHERE email = $1",[email]);
        //to check null
        if (result.rows.length === 0) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const user = result.rows[0];
        //password
        const isPasswordValidated = await bcrypt.compare(password,user.password);
        if(!isPasswordValidated){
            return res.status(400).json({message:"Invalid credentials"});
        }
        // const accessToken = createAccessToken(user.id);
        // const refreshToken = createRefreshToken(user.id);
        
        // res.cookie("session_token", accessToken, {
        //     httpOnly: true,
        //     secure: false,
        //     maxAge: 15 * 60 * 1000, //15 min
        // })
        
        //return token in response
        res.json({
            user:{
                id: user.id,
                username:user.username,
                email:user.email
            },
            // refreshToken,
            message: "Login Succeed"
        })


    }catch(error){
        console.error(error),
        res.status(500).json({message: "Login Error"})
    }

};
export { handleSignup, handleLogin };