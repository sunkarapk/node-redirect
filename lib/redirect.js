var http = require('http')

// module.exports is a middleware
module.exports = function (config, port) {
  return http.createServer(function (req, res) {
    var url = config.host + req.url;

    res.statusCode = config.code;
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Location', url);
    res.end('Redirecting to '+url);
  }).listen(port);
}
