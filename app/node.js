/**
 * Created by jeric on 05.04.2017.
 */
var express = require("express");
var https = require('https');
var http = require('http');
var app = express();
var fs = require('fs');


var httpServer = http.createServer(app);
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


app.get("/postThread/:name/:desc/:image", function (req, res) {
    var temp = req.params.image;
    //temp=decodeURIComponent(temp)
    console.log(req.params.name);
    console.log(temp);
    console.log(req.params.image);
    var obj = {name: req.params.name, img: temp, description: req.params.desc}
    var json = fs.readFileSync('./data/gamethreads.json');
    var file = JSON.parse(json);
    file.push(obj);
    var configJSON = JSON.stringify(file);
    fs.writeFileSync('./data/gamethreads.json', configJSON);


});
app.get("/updateThread/:name/:desc/:image", function (req, res) {

    //var obj = {name:req.params.name, img:temp , description:req.params.desc}
    var json = fs.readFileSync('./data/gamethreads.json');

    var file = JSON.parse(json);
    console.log(file.length)
    for (var i = 0; i < file.length; i++) {

        if (file[i].name==req.params.name) {
            file[i].img = req.params.image;
            file[i].description = req.params.desc;

            break;
        }

    }

    var configJSON = JSON.stringify(file);
    fs.writeFileSync('./data/gamethreads.json', configJSON);


});
app.get("/deleteThread/:name", function (req, res) {

    //var obj = {name:req.params.name, img:temp , description:req.params.desc}
    var json = fs.readFileSync('./data/gamethreads.json');

    var file = JSON.parse(json);
    console.log(file.length)
    var temp;
    for (var i = 0; i < file.length; i++) {

        if (file[i].name==req.params.name) {
            temp=i;
            break;
        }

    }
    file.splice(temp, 1)

    var configJSON = JSON.stringify(file);
    fs.writeFileSync('./data/gamethreads.json', configJSON);


});
console.log("Server running...")
httpServer.listen(3434);