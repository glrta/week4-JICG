const http = require("http");
const router = require("./router");

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3001;

http.createServer(router).listen(port, host, () => {
  console.log(`Listening on ${host}:${port}`);
});
