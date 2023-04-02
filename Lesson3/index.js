const express =  require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/register", (req, res) => {
    res.sendFile(__dirname+"/index.html");
});

app.post("/register", (req, res) => {
    const fullName = req.body.fullName;
    const age = req.body.age;
    res.send(`<h2>Your Name is ${fullName} and age is ${age}</h2>`);
    // const name = req.body.name;
    // const age = req.body.age;
    // res.send(`Welcome ${name}, youre age is ${age}`);
});

// app.post("/users", (req, res) => {
//     const name = req.body.name;
//     const age = req.body.age;
//     res.send(`Welcome ${name}, youre age is ${age}`);

    // example.com/
    // "/"
    // const id =  req.header('id');       //header methode
    // const name =  req.header('name');
    // res.send(`<h1>Student Id is: ${id}, Name is ${name}</h1>`);

    // example.com/userId/:202/userAge/:25
    // "/userId/:id/userAge/:age"       //params method
    // const {id, age} = req.params;
    // res.send(`<h1>Student Id is: ${id}, age is ${age}</h1>`);

    // example.com/?id=202&name=rezaulkarim
    // "/"
    // const {name, id} = req.query;        //query method
    // res.send(`<h1>Student Name is: ${name}, id is ${id}</h1>`);
// });

app.listen(PORT, () => {
    console.log(`Server is rouning at http://localhost:${PORT}`);
});