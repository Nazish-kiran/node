import express from "express";
import path from "path";

const router = express.Router();
const notFoundPagePath = path.join(import.meta.dirname,'../..', "public", "404.html");

router.get("/", (req, res) => {
  res.render("index", { percentage : '90%'});
});
router.get("/about/:username", (req, res) => {
  console.log(req.params);
  res.send(
    `<h1 style='font-family:cursive;'>About page of express by ${req.params.username} </h1>`
  );
});
router.get("/about/:username/article/:slug", (req, res) => {
  console.log(req.params);
  const formattedSlug = req.params.slug.replace(/-/g, " ");
  res.send(
    `<h1 style='font-family:cursive;'>About page of express by ${req.params.username} writting an article  on ${formattedSlug}</h1>`
  );
});

router.get("/contact", (req, res) => {
  res.send("<h1 style='font-family:cursive;'>Contact page of express </h1>");
});
router.get("/product", (req, res) => {
  res.send(
    `<h1 style='font-family:cursive;'> user searched for ${
      req.query.search || "nothing"
    }</h1>`
  );
});
router.use((req, res) => {
  res.status(404).sendFile(notFoundPagePath);
});

export default router;
