const http = require("http");
const router = require("./router");

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3001;

http.createServer(router).listen(port, () => {
  console.log(`Listening on ${host}:${port}`);
});
