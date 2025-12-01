import { NextFunction, Request, Response } from "express";

const validateSignup = (req: Request, res: Response, next: NextFunction) => {
  const { username, email, password } = req.body;
  //basic validation
  if (!username || !email || !password) {
    return;
  }
  if (username.length < 6) {
    return;
  }
  if (password.length < 8) {
    return;
  }

};

export { validateSignup };
