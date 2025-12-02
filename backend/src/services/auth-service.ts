import db from "../config/db";
import jwt from "jsonwebtoken";

async function checkIfUserExists(email: string) {
  const userExists = await db.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  if (userExists.rows.length > 0) return;
}

const JWT_SECRET = process.env.JWT_SECRET || "secretsecret";

// const generateToken = (id:number) => {
//     return jwt.sign({id}, JWT_SECRET,{
//         expiresIn:"7d"
//     })
// }

// const generateAcesstoken = (id: number) => {
//   return jwt.sign(
//     {
//       id: id,
//     },
//     // env.ACCESS_TOKEN_SECRET,
//     {
//       expiresIn: "1hour",
//     }
//   );
// };

// const generateRefreshtoken = (id: number) => {
//   return jwt.sign(
//     {
//       id: id,
//     },
//     // env.Refresh_token_secret,
//     {
//       expiresIn: "7 days",
//     }
//   );
// };
