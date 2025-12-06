import { NextFunction, Request, Response } from "express";

const validateSignup = (req: Request, res: Response, next: NextFunction) => {
  const { username, email, password } = req.body;
  //basic validation
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  if (username.length < 6) {
    return res.status(400).json({ message: "Username Should be atleast 6 characters" });
  }
  if (password.length < 8) {
    return res.status(400).json({ message: "Password should be atleast 8 characters" });
  }
  next(); //important I guess, used to move to next middleware
};
const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  //basic validation
  if ( !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  if (email.length < 6) {
    return res.status(400).json({ message: "Username Should be atleast 6 characters" });
  }
  if (password.length < 8) {
    return res.status(400).json({ message: "Password should be atleast 8 characters" });
  }
  next(); //important I guess, used to move to next middleware
};

export {validateLogin, validateSignup };
