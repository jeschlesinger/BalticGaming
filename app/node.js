/**
 * Created by jeric on 05.04.2017.
 */
var express      =    require("express");
var https        =    require('https');
var http         =     require('http');
var app          =    express();
var fs = require('fs');


var httpServer   = http.createServer(app);
var bodyParser = require('body-parser')

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:63342');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);

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