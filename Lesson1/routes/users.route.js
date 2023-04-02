const express = require('express');
const router = express.Router();


router.get("/register", (req, res) => {
    res.send('<h1>I\'m a get request at Register route.</h1>');
    res.end()
});
router.get("/login", (req, res) => {
    res.send('<h1>I\'m a get request at Login route.</h1>');
    res.end()
});

module.exports = router;