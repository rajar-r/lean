

var express = require('express');
var expressHbs = require('express-handlebars');
var bodyParser = require('body-parser')

var app = express();

var products = require('./routes/products');

// settings
app.set('port', process.env.PORT || 3000);

// view engine & main template
// app.engine('handlebars', expressHbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');


//
app.use(express.static('public'));

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
app.use(bodyParser.json())


app.use('/products', products);


//server
app.listen(app.get('port'), () => { console.log('Listening on http://localhost' + app.get('port')) });


