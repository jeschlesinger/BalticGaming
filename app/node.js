/**
 * Created by jeric on 05.04.2017.
 */
var express      =    require("express");
var https        =    require('https');
var http         =     require('http');
var app          =    express();
var fs = require('fs');
var fileName = './data/gamethreads.json';
var file = require(fileName);

var httpServer   = http.createServer(app);
var bodyParser = require('body-parser')


// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:63342');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(bodyParser.urlencoded({
    extended: true
}));



app.get("/postThread/:name", function (req, res) {
    var obj = {name:req.params.name}
    var json = fs.readFileSync('./data/gamethreads.json');
    var file = JSON.parse(json);

    file.push(obj);
    var configJSON = JSON.stringify(file);
    fs.writeFileSync('./data/gamethreads.json', configJSON);


});

httpServer.listen(3000);