const db = require("./bd");

//FUNÇÕES DE USÚARIO (LOGIN, REGISTER...)
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

function getuserdatas(id_user, callback) {
  const query =
    "SELECT fname, lname, username, email, password, admin FROM users WHERE id = ?";
  db.query(query, [id_user], (err, results) => {
    if (err) {
      console.error("Erro ao encontrar usuário:", err);
      callback(err, null);
      return;
    }
    callback(null, results[0]);
  });
}

function changeUserPasswordByID(id_user, newpassword, callback) {
  const query = "UPDATE users SET password = ? WHERE id = ?";
  db.query(query, [newpassword, id_user], (err, results) => {
    if (err) {
      console.error("Erro ao encontrar usuário:", err);
      callback(err, null);
      return;
    }
    callback(null, results);
  });
}

function UpdateUserByEmail(fname, lname, username, password, email, callback) {
  const query =
    "UPDATE users SET fname = ?, lname = ?, username = ?, password = ? WHERE email = ?";
  db.query(query, [fname, lname, username, password, email], (err, results) => {
    if (err) {
      console.error("Erro ao encontrar usuário:", err);
      callback(err, null);
      return;
    }
    callback(null, results);
  });
}

function deleteUserByEmail(email, callback) {
  const query = "DELETE FROM users WHERE email = ?";
  db.query(query, [email], (err, results) => {
    if (err) {
      console.error("Erro ao encontrar usuário:", err);
      callback(err, null);
      return;
    }
    callback(null, results);
  });
}
//FIM DAS FUNÇÕES DE USÚARIO.

//FUNCÕES DE PESQUISA NO BANCO DE DADOS (ENVOLVENDO LIVROS)
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
  const query = `SELECT * FROM books WHERE gender = ? OR gender_2 = ?`;
  db.query(query, [category, category], (err, results) => {
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

function getallfavoriteBooksbyID(id, callback) {
  const query =
    "SELECT * FROM favorite_books, books, users WHERE favorite_books.ID_User = ? AND favorite_books.ID_Book = books.id AND users.id = favorite_books.ID_User";
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error("Erro ao encontrar usuário:", err);
      callback(err, null);
      return;
    }
    callback(null, results);
  });
}
function getallreadBooksbyID(id, callback) {
  const query =
    "SELECT * FROM read_books, books, users WHERE read_books.ID_User = ? AND read_books.ID_Book = books.id AND users.id = read_books.ID_User";
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error("Erro ao encontrar usuário:", err);
      callback(err, null);
      return;
    }
    callback(null, results);
  });
}
function getallreadingBooksbyID(id, callback) {
  const query =
    "SELECT * FROM reading_books, books, users WHERE reading_books.ID_User = ? AND reading_books.ID_Book = books.id AND users.id = reading_books.ID_User";
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error("Erro ao encontrar usuário:", err);
      callback(err, null);
      return;
    }
    callback(null, results);
  });
}

//FIM DAS FUNCÕES DE PESQUISA NO BANCO DE DADOS

//FUNÇÕES DE INSERIR DADOS NAS TABELAS (ENVOLVENDO LIVROS)

function favoriteThisBook(id_user, id_book, callback) {
  const query = "INSERT INTO favorite_books (ID_User, ID_Book) values (?, ?)";
  db.query(query, [id_user, id_book], (err, results) => {
    if (err) {
      console.error("Erro ao encontrar usuário:", err);
      callback(err, null);
      return;
    }
    callback(null, results);
  });
}
function readThisBook(id_user, id_book, callback) {
  const query = "INSERT INTO read_books (ID_User, ID_Book) values (?, ?)";
  db.query(query, [id_user, id_book], (err, results) => {
    if (err) {
      console.error("Erro ao encontrar usuário:", err);
      callback(err, null);
      return;
    }
    callback(null, results);
  });
}
function readThisBook(id_user, id_book, callback) {
  const query = "INSERT INTO read_books (ID_User, ID_Book) values (?, ?)";
  db.query(query, [id_user, id_book], (err, results) => {
    if (err) {
      console.error("Erro ao encontrar usuário:", err);
      callback(err, null);
      return;
    }
    callback(null, results);
  });
}

function readingThisBook(id_user, id_book, callback) {
  const query = "INSERT INTO reading_books (ID_User, ID_Book) values (?, ?)";
  db.query(query, [id_user, id_book], (err, results) => {
    if (err) {
      console.error("Erro ao encontrar usuário:", err);
      callback(err, null);
      return;
    }
    callback(null, results);
  });
}

function createBook(
  name,
  author,
  cape,
  year,
  description,
  color1,
  color2,
  gender1,
  gender2,
  callback
) {
  const query =
    "INSERT INTO books (name, author, cape, year, description, primary_color, secound_color, gender, gender_2) values (?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(
    query,
    [name, author, cape, year, description, color1, color2, gender1, gender2],
    (err, results) => {
      if (err) {
        console.error("Erro ao encontrar usuário:", err);
        callback(err, null);
        return;
      }
      callback(null, results);
    }
  );
}

//FIM DAS FUNÇÕES DE INSERIR DADOS NAS TABELAS

//FUNÇÕES DE DELETAR DADOS DA TABELA (ENVOLVENDO LIVROS)
function GiveBookBackByID(id_book, callback) {
  const query = "DELETE FROM borrow WHERE ID_Emprestimo = ?";
  db.query(query, [id_book], (err, results) => {
    if (err) {
      console.error("Erro ao encontrar usuário:", err);
      callback(err, null);
      return;
    }
    callback(null, results);
  });
}
//FIM FUNÇÕES DE DELETAR DADOS DA TABELA

module.exports = {
  getAllBooks,
  getBookByCategory,
  getBookByInput,
  getBookByID,
  getAllUsers,
  addUser,
  getUserByEmail,
  getallfavoriteBooksbyID,
  getallreadBooksbyID,
  getallreadingBooksbyID,
  favoriteThisBook,
  readThisBook,
  readingThisBook,
  getuserdatas,
  changeUserPasswordByID,
  UpdateUserByEmail,
  deleteUserByEmail,
  GiveBookBackByID,
  createBook
};
