//Dependencies 
var express = require("express");
var exphbs = require("express-handlebars");

//create an instance of the express app
var app = express();
//specify the port
var port = 3000;

//set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({defaultLayout: main}));
app.set("view engine", "handlebars");


var ice_creams =[
	{iceCream:"Totally Baked"},
	{iceCream:"Coffee Coffee Buzz Buzz"},
	{iceCream:"chunky Monkey"}
]

app.get ("/totally_baked", function(req, res){
	res.render("index", ice_creams[0]);
});

app.get("/Coffee", function(req, res){
	res.render("index", ice_creams[1]);
});

app.get("/chunky_monkey", function(req, res){
	res.render ("all-iceCreams"{
		ices:ice_creams,
		eater:"Joyce"
	});
});

app.listen(port);
