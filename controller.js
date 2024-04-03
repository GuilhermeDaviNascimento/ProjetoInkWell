const userModels = require(`./models.js`);

const getAllBooksOnLoad = (req, res) => {
    userModels.getAllBooks((err, results) => {
        res.render('index', { lista: results });
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
    })}
}

const searchInput = (req, res) => {
    const input = req.params.title
    userModels.getBookByInput(input, (err, results) => {
        res.render('categoryBook', { lista: results });
    })
}
module.exports = {
    getAllBooksOnLoad,
    searchCategory,
    searchInput
}