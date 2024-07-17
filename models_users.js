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

module.exports = {
    deleteUserByEmail,
    UpdateUserByEmail,
    changeUserPasswordByID,
    getuserdatas,
    getUserByEmail,
    addUser,
    getAllUsers
};
