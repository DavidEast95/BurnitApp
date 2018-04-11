// David - schema used for RESTful api from MongoDB
'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var techniqueSchema = new Schema({
    
    
    techniqueName: {
        type: String,
        Required: 'technique name cannot be left blank.'
    },
    Instructions: {
        type: String,
        Required: 'Instructions cannot be left blank.'
    },
    time: {
        type: Number,
        default: 0
    },
    starRating: {
        type: Number,
        default: 0
    }, 
    imageUrl: {
        type: String,
        Required: 'Image URL cannot be left blank.'
    }
});
    
module.exports = mongoose.model('Techniques', techniqueSchema);
    