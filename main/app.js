
/**
 * Module dependencies.
 */

var path = require('path'),
    architect = require('architect'),
    architect_config = architect.loadConfig(path.join(__dirname, 'plugins.json'));
  
var arch = architect.createApp(architect_config, function (){
    console.log('application started');
});

arch.on("error", function (err){
    console.log(err);
});
