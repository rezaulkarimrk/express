const express = require('express');
const app =  express();

const userRoute = require('./routes/users.route');

app.use("/api/user", userRoute);

app.get("/", (req, res) => {
    res.send('<h1>I\'m a get request at home route.</h1>');
    res.end()
});
app.use((req, res) => {
    res.send('<h1>404 !!! Not a valid request.</h1>')
});

module.exports = app;