const fs = require("fs");
const path = require("path");
const templates = require("./templates")
const posts = [];
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const types = {
  css: "text/css",
  js: "application/javascript",
  ico: "image/x-icon",
};

function postHandler(req, res){
    let body = "";
    req.on("data", chunk => { body += chunk
    });
    req.on("end", () => {
        const blogPost = new URLSearchParams(body)
        const postObject = Object.fromEntries(blogPost); 
        const date = new Date();
        postObject.date = date.toLocaleTimeString('en-GB', options) 
        posts.unshift(postObject)
        res.writeHead(302, {"content-type":"text/html", location: '/'});
        res.end();
    });
    req.on('error', err => {
      console.log(err)
    });
  }
    
function publicHandler(request, response) {
  const url = request.url;
  const urlArray = url.split(".");
  const extension = urlArray[1];
  const type = types[extension];

  const filePath = path.join(__dirname, url);
      fs.readFile(filePath, (error, file) => {
        if (error) {
          console.log(error);
          response.writeHead(404, { "content-type": "text/html" });
          response.end("<h1>Not found</h1>");
        } else {
          response.writeHead(200, { "content-type": type });
          response.end(file);
        }
      });
  }

function deleteHandler(req, res) {
  let index = "";
    req.on("data", chunk => {index += chunk});
    req.on("end", () =>{
      posts.splice(parseInt(index), 1);   
      res.writeHead(200, {"content-type":"text/html"});
      res.end();
    });
    req.on('error', err => {
        console.log(err)
      });
}

module.exports = { postHandler, posts, publicHandler, deleteHandler }

