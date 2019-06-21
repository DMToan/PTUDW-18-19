var express = require('express');
var bcrypt = require('bcrypt');
var moment = require('moment');
var passport = require('passport');
var userModel = require('../models/user.model');
var auth = require('../middlewares/auth');


const router = express.Router();
router.get('/', (req, res) => {
    res.render("home/login");
});
router.get('/login', (req, res) => {
    res.render("home/login");
});
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/user/login'
    })(req, res, next);
  });

router.get('/register', (req, res) => {
    res.render("home/register");
});
//register handle
router.post('/register', (req, res) => {
    const { FName, UName, PWord, PWord2, Email,job, 
            SDT, Address} = req.body;
    var errors = [];
    console.log(req.body.job);
    if( !FName || !UName || !PWord || !PWord2 || !Email || 
        !SDT || !Address ){
        errors.push({ msg: 'please fill in all fields' });
    }
    if(PWord !== PWord2){
        errors.push({ msg: 'Passwords do not match' });
    }
    if(PWord.length < 6){
        errors.push({ msg: 'Passwordsshould be at lease 6 charecters' });
    }
    if(errors.length > 0){
        res.render("home/register",{
            errors, FName, UName, PWord, PWord2, Email, 
            SDT, Address
        });
    }else{
        var saltRounds = 10;
        var hash = bcrypt.hashSync(req.body.PWord, saltRounds);
        var entity = {
        UName: req.body.UName,
        PWord: hash,
        FName: req.body.FName,
        Email: req.body.Email,
        Job: req.body.job,
        SDT: req.body.SDT,
        Address: req.body.Address
        }
        userModel.singleByUserName(entity.UName).then(rows => {
            if (rows.length > 0){
                errors.push({ msg: 'User name đã tồn tại' });
                res.render("home/register",{
                    errors, FName, UName, PWord, PWord2, Email, 
                    SDT, Address
                });
            }else{
                userModel.singleByEmail(entity.Email).then(rows => {
                    if (rows.length > 0){
                        errors.push({ msg: 'Email đã tồn tại' });
                        res.render("home/register",{
                            errors, FName, UName, PWord, PWord2, Email, 
                            SDT, Address
                        });
                    }else{
                        userModel.add(entity).then(id => {
                            res.redirect('/user/login');
                        })
                    }
                    
                });
            }
            
        });
    }
});

router.get('/profile', auth, (req, res) => {
    res.render("home/profile");
});

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
});
module.exports = router;