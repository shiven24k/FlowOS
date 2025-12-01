import { Client} from "pg";
import dotenv from "dotenv";
dotenv.config();

function connectDB() {
  const connection = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  try {
    connection.connect().then(() => console.log("Connected schema"));
  } catch (error) {
    console.log("error while connecting Db ", error);
  }
}

export default connectDB;
