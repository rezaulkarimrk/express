const express =  require(`express`);
const app = express();
PORT = 3000;

app.use(express.urlencoded({extended: true}));

const users = [
    {
        name : "Rezaul Karim RK",
        age : 33
    },
    {
        name : "Sarthok Hossain",
        age : 22
    }
];

const htmlForm = `
    <form method="POST" action="/users" >
        <input type="text" name="name" placeholder="Enter your name" />
        <input type="number" name="age" placeholder="Enter your age" />
        <button type="submit" >Save user</button>
    </form>
`



app.use((req, res) => {
    res.status(404).json({
        message: "resourse not found"
    });
});

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});