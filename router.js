const templates = require("./templates");
const handlers = require("./handlers");

const router = (req, res) => {
  const url = req.url;
    if (url === "/" && req.method === "GET") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(templates.home());
    } else if (url.includes("public")) {
        handlers.publicHandler(req, res);
    } else if (url === "/" && req.method === "DELETE") {
        handlers.deleteHandler(req, res);
    } else if (url === "/write" && req.method === "GET") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(templates.write());
    } else if (url === "/write" && req.method === "POST") {
        handlers.postHandler(req, res);
    } else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end(templates.missing());
  }
};

module.exports = router;
