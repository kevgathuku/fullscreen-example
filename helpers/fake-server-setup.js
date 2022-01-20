let finalhandler = require("finalhandler");

let http = require("http");
let serveStatic = require("serve-static");

let serve = serveStatic(".", { index: ["index.html"] });

let server = http.createServer(function onRequest(req, res) {
  serve(req, res, finalhandler(req, res));
});

let port = 3002;

// Listen
server.listen(port, () => {
  console.log("Server listening on PORT:", port);
});