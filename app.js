const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  const person = {
    id: 1,
    name: "JELA",
  };
  res.write(JSON.stringify(person));
  res.end();
});

server.listen(8080);

console.log("Listening in the port 8080");
