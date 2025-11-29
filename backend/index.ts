import express from "express";
import cors from "cors";
import { Router } from "express";
import db from "./src/config/db"
import auth from "./src/routes/auth-routes";

const app = express();
const PORT = process.env.PORT || 8000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/api/auth",auth)
//Routes


app.get("/", (req, res) => {
  res.send("hey backend is working");
});

app.get("/get-db", async(req,res)=> {
  try {
    const result = await db.query("SELECT NOW()");
    res.json(result.rows[0]);
  }catch(error){
    console.log(error);
  }
})



app.listen(PORT, (err) => {
  console.log(`app is listening on ${PORT}`);
});
