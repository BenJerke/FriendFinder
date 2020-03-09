var express = require("express");
var path = require ("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("./app/public"));


require("./app/routing/htmlRoutes.js")(app);

require("./app/routing/apiRoutes.js")(app);




app.listen(PORT, function (){
    console.log("Uhhhhh, roger that. We read you Firewalker. Listening for input on port " +  PORT + ", over.")
})