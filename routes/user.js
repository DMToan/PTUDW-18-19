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

module.exports = router;