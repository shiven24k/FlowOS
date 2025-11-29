import { Client } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const connection = new Client({
  // user:process.env.DATABASE_USERNAME,
  // host:process.env.DATABASE_HOST,
  // database:process.env.DATABASE_DATABASE,
  // password:process.env.DATABASE_PASSWORD,
  connectionString: process.env.DATABASE_URL,
  // port: 5432,
});
//create
//read
//update
//delete
connection.connect().then(()=>console.log("Connected schema"));

export default connection