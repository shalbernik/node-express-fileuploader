var http = require("http");

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fileUpload = require('express-fileupload');
var commonRouter = require('./routes/common');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use((req, res, next) => {
    console.log('[STEP 1] CORS Allowed');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    if (req.method === 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './temp/'
}));

app.use('/', commonRouter);

var server = http.createServer(app);

server.listen(5000);

server.on('error', (e) => {
    console.log('Error starting server' + e);
});

server.on('listening', () => {
    console.log('Server started on port ' + 5000);
});


