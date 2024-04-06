const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const session = require('express-session')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
const userController = require(`./controller.js`);
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));
app.get('/borrow/:book_id', userController.borrow)
app.get('/register', (req, res) => res.render(`register`))
app.get('/book/:book_id', userController.loadBookPage)
app.get('/login', (req, res) => res.render(`login`))
app.post('/loginUser', userController.login)
app.post('/createuser', userController.RegisterUser)
app.get(`/`, userController.getAllBooksOnLoad)
app.get('/search/:title', userController.searchInput)
app.get(`/category/:category`, userController.searchCategory)
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
