const path = require('path')

const express = require('express');
const rootDir = require('../utils/rootDir')

const router = express.Router();

router.get('/add-product', (req, res) => {
    res.sendFile(path.join(rootDir, './views/add-product.html'))
});

router.post('/product', (req, res) => {
    console.log(req.body);
    res.redirect('/')
});

module.exports = router;