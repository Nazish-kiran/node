import express from "express";
import { PORT } from "./env.js";
import router from "./src/routes/index.js";
const app = express();
app.set("view engine", "ejs");
app.use(router);
app.use(express.static("public"));

// const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
