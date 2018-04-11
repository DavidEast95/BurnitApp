var express = require('express'),
    app= express(),
    port = process.env.PORT || 3000;

    mongoose = require('mongoose'),
    
    Product = require('./api/models/techniqueListModel'),
    
    bodyParser = require('body-parser');
    
    const cors = require('cors')
    app.use(cors());
    
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/Techniquedb');
    
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    
    var routes = require('./api/routes/techniqueListRoutes');
    
    routes(app);
    
    app.use(function (req, res){
        res.status(404).send({url: req.originalUrl + ' not found' })
    });

app.listen(port);

console.log('technique list RESTful API server started on: '+ port);
