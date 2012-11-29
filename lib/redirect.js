var http = require('http')

// module.exports is a middleware
module.exports = function (redirects, port) {
  return http.createServer(function (req, res) {
    var url = redirects.host + req.url;

    res.statusCode = redirects.code;
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Location', url);
    res.end('Redirecting to '+url);
  }).listen(port);
}
