const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"> <input type="text" name="title"/> <button type="submit">AddProduct</button></form>');
});

router.use("/", (req, res, next) => {
    console.log('in the middle ware 2');
    res.send('<h1>Hello from Express !</h1>');
});





module.exports = router;