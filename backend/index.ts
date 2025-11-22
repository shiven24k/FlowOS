import express from "express";

const app = express();
const PORT = 8000;

app.listen(PORT, (err) => {
  console.log(`app is listening on ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("hey backend is working");
});
