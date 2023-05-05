const express =  require('express');
const app = express();
const PORT =  3000;


// app.get('/products/:id([0-9]+)', (req, res) => { //support 0-9 digit
app.get('/products/:id([0-9]{4})', (req, res) => {  //support 4 length digit and must 4 digit
    res.send(`<h1>ID = ${req.params.id}</h1>`)
});
app.get('/products/:title([a-zA-Z0-9]+)', (req, res) => {  //support 4 length digit and must 4 digit
    res.send(`<h1>Title = ${req.params.title}</h1>`)
});
app.use("*", (req, res) => {
    res.status(404).send({
        message : "Not a valid route"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});