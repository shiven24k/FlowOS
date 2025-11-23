import express from "express";
import { Router } from "express";
const app = express();
const PORT = 8000;


app.use(Router);




app.get("/", (req, res) => {
  res.send("hey backend is working");
});





app.listen(PORT, (err) => {
  console.log(`app is listening on ${PORT}`);
});
