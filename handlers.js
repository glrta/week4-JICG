const posts = [];
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

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
    })
}



module.exports = { postHandler, posts }

