const express = require('express');
const app =  express();

const userRoute = require('./routes/users.route');

app.use("/api/user", userRoute);

app.use("/register", (req, res) => {
    // res.status(200).json({
    //     message : "hi i'm register page",
    //     statusCOde : 200,
    // })
    // res.redirect('/login')

    res.statusCode = 202 ;
    res.sendFile(__dirname+"/views/register.html")
});
app.use("/login", (req, res) => {
    // res.send('Hi i\'m login page.')

    // res.cookie("Name", "RK");
    // res.cookie("Age", "25");
    res.clearCookie("Name");
    res.append("id", "13000"); 
    res.end();
});
app.get("/", (req, res) => {
    // res.send('<h1>Hi i\'m homepage</h1>');
    // res.end()
    res.statusCode = 200;
    res.sendFile(__dirname+"/views/index.html")
});
app.use((req, res) => {
    res.send('<h1>404 !!! Not a valid request.</h1>')
});

module.exports = app;