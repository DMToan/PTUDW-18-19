const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("admin/home");
});
router.get('/home', (req, res) => {
    res.render("admin/home");
});
router.get('/nguoi-dung', (req, res) => {
    res.render("admin/nguoi-dung");
});
router.get('/chuyen-muc', (req, res) => {
    res.render("admin/chuyen-muc");
});
router.get('/tag', (req, res) => {
    res.render("admin/tag");
});
router.get('/blog', (req, res) => {
    res.render("admin/blog");
});
module.exports = router;