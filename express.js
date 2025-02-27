import express from "express";
import { PORT } from "./env.js";
import path from "path";
import { log } from "console";
const app = express();

app.use(express.static("public"));

const homePagePath = path.join(import.meta.dirname, "public", "index.html");

app.get("/", (req, res) => {
  res.sendFile(homePagePath);
});
app.get("/about/:username", (req, res) => {
  console.log(req.params);
  res.send(
    `<h1 style='font-family:cursive;'>About page of express by ${req.params.username} </h1>`
  );
});
app.get("/about/:username/article/:slug", (req, res) => {
  console.log(req.params);
  const formattedSlug = req.params.slug.replace(/-/g , " ")
  res.send(
    `<h1 style='font-family:cursive;'>About page of express by ${req.params.username} writting an article  on ${formattedSlug}</h1>`
  );
});

app.get("/contact", (req, res) => {
  res.send("<h1 style='font-family:cursive;'>Contact page of express </h1>");
});
app.get("/product", (req, res) => {
  res.send(`<h1 style='font-family:cursive;'> user searched for ${req.query.search}</h1>`);
});
// const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("server is running on port 4000");
});
