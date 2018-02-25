var http = require("http"),
	fs = require("fs");


		http.createServer(function(req, res){
			fs.readFile("./index.html", function(err, html){
				//Transformo html en un string porque es un chunk
				var html_string = html.toString();

				var variables = html_string.match(/[^\{\}]+(?=\})/g);
				var nombre = "Coco";
				// variable ['nombre']
				for (var i = variables.length -1; i>= 0; i--) {
					var value = eval(variables[i]);
					html_string = html_string.replace("{" + variables[i] + "}", value);
				};
				res.writeHeader(200,{"Content-Type":"text/html"});
				//enviamos el string manipulado
				res.write(html_string);
				res.end();
			});
	}).listen(3000);