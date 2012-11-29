var http = require('http')

function getHostOfRequest(req){
  var requestHost = req.headers.host;
  if(requestHost){
    var indexOfColon = requestHost.indexOf(':');
    if(indexOfColon>0){
      requestHost = requestHost.substr(0,requestHost.indexOf(':'));
    }
  }
  return requestHost;
}

// module.exports is a middleware
module.exports = function (redirects, port) {
  return http.createServer(function (req, res) {
    var requestHost = getHostOfRequest(req);
    var redirect = redirects[requestHost];
    
    //if the host is not found in the configuration, we default to the catch all
    if(!redirect){
      redirect = redirects['*'];
    }
    
    if(redirect){
      var url = redirect.host + req.url;

      res.statusCode = redirect.code;
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Location', url);
      res.end('Redirecting to '+url);
    }else{
    	//their is no catch all, we will just show an error message
    	res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Host not found');
    }
    
  }).listen(port);
}
