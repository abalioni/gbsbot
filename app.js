/*eslint-env node*/
(function (){
  "use strict";
  require("dotenv").config({silent: true});

    var express = require('express'),
        cfenv = require('cfenv'),
        app = express(),
        appEnv = cfenv.getAppEnv(),
        engines = require('consolidate'),
        path = require('path'),
        fs = require('fs'),
        ejs = require('ejs'),
        cookieSession = require('cookie-session'),
        cookieParser = require("cookie-parser"),
        compress = require('compression'),
        morgan = require('morgan'),
        server = require('http').createServer(app),
        io = require('socket.io')(server),
        bodyParser = require('body-parser'),
        watsonCloud = require('watson-developer-cloud'),
        watsonConversation = watsonCloud.conversation(require("./server/configs/WatsonConversation")),
        request = require("request"),
        crypto = require("crypto");

        app.use(express['static'](path.join(__dirname, './server/public/')));
        app.use(express['static'](path.join(__dirname, './client/')));

        app.use(compress());
        app.use(morgan('dev'));

        app.use(cookieSession({
          secret: 'gbs-botSecretKey',
          maxAge: 1000000
        }));

        app.use(cookieParser());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());

        app.set('views', __dirname + '/client/views');
        app.engine('html', engines.ejs);
        app.set('view engine', 'html');

        require('./server/routes/index.js')(app, watsonConversation);




        server.listen(appEnv.port, '0.0.0.0', function () {
          console.log("server starting on " + appEnv.url);
        });

}());
