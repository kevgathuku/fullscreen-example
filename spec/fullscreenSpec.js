let finalhandler = require("finalhandler");
let http = require("http");
let serveStatic = require("serve-static");

describe("Fullscreen API support", () => {
  beforeAll((done) => {
    let serve = serveStatic(".", { index: ["index.html"] });
    let server = http.createServer(function onRequest(req, res) {
      serve(req, res, finalhandler(req, res));
    });
    let port = 3002;

    // Listen
    server.listen(port, () => {
      console.log("Server listening on PORT:", port);
    });
  });

  describe("when supported by the browser", () => {
    it("shows the full screen button", () => {
      expect(document.querySelectorAll("#toggle-button").length).toBe(1);
    });
  });
  describe("when not supported by the browser", () => {});
});