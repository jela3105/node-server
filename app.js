const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Disposition", "attachment; filename=list.csv");
  res.writeHead(200, { "Content-Type": "application/csv" });
  res.write("id, name");
  res.write("1, Chanchito feliz");
  res.write("2, Chanchito triste");
  res.write("3, Chanchito chancho");
  res.end();
});

server.listen(8080);

console.log("Listening in the port 8080");
