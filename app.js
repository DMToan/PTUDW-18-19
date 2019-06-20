const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session'); 

const app = express();
const path = require('path');

const port = process.env.PORT || 3000;
app.listen(port, console.log('App listening on port'));

app.use( express.static( "public" ) );
app.use(express.static(path.join(__dirname, '/public')));
//cau hinh ejs
app.set('view engine', 'ejs');
app.set('views', './views');
// express body parser
app.use(express.urlencoded({ extended: false }))
//routes
app.use('/',require('./routes/index'));
app.use('/user',require('./routes/user'));

app.use('/Farm',require('./routes/farm'));

app.use('/sea',require('./routes/sea'));

app.use('/writer',require('./routes/writer'));

app.use('/admin',require('./routes/admin'));

app.use('/blog',require('./routes/blog'));

app.get('/about', (req, res) => {
    res.render("home/about",{User:2});
});
app.get('/contract', (req, res) => {
    res.render("home/contract",{User:2});
});
