const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("home/login");
});
router.get('/login', (req, res) => {
    res.render("home/login");
});
router.get('/register', (req, res) => {
    res.render("home/register");
});
router.get('/profile', (req, res) => {
    res.render("home/profile");
});
module.exports = router;