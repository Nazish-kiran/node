import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1 style='font-family:cursive;'>home page of node </h1>");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("server is running on port 3000");
});
