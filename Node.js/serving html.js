const http= require ('http');
const js= require ('fs');

const fileContent= fs.readFileSync('index.html');
const server= http.createServer((req,res)=> {
  res.writeHead(200,('content-type','text/html'));
  res.end(fileContent);
  });
  
  server.listen(80,'127.0.0.1',()=> {
    console.log("Listing on port 80")
  })