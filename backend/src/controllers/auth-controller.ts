import { Request, Response } from "express";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import db from '../config/db'

dotenv.config();

const secret = process.env.JWT_SECRET || "secretsecret";
//function to generate token
const generateToken = (id: number) => {
    return jwt.sign({id}, secret,{
        expiresIn:"7d"
    })
}

const handleSignup = async(req: Request, res: Response) => {
    //scan from the body
    const {username, email, password} = req.body;
    //check is the user exist in db
    const userExists = await db.query("SELECT * FROM users WHERE email = $1",[email]);
    if(userExists.rows.length > 0){
        return res.status(400).json({message: "User Exixts"})
    }
    //hash the password
    const hashedPassword = await bcrypt.hash(password,12);
    //store the new user
    const newUser = await db.query(
        "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email",
        [username, email, hashedPassword]
    )
    //scan the id and generate token from it
    const token = generateToken(newUser.rows[0].id);
    //return response on 201
    res.status(201).json({
        user:newUser.rows[0],
        token
    })
};


const handleLogin = async(req: Request, res: Response) => {
    const {email, password} = req.body;
    //find user from users table
    const result = await db.query("SELECT * FROM users WHERE email = $1",
        [email]
    );
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
    const token = generateToken(user.id);
    //return token in response
    res.json({
        user:{
            id: user.id,
            username:user.username,
            email:user.email
        },
        token
    })

};
export { handleSignup, handleLogin };