const db = require("./bd");

function getAllBooks(callback) {
  const query = `SELECT * FROM books`;
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error searching books:", err);
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
      console.error("Error searching books:", err);
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
      console.error("Error searching books:", err);
      callback(err, null);
      return;
    }
    callback(null, results[0]);
  });
}

function getBookByInput(name, callback) {
  let querryname = `%${name}%`;
  const query = `SELECT * FROM books WHERE name LIKE ?`;
  db.query(query, [querryname], (err, results) => {
    if (err) {
      console.error("Error searching books:", err);
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
      console.error("Error searching books:", err);
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
      console.error("Error searching books:", err);
      return;
    }
  });
}

function getUserByEmail(email, callback) {
  const query = "SELECT * FROM users WHERE email = ?";
  db.query(query, [email], (err, results) => {
    if (err) {
      console.error("Erro ao encontrar usuário:", err);
      callback(err, null);
      return;
    }
    callback(null, results[0]); // Retorna apenas o primeiro usuário encontrado
  });
}


// function addUser(name, author, cape, year, description, primary_color, secound_color, gender, gender_2) {
//     const query = `INSERT INTO books (name, author, cape, year, description, primary_color, secound_color, gender, available, gender_2)VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1, ?)`;
//     db.query(query, [name, author, cape, year, description, primary_color, secound_color, gender, gender_2], (err, results) => {
//         if (err) {
//             console.error('Error searching books:', err);
//             return;
//         }
//     });
// }
// books.forEach(book => {
//     addUser(book.name, book.author, book.cape, book.year, book.description, book.primary_color, book.secondary_color, book.gender, book.gender_2)
// });

module.exports = {
  getAllBooks,
  getBookByCategory,
  getBookByInput,
  getBookByID,
  getAllUsers,
  addUser,
  getUserByEmail
};
