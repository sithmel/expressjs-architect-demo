
/**
 * Module dependencies.
 */

var express = require('express'),
    http = require('http'),
    path = require('path');

module.exports = function setup(options, imports, register) {

    var expr = express();

    // all environments
    expr.set('port', options.port);
    expr.set('views', "/");
        
    expr.set('view engine', 'ejs');
    expr.use(express.favicon());
    expr.use(express.logger('dev'));
    expr.use(express.bodyParser());
    expr.use(express.methodOverride());
    expr.use(express.cookieParser('your secret here'));
    expr.use(express.session());
    expr.use(expr.router);

    // development only
    if ('development' == expr.get('env')) {
      expr.use(express.errorHandler());
    }

    http.createServer(expr).listen(expr.get('port'), function(){
      console.log('Express server listening on port ' + expr.get('port'));
    });

    // Warning!! I had to wrap the expr object in another object due to a bug in
    // architect 0.1.10
    // This is already fixed in the master:
    // https://github.com/c9/architect/commit/101cf53f58a5dac5e1c5aa7c9487a1afda630c4c
    
    register(null, {exp: {func: expr}});
};

