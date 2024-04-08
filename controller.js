const userModels = require(`./models.js`);
const validator = require('./registerValidaditons.js')

const getAllBooksOnLoad = (req, res) => {
    if (req.session.id_user) {
        userModels.getAllBooks((err, results) => {
            userModels.getBorrowBooksByID(req.session.id_user, (err, resultsBorrow) => {
                res.render('index', { lista: results, borrow: resultsBorrow });
            })
        })
    } else {
        res.redirect('./login')
    }
}

const loadBookPage = (req, res) => {
    const { book_id } = req.params
    userModels.getBookByID(book_id, (err, result) => {
        res.render(`bookDescription`, { book: result })
    })
}
const searchCategory = (req, res) => {
    const category = req.params.category
    if (category === `all`) {
        userModels.getAllBooks((err, results) => {
            res.render('categoryBook', { lista: results });
        })
    } else {
        userModels.getBookByCategory(category, (err, results) => {
            res.render('categoryBook', { lista: results });
        })
    }
}

const searchInput = (req, res) => {
    const input = req.params.title
    userModels.getBookByInput(input, (err, results) => {
        res.render('categoryBook', { lista: results });
    })
}

const RegisterUser = (req, res) => {
    userModels.getAllUsers((err, results) => {
        const { fname, lname, username, email, password, cpassword, terms } = req.body
        let mensagem;
        console.log(terms)
        if (!validator.isvalidname(fname, lname)) {
            mensagem = "User invalido";
        } else if (!validator.isvalidEmail(results, email)) {
            mensagem = "Email já cadastrado";
        } else if (!validator.isvalidUsername(results, username)) {
            mensagem = "Usuário existente";
        } else if (validator.isvalidPass(password, cpassword)) {
            mensagem = "Senha diferente";
        } else if (!validator.TermsIsOn(terms)) {
            mensagem = 'Aceite os termos'
        } else {
            userModels.addUser(fname, lname, username, email, password);
            mensagem = "Sucesso";
        }
        res.status(200).json({ mensagem: mensagem });
    })
}

const login = (req, res) => {
    userModels.getUserByEmail(req.body.email, (err, result) => {
        if (result) {
            if (result.email === req.body.email && result.password === req.body.password) {
                req.session.id_user = result.id
                res.cookie(`user_id`, result.id)
                res.redirect("/");
                res.status(200);
            } else {
                res.status(401);
            }
        }
    })
}

const borrow = (req, res) => {
    const { book_id } = req.params
    if (req.session.id_user) {
        userModels.isAvailable(book_id, (err, result) => {
            if (result === true) {
                userModels.borrowBook(req.session.id_user, book_id)
            } else {
                console.log(`livro ocupado`)
                return
            }
        })
    } else {
        res.redirect('../login')
    }
}
const reserve = (req, res) => {
    const { book_id } = req.params
    if (req.session.id_user) {
        userModels.isAvailableReserve(book_id, (err, result) => {
            userModels.getDateBorrowByID(book_id, (err, book) => {
                if (result === true) {
                    userModels.reserveBook(req.session.id_user, book_id, book.Data_Devolucao)
                } else {
                    console.log(`livro já reservado`)
                    return
                }
            })
        })
    } else {
        res.redirect('../login')
    }
}
module.exports = {
    getAllBooksOnLoad,
    searchCategory,
    searchInput,
    RegisterUser,
    loadBookPage,
    login,
    borrow,
    reserve
}