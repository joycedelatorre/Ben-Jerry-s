//Dependencies 
var express = require("express");
var exphbs = require("express-handlebars");

//create an instance of the express app
var app = express();
//specify the port
var port = 3000;

//set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(express.static("public"));

var ice_creams =[
	{iceCream:"Totally Baked!!!!!",
	 photo:"/images/1.png",
	 price:"$2.50",
	 awesomeness: "9/10"
	},
	{iceCream:"Coffee Coffee Buzz Buzz!!!",
	 photo:"/images/BuzzCoffee.png",
	 price:"$2.50",
	 awesomeness:"8/10"
	},
	{iceCream:"Chunky Monkey!!",
	 photo:"/images/monkeyChunky.png",
	 price:"$2.50",
	 awesomeness:"10/10"
	}
]

app.get ("/totally_baked", function(req, res){
	res.render("index", ice_creams[0]);
});

app.get("/Coffee", function(req, res){
	res.render("index", ice_creams[1]);
});

app.get("/chunky_monkey", function(req, res){
	res.render("index", ice_creams[2]);
});

app.get("/", function(req, res){
	res.render ("all-iceCreams",{
		ices:ice_creams,
		eater:"Ben & Jerry's"
	});
});

app.listen(port);
