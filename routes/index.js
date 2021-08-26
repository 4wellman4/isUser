const express = require('express');
const router = express.Router();
const os = require('os');

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/', (req, res) => {
    let name = req.body.myname;
		os.userInfo().username === name ? res.redirect('/yes?name='+name) : res.redirect('/no?name='+name);
});

module.exports = router;