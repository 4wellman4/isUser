const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('no',{name: req.query.name});
});

module.exports = router;