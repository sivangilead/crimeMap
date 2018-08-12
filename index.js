var nodeStatic = require('node-static');
var file = new nodeStatic.Server('./dist');
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(process.env.PORT || 3000);