const db = require("./bd");

function isAvailableReserve(book_id, callback) {
    const query = "SELECT * FROM reservas WHERE ID_Livro = ?";
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


function reserveBook(ID_Usuario, ID_Livro, Data_Emprestimo) {
    const query =
        "INSERT INTO reservas(ID_Usuario, ID_Livro, Data_Reserva) VALUES (?, ?, ?)";
    db.query(query, [ID_Usuario, ID_Livro, Data_Emprestimo], (err, results) => {
        if (err) {
            console.error("Erro ao encontrar usuário:", err);
            return;
        }
        unavailableBookBorrow(ID_Livro);
    });
}

function unavailableBookBorrow(BookID) {
    const query = "UPDATE books SET reserve = 1 WHERE id = ?";
    db.query(query, [BookID], (err, results) => {
        if (err) {
            console.error("Erro ao encontrar usuário:", err);
            return;
        }
    });
}

function getAllBorrowBooksByID(id, callback) {
    const query = `SELECT * FROM reservas, books WHERE ID_Usuario = ? AND reservas.ID_Livro = books.id`;
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error("Error searching books:", err);
            callback(err, null);
            return;
        }
        callback(null, results);
    });
}

module.exports = {
    isAvailableReserve,
    reserveBook,
    getAllBorrowBooksByID
}