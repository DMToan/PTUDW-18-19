var express = require('express');
var app = express();
const path = require('path'); 

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
app.use( express.static( "public" ) );
app.use(express.static(path.join(__dirname, '/public')));
//cau hinh ejs
app.set('view engine', 'ejs');

app.set('views', './views');

//routes
app.use('/',require('./routes/index'));
app.use('/user',require('./routes/user'));

app.use('/Farm',require('./routes/farm'));

app.use('/sea',require('./routes/sea'));

app.use('/writer',require('./routes/writer'));
