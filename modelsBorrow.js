const db = require("./bd");

function getBorrowDatByID(id, callback) {
    const query = `SELECT * FROM borrow WHERE ID_Livro = ?`;
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error("Error searching books:", err);
            callback(err, null);
            return;
        }
        callback(null, results[0]);
    });
}

function getAllBorrowBooks(callback) {
    const query = `SELECT * FROM borrow, books, users WHERE users.id = borrow.ID_Usuario AND books.id = borrow.ID_Livro`;
    db.query(query, (err, results) => {
        if (err) {
            console.error("Error searching books:", err);
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

function isAvailable(book_id, callback) {
    const query = "SELECT * FROM borrow WHERE ID_Livro = ?";
    db.query(query, [book_id], (err, results) => {
        if (err) {
            console.error("Erro ao encontrar usuário:", err);
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
    const query =
        "INSERT INTO borrow(ID_Usuario, ID_Livro, Data_Emprestimo, Data_Devolucao, Multa) VALUES (?, ?, CURRENT_DATE, DATE_ADD(CURRENT_DATE, INTERVAL 1 MONTH), 10.00)";
    db.query(query, [ID_Usuario, ID_Livro], (err, results) => {
        if (err) {
            console.error("Erro ao encontrar usuário:", err);
            return;
        }
        unavailableBook(ID_Livro);
    });
}

function unavailableBook(BookID) {
    const query = "UPDATE books SET available = 0 WHERE id = ?";
    db.query(query, [BookID], (err, results) => {
        if (err) {
            console.error("Erro ao encontrar usuário:", err);
            return;
        }
    });
}

function getBorrowBooksByID(id, callback) {
    const query =
        "SELECT * FROM borrow, books WHERE borrow.ID_Usuario = ? AND borrow.ID_Livro = books.id";
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error("Erro ao encontrar usuário:", err);
            callback(err, null);
            return;
        }
        callback(null, results); // Retorna apenas o primeiro usuário encontrado
    });
}

function getDateBorrowByID(id, callback) {
    const query = `SELECT Data_Devolucao FROM borrow WHERE ID_Livro = ?`;
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error("Error searching books:", err);
        callback(err, null);
        return;
      }
      callback(null, results[0]);
    });
  }

module.exports = {
    getBorrowDatByID,
    getAllBorrowBooks,
    isAvailable,
    borrowBook,
    getBorrowBooksByID,
    getDateBorrowByID
}