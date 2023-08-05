const http = require("http");
const fs = require("fs");
const path = require("path");
const home = require("./modules/Home");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const { url } = req;

  // Serve static files from the "assets" folder
  if (url.startsWith("/assets/")) {
    const filePath = path.join(__dirname, url);
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end("File not found");
      } else {
        const extname = path.extname(filePath);
        const contentType = getContentType(extname);
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
      }
    });
  } else {
    // Handle home.index function for other routes
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    home.index(req, res);
  }
});

function getContentType(extname) {
  switch (extname) {
    case ".html":
      return "text/html";
    case ".css":
      return "text/css";
    case ".js":
      return "text/javascript";
    case ".ico":
      return "image/x-icon";
    default:
      return "application/octet-stream";
  }
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
