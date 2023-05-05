const express = require('express');
const app = express();
const PORT = 3000;

const myMiddleware = (req, res, next) => {
    console.log('Middleware function');
    req.currentTime = new Date(Date.now());
    next();
}

app.use(myMiddleware);


app.use((req, res, next) => {
    res.send("404 bad url request");
});

app.use((err, req, res, next) => {
    res.status(500).send('Something broke')
});
// app.get('/about', myMiddleware,  (req, res) => {
//     console.log("I am about "+ req.currentTime);
//     res.send('This is about page');
// });

app.get('/about',  (req, res) => {
    console.log("I am about "+ req.currentTime);
    res.send('This is about page');
});
app.get('/',  (req, res) => {
    console.log("I am home "+ req.currentTime);
    res.send('This is home page');
});

app.listen(PORT, () =>{
    console.log('Server is running at http://localhost:PORT');
});