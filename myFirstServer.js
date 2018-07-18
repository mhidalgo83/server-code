var http = require("http");

var PORT1 = 8080;

var PORT2 = 7500;

function handleRequest1(request, response) {

    response.end("You smell well" + request.url);


}

function handleRequest2(request, response) {

    response.end("You smell like a diaper filled with indian food " + request.url);


}


var server1 = http.createServer(handleRequest1);

var server2 = http.createServer(handleRequest2);

server1.listen(PORT1, function () {

    console.log("server listening on port: " + PORT1);

});

server2.listen(PORT2, function () {

    console.log("server listening on port: " + PORT2);

});