var http = require('http');

// module.exports is a middleware
module.exports = function (redirects, port) {
  return http.createServer(function (req, res) {
    var requestHost = req.headers.host.split(':')[0];
    var redirect = redirects[requestHost];
    
    //if the host is not found in the configuration, we default to the catch all
    if(!redirect){
      redirect = redirects['*'];
    }
    
    if(redirect){
      var url = redirect.host + req.url;

      res.statusCode = redirect.code || 302;
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
