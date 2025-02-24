import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("<h1 style='font-family:cursive;'>home page of express </h1>");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("server is running on port 4000");
})