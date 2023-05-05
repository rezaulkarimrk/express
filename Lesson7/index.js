const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
PORT = 3000;
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname+"/index.html");
});

app.listen(PORT, () => {
    console.log(`Server is runnit at http://localhost:${PORT}`);
});