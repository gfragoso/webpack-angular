var app = angular.module('app', [
    'ui.router'
]);

var loader = require('./core/loader')(app);

//  configs
require('./app.routing')(app);

// loads services
loader.services();

// loads controllers
loader.controllers();

module.exports = app;
