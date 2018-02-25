var http = require("http"),
	fs = require("fs");


		http.createServer(function(req, res){
			fs.readFile("./index.html", function(err, html){
				res.writeHeader(200,{"Content-Type":"application/json"});
				res.write(JSON.stringify({nombre: "Uriel", username:"uriel"}));
				res.end();
			});
	}).listen(3000);


	