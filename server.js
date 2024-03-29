var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var path = require('path')

var router =  express.Router();

var appRoute = require('./app/routes.js')(router);
var Grid = require('gridfs-stream')
var fs = require('fs')
var image = path.join(__dirname,'./public/images/moon.png')
var mongoose = require('mongoose');
const expressip = require('express-ip');




//var config = require('./config');



var database = require('./config/database');

Grid.mongo = mongoose.mongo;
var port = process.env.PORT || 8081;

mongoose.connect(database.url, function(err){

    if(err){

        console.log("Not connected to the database: " +err)

    }else{
      /*  var gfs = Grid(mongoose.connection.db)
        var writestream = gfs.createWriteStream({
            filename: 'profileImage.png'
        })
        fs.createReadStream(image).pipe(writestream)
        writestream.on('close',function(file){
            console.log(file.filename+" written to db.")
        })*/
        global.gridfs = mongooseGridFS({
            collection: 'Attachments',
            model: 'Attachment',
            mongooseConnection: mongoose.connection
          });
            const Attachment = global.gridfs.model
        console.log("Successfully connected to Mlab/MongoDb @ "+ database.url)

    }

})

app.use(express.static(__dirname+'/public'));

app.use(bodyParser.urlencoded({ 'extended': 'true' }));            // parse application/x-www-form-urlencoded

app.use(bodyParser.json());   

app.use('/api',appRoute)

app.use(expressip().getIpInfoMiddleware);

app.get('*', function (req, res) {



    res.sendFile(path.join(__dirname + '/public/index.html')); // this might need to be lower than the routes..
    //console.log(req.ipInfo,'12')
   var ip = req.connection.remoteAddress;
        console.log(ip)
        console.log(ip.slice(7) )
    

});

require('./app/routes.js')(app);

app.listen(port);

console.log("App listening on port : " + port);