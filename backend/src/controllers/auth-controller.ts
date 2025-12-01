import { Request, Response } from "express";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import db from '../config/db'

dotenv.config();

const handleSignup = async(req: Request, res: Response) => {
    const {username, email, password} = req.body;

    const hashedPassword = await bcrypt.hash(password,12);

    // const newUser = await db.query(
    //     "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email",
    //     [username, email, hashedPassword]
    // )
    // const token = generateToken(newUser.rows[0].id);
    // res.status(201).json({
    //     user:newUser.rows[0],
    //     token
    // })
};


const handleLogin = async(req: Request, res: Response) => {
    const {email, password} = req.body;
    //find user from users table
    // const result = await db.query("SELECT * FROM users WHERE email = $1",
    //     [email]
    // );
    // //to check null
    // if (result.rows.length === 0) {
    //     return res.status(400).json({ message: "Invalid credentials" });
    // }
    // const user = result.rows[0];
    // //password
    // const isPasswordValidated = await bcrypt.compare(password,user.password);
    // if(!isPasswordValidated){
    //     return res.status(400).json({message:"Invalid credentials"});
    // }
    // const token = generateToken(user.id);
    // //return token in response
    // res.json({
    //     user:{
    //         id: user.id,
    //         username:user.username,
    //         email:user.email
    //     },
    //     token
    // })

};
export { handleSignup, handleLogin };