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

function getBookByCategory(category, callback) {
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

function getBookByID(id, callback) {
    const query = `SELECT * FROM books WHERE id = ?`;
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error searching books:', err);
            callback(err, null);
            return;
        }
        callback(null, results[0]);
    });
}

function getBookByInput(name, callback) {
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

function getAllUsers(callback) {
    const query = `SELECT * FROM users`;
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error searching books:', err);
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function addUser(fname, lname, username, email, password) {
    const query = `INSERT INTO users (fname, lname, username, email, password)VALUES (?, ?, ?, ?, ?)`;
    db.query(query, [fname, lname, username, email, password], (err, results) => {
        if (err) {
            console.error('Error searching books:', err);
            return;
        }
    });
}

function getUserByEmail(email, callback) {
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], (err, results) => {
        if (err) {
            console.error('Erro ao encontrar usuário:', err);
            callback(err, null);
            return;
        }
        callback(null, results[0]); // Retorna apenas o primeiro usuário encontrado
    });
}

function isAvailable(book_id, callback) {
    const query = 'SELECT * FROM borrow WHERE ID_Livro = ?';
    db.query(query, [book_id], (err, results) => {
        if (err) {
            console.error('Erro ao encontrar usuário:', err);
            callback(err, null);
            return;
        }
        if (results.length === 0) {
            callback(null, true);
        } else {
            callback(null, false);
        }
    });
}

function borrowBook(ID_Usuario, ID_Livro) {
    const query = 'INSERT INTO borrow(ID_Usuario, ID_Livro, Data_Emprestimo, Data_Devolucao, Multa) VALUES (?, ?, CURRENT_DATE, DATE_ADD(CURRENT_DATE, INTERVAL 1 MONTH), 10.00)'
    db.query(query, [ID_Usuario, ID_Livro], (err, results) => {
        if (err) {
            console.error('Erro ao encontrar usuário:', err);
            return;
        }
        unavailableBook(ID_Livro)
    });
}

function unavailableBook(BookID) {
    const query = 'UPDATE books SET available = 0 WHERE id = ?'
    db.query(query, [BookID], (err, results) => {
        if (err) {
            console.error('Erro ao encontrar usuário:', err);
            return;
        }
    });
}


module.exports = {
    getAllBooks,
    getBookByCategory,
    getBookByInput,
    getBookByID,
    getAllUsers,
    addUser,
    getUserByEmail,
    isAvailable,
    borrowBook
}