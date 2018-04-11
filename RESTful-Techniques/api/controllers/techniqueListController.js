
'use strict';

var mongoose = require('mongoose'),
Technique = mongoose.model('Techniques');


exports.list_all_techniques = function(req, res) {
    Technique.find({}, function(err, technique){
        if (err)
        res.send(err);
        res.json(recipe);
    });
};


exports.create_a_technique = function(req, res) {
    
    var new_technique = new Technique(req.body);
    
    new_technique.save(function(err, technique) {
        if(err)
       res.send(err)
       res.json(technique);
    });
    console.log("New Technique: "+ new_technique);
};

exports.read_a_technique = function(req, res) {
    var techniqueId = req.query.techniqueId;

    Technique.findbyId(mongoose.Types.ObjectId(techniqueId), function(err, technique) {
        if(err)
       res.send(err)
       res.json(technique);
    });
};

exports.update_a_technique = function(req, res) {

    var id = mongoose.Types.ObjectId(req.query.techniqueId);

    Technique.findOneAndUpdate({_id:id},req.body,
    {new:true},function(err, technique) {
        if(err)
       res.send(err)
       res.json(technique);
    });
};

exports.delete_a_technique = function(req, res) {
    var id = mongoose.Types.ObjectId(req.query.techniqueId);

    Technique.remove({ _Id:id}, 
        function(err, technique) {
        if(err)
       res.send(err)
       res.json({ message: 'Technique successfully deleted' });
    });
};
