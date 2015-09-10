var express = require('express'),
    fs = require('fs'),
    passport = require('./server/config/passport'),
    app = express();

fs.readdirSync(__dirname + '/server/routes').forEach(function(file) {
        console.log(file)
        var name = file.substr(0, file.indexOf('.'));
        require('./server/routes/' + name)(app);
      });

app.set('view engine', 'ejs');
app.set('views', __dirname + '/server/views');

app.listen(3002);