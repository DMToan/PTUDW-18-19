const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("hai-san/sea");
});
router.get('/sea', (req, res) => {
    res.render("hai-san/sea");
});
router.get('/tom-ca', (req, res) => {
    res.render("hai-san/tom-ca");
});
router.get('/cua-oc', (req, res) => {
    res.render("hai-san/cua-oc");
});
router.get('/mon-bien', (req, res) => {
    res.render("hai-san/mon-bien");
});
module.exports = router;