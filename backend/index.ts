import express from "express";
import cors from "cors";
import router from "./src/routes/routes";
import cookieParser from "cookie-parser";
import connectDB from "./src/config/db";
import authRoutes from "./src/routes/routes"

const app = express();
const PORT = process.env.PORT || 8000;

const allowedOrigin = "";

app.use(
  cors({
    origin: allowedOrigin,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api", router);
app.use("/api", authRoutes);


app.listen(PORT, (err) => {
  console.log(`app is listening on ${PORT}`);
});
