const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("writer/myPage");
});
router.get('/mypage', (req, res) => {
    res.render("writer/myPage");
});
router.get('/cxb', (req, res) => {
    res.render("writer/cxb");
});
router.get('/cpd', (req, res) => {
    res.render("writer/cpd");
});
router.get('/btc', (req, res) => {
    res.render("writer/btc");
});
router.get('/CreateBlog', (req, res) => {
    res.render("writer/CreateBlog");
});
module.exports = router;