var _         = require('lodash'),
    express   = require('express'),
    app       = express(),
    mongoose  = require('mongoose');

app.set('views', __dirname + '/views');

var controller = {
  index : function(resourceName,req,res) {
    var resource = mongoose.model(resourceName);

    resource.find({}, function(err, docs){
      res.render('index',{
        resources : docs
      })
    });
  }
}

module.exports = function(routes) {
  _.forOwn(routes, function(modelName, route){
    // Setup routes for each resource
    // Index
    app.get(route, controller.index.bind(null, modelName));

    // New

    // Create

    // Show

    // Edit

    // Update

    // Delete
  });
  return app;
}