var http = require("http");  
fs = require('fs');
http.createServer(function(request, response) {  
    console.log('request received');  
    response.writeHead(200, {"Content-Type": "text/plain"});  
    response.write("He111orld111111111111111111");  
    start(response);
    response.end();  
}).listen(8888);  

console.log('server started');
 
function start(response) {
	response.writeHead(200, {"Content-Type": "text/html"});
	response.end(fs.readFileSync(__dirname + "/index.html"));
}