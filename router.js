const templates = require('./templates');
const postHandler = require("./handlers");

const router = (req,res) => {
    const url = req.url;
    if (url === "/"){
        res.writeHead(200, {"content-type":"text/html"});
        res.end(templates.home());
    }
    else if (url === "/write" && req.method === 'GET'){
        res.writeHead(200, {"content-type":"text/html"});
        res.end(templates.write());
    }
    else if (url === "/submit" && req.method === "POST"){
       postHandler(request, response);
    }
    else {
        res.writeHead(404, {"content-type" : "text/html"});
        res.end(templates.missing());
    }
};

module.exports = router;