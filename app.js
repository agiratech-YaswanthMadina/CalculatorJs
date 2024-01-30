const http = require("http");
function handlerequest(request, response){
  response.statusCode = 200;
  response.end(); 
}
const server = http.createServer(handlerequest);
server.listen(3000);