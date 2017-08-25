var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {

  var parsedUrl = url.parse(request.url);

  /*
    Your request handler should send listingData in the JSON format if a "GET" request 
    is sent to the '/listings' path. Otherwise, it should send a 404 error. 

    HINT: explore the request object and its properties 
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
   */
   if(request.method == "GET" && request.url =="/listings"){
	response.writeHead(200, {"Content-Type": "application/json"});
	response.write(listingData);
	response.end();
        response.statusCode = 200;
   }
   else{
	response.writeHead(404, {"Content-Type": "application/json"});
	response.write("Bad gateway error");
	response.end();
        response.statusCode = 404;
   }
};

fs.readFile('listings.json', 'utf8', function(err, data) {
  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 
   */

  if (err) throw err;
    listingData = data;
    //console.log(data);
});


// a server is created, but not started
var server = http.createServer(requestHandler);

// the server is now started, listening for requests on port 8080
server.listen(port);

console.log('Is the server started?');
