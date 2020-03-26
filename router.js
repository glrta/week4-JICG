const templates = require("./templates");

const router = (req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(templates.home());
  } else if (url === "/write" && req.method === "GET") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(templates.write());
  } else if (url === "/submit" && req.method === "POST") {
    let body = "";
    req.on("data", chunk => (body += chunk.toString()));
    req.on("end", () => {
      res.writeHead(302, { "content-type": "text/html" });
      res.end(templates.home());
    });
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end(templates.missing());
  }
};

module.exports = router;
