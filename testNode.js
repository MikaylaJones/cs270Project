var express = require("express");
var app = express();

/* static pages
app.use(express.static("."));

app.listen(8080, function() {
    console.log("Started...")



});
*/

app.get("/greet", function(req, res) {
    res.write("Hello World");
    res.end();
});