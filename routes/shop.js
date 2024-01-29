const express = require('express');

const router = express.Router();

router.get("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect('/'); 
});

module.exports = router;