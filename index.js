const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
const userController = require(`./controller.js`);

app.get('/register', (req, res) => res.render(`register`))
app.get(`/`, userController.getAllBooksOnLoad)
app.get('/search/:title', userController.searchInput)
app.get(`/category/:category`, userController.searchCategory)
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
