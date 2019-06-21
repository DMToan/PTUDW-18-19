const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const flash = require('connect-flash');
const session = require('express-session'); 
const passport = require('passport');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;
app.listen(port, console.log('App listening on port'));

app.use( express.static( "public" ) );
app.use(express.static(path.join(__dirname, '/public')));

require('./middlewares/passport')(passport);

//cau hinh ejs
app.set('view engine', 'ejs');
app.set('views', './views');

// app.use(require('./middlewares/locals.mdw'));

// express body parser
app.use(express.urlencoded({ extended: false }))

// Express session
app.use(
	session({
	  secret: 'secret',
	  resave: true,
	  saveUninitialized: true
	})
);

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
	res.locals.User = req.user||null;
	console.log(req.user);
	next();
});

app.use(passport.initialize());
app.use(passport.session());

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
