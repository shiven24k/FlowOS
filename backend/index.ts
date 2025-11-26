import express from "express";
import cors from "cors";
import { Router } from "express";
const app = express();
const PORT = process.env.PORT || 8000;

// Middlewares
app.use(cors({
  origin:'http://localhost:8000/', // we will change to specific after hosting
  credentials:true
}
));
app.use(express.json());
app.use(Router);


app.get("/", (req, res) => {
  res.send("hey backend is working");
});





app.listen(PORT, (err) => {
  console.log(`app is listening on ${PORT}`);
});
