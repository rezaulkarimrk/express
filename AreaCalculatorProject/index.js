const express =  require("express");
const app = express();
const bodyParser =  require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

PORT =  3000;
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.get('/circle', (req, res) => {
    res.sendFile(__dirname + "/circle.html");
});
app.post('/circle', (req, res) => {
    const radius = req.body.radius;
    area = Math.PI * radius * radius;
    res.send(`<h1>Area of circle is: ${area}</h1>`);
});

app.get('/tringle', (req, res) => {
    res.sendFile(__dirname + "/tringle.html");
});
app.post('/tringle', (req, res) => {
    const base = req.body.base;
    const height = req.body.height;
    const area = 0.5 * base * height;
    res.send(`<h1>Area of tringle is: ${area}</h1>`)
});


app.listen(PORT, () => {
    console.log(`Server is rouning at http://localhost:${PORT}`);
});