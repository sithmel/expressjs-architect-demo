
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path');

//require('./enableMultipleViewRoots')(express); // patch express for using
                                               // multiple view path

module.exports = function setup(options, imports, register) {

    var expr = express();

    // all environments
    expr.set('port', options.port);
//    expr.set('views', path.join(__dirname, '..'));
    expr.set('views', "/");
        
    expr.set('view engine', 'ejs');
    expr.use(express.favicon());
    expr.use(express.logger('dev'));
    expr.use(express.bodyParser());
    expr.use(express.methodOverride());
    expr.use(express.cookieParser('your secret here'));
    expr.use(express.session());
    expr.use(expr.router);
    //expr.use(express.static(path.join(__dirname, 'public')));

    // development only
    if ('development' == expr.get('env')) {
      expr.use(express.errorHandler());
    }

    http.createServer(expr).listen(expr.get('port'), function(){
      console.log('Express server listening on port ' + expr.get('port'));
    });

    register(null, {exp: {func: expr}});
};

