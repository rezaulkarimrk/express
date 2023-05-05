const express =  require("express");
const cors =  require("cors")

const userRouter = require("./routes/users.route");
const productRouter = require("./routes/products.route");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extends : true}));
app.use(cors());
app.use(userRouter);
app.use(productRouter);

app.use((req, res) => {
    res.status(200).json({
        message: "Resource not found"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});  