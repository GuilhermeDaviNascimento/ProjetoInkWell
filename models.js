const db = require('./bd');

function getAllBooks(callback) {
    const query = `SELECT * FROM books`;
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error searching books:', err);
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function getBookByCategory(category, callback){
    const query = `SELECT * FROM books WHERE gender = ?`;
    db.query(query, [category], (err, results) => {
        if (err) {
            console.error('Error searching books:', err);
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function getBookByInput(name, callback){
    let querryname = `%${name}%`
    const query = `SELECT * FROM books WHERE name LIKE ?`;
    db.query(query, [querryname], (err, results) => {
        if (err) {
            console.error('Error searching books:', err);
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

module.exports = {
    getAllBooks,
    getBookByCategory,
    getBookByInput
}