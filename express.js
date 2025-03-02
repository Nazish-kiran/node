import express from "express";
import { PORT } from "./env.js";
import path from "path";
import { log } from "console";
const app = express();

app.use(express.static("public"));




// const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("server is running on port 4000");
});
