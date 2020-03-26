const posts = []

const postHandler = (req, res) => {
    let body = "";
    req.on("data", chunk => data += chunk)
    req.on("end", () => {
        const blogPost = new URLSearchParams(body)
        console.log(blogPost)
        res.writeHead(302, {"content-type":"text/html"});
        res.end(templates.home());
});


}
module.exports = postHandler;