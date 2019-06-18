const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("Nong-san/Farm");
});
router.get('/Farm', (req, res) => {
    res.render("Nong-san/Farm");
});
router.get('/mon-ngon', (req, res) => {
    res.render("Nong-san/mon-ngon");
});
router.get('/rau-cu', (req, res) => {
    res.render("Nong-san/rau-cu");
});
router.get('/trai-cay', (req, res) => {
    res.render("Nong-san/trai-cay");
});
module.exports = router;