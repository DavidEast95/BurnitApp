// David
'use strict';

module.exports = function(app){
    var techniqueList = require('../controllers/techniqueListController');
        

    //recipesList Routes
    app.route('/technique')
        .get(techniqueList.list_all_techniques)
        .post(techniqueList.create_a_technique);

    app.route('/technique/:techniqueId')
        .get(techniqueList.read_a_technique)
        .put(techniqueList.update_a_technique)
        .delete(techniqueList.delete_a_technique);
};