
/*
 * GET home page.
 */
var path = require('path');

exports.index = function(req, res){
//    res.render('app1/templates/index', { title: 'Express' });

    res.render(path.join(__dirname, 'templates/index'), { title: 'Express' });

};
