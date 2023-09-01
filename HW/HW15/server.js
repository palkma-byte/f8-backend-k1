const http = require("http");
const fs = require("fs");
const url = require("url");
const formidable = require("formidable");

const hostname = "127.0.0.1";
const port = 3000;

let tasks = []; 

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);

  if (parsedUrl.pathname === "/todo") {
    if (req.method === "POST") {
      const form = new formidable.IncomingForm();

      form.parse(req, (err, fields, files) => {
        if (err) {
          console.error("Error parsing form:", err);
          return;
        }

        let taskText = fields.task; 

       
        if (!taskText) {
          taskText = "Empty task";
        }

       
        const randomTwoDigitNumber = Math.floor(Math.random() * 90) + 10;

        const taskId = taskText === "Empty task" ? `${randomTwoDigitNumber}-Empty` : Math.floor(10000 + Math.random() * 90000);

        tasks.push({
          id: taskId,
          text: taskText,
          completed: false,
        });

        
        res.writeHead(302, {
          Location: "/todo",
          "Set-Cookie": `tasks=${JSON.stringify(tasks)}`,
        });

        res.end();
      });
    } else {
      const data = fs.readFileSync("./views/todo.html", "utf8");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  } else if (parsedUrl.pathname === "/tutorial") {
    const data = fs.readFileSync("./views/tutorial.html", "utf8");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  } else if (parsedUrl.pathname === "/") {
    const data = fs.readFileSync("./views/home.html", "utf8");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
