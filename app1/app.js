var express = require('express')
  , routes = require('./views')
  , user = require('./views/user')
  , path = require('path');

module.exports = function setup(options, imports, register) {
    console.log('app1 initialized');
    
    var app = imports.exp.func;

    app.use(express.static(path.join(__dirname, 'public')));
    app.get('/', routes.index);
    app.get('/users', user.list);

    register();
};

