const http = require("http");

const server = http.createServer((req, res) => {
  const urlPath = req.url;
  if (urlPath === "/overview") {
    res.end('Welcome to the "overview page" of the nginX project');
  } else if (urlPath === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        emp_id: "nnhd3435",
        emp_name: "Pranay xxxxx",
      })
    );
  } else {
    res.end("Successfully started a server");
  }
});

server.listen(3000, () => {
  console.log("Listening for request");
});
