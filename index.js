var http = require('http')
var fs = require('fs')
http.createServer(function(req, res){
	switch (req.url) {
		case '/getPassword':
		res.end(JSON.stringify({Password:123}))
		break;
	default:
		res.end( fs.readFileSync(__dirname +'/sample/test.html'))
	}
}).listen(8080)


