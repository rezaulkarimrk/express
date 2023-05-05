const path = require("path");

const products = require("../models/products.model");

exports.getProducts = (req, res) => {
    res.sendFile(path.join(__dirname + "/../views/product.html"));
}


exports.saveProducts = (req, res) => {
    const name = req.body.name;
    const prich = Number(req.body.prich);
    const product = {name, prich};
    products.push(product);
    res.status(200).json({
        success: true,
        products,
    })
}