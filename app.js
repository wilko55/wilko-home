var express = require('express');
var app = express();
var path = require('path');
app.set('port', (process.env.PORT || 7000));

app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(require('express-partial-templates')(app));

app.engine('html', require('hogan-express-strict'));

app.get('/', function(req,res, next) {
  res.render('home')
})

app.get('/projects', function(req,res, next) {
  res.render('projects')
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
