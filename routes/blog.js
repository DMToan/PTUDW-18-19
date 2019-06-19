const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("blog");
});
router.get('/blog', (req, res) => {
    res.render("blog");
});

module.exports = router;