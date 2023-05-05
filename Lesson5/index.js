const express = require('express');
require("dotenv").config();
const app = express();
PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Hello i\'m home route');
});


app.listen(PORT, () => { 
    console.log(`Server is running at http://localhost:${PORT}`);
});