const models_books = require(`./models_books.js`);
const models_borrows = require(`./models_borrow.js`);
const models_reservers = require(`./models_reserve.js`);
const models_users = require(`./models_users.js`);
const validator = require("./registerValidaditons.js");

const getAllBooksOnLoad = (req, res) => {
  if (req.session.id_user) {
    models_books.getAllBooks((err, results) => {
      models_borrows.getBorrowBooksByID(
        req.session.id_user,
        (err, resultsBorrow) => {
          models_reservers.getAllBorrowBooksByID(
            req.session.id_user,
            (err, resultReservers) => {
              models_users.getuserdatas(req.session.id_user, (err, datas) => {
                const date = new Date();
                const dia = date.getDate();
                const mes = date.getMonth() + 1;
                const ano = date.getFullYear();
                let dataSeteDiasFrente = new Date(date);
                dataSeteDiasFrente.setDate(date.getDate() + 7);
                let semanaquevemdia = dataSeteDiasFrente.getDate();
                let semanaquevemmes = dataSeteDiasFrente.getMonth() + 1;
                let semanaquevemano = dataSeteDiasFrente.getFullYear();
                const formateddate = `${ano}-${mes}-${dia}`;
                const formatdate7diasdepois = `${semanaquevemano}-${semanaquevemmes}-${semanaquevemdia}`;
                models_borrows.OverdueLoans(
                  req.session.id_user,
                  formateddate,
                  (err, result) => {
                    if (result.length > 0) {
                      result.forEach((book) => {
                        models_borrows.insertFine(
                          book.ID_Usuario,
                          book.ID_Livro,
                          book.Multa,
                          (err, result) => {}
                        );
                      });
                    }
                  }
                );
                models_borrows.GetBooksClosetoExpirationDateByID(
                  req.session.id_user,
                  formatdate7diasdepois,
                  (err, notificaions) => {
                    models_borrows.serachFines(
                      req.session.id_user,
                      (err, fine) => {
                        res.render("index", {
                          lista: results,
                          borrow: resultsBorrow,
                          reserves: resultReservers,
                          userdatas: datas,
                          notificaion: notificaions,
                          fines: fine,
                        });
                      }
                    );
                  }
                );
              });
            }
          );
        }
      );
    });
  } else {
    res.redirect("./login");
  }
};

const loadBookPage = (req, res) => {
  const { book_id } = req.params;
  let isfullborrow = {
    full: true,
  };
  models_books.getBookByID(book_id, (err, result) => {
    models_borrows.getBorrowDatByID(book_id, (err, book) => {
      models_borrows.getBorrowBooksByID(
        req.session.id_user,
        (err, borrows) => {
          if (borrows.length >= 3) {
            res.render(`bookDescription`, {
              book: result,
              borrow: book,
              isfullborrows: isfullborrow,
            });
          } else {
            isfullborrow.full = false;
            res.render(`bookDescription`, {
              book: result,
              borrow: book,
              isfullborrows: isfullborrow,
            });
          }
        }
      );
    });
  });
};
const searchCategory = (req, res) => {
  const category = req.params.category;
  if (category === `all`) {
    models_books.getAllBooks((err, results) => {
      res.render("categoryBook", { lista: results });
    });
  } else {
    models_books.getBookByCategory(category, (err, results) => {
      res.render("categoryBook", { lista: results });
    });
  }
};

const searchInput = (req, res) => {
  const input = req.params.title;
  models_books.getBookByInput(input, (err, results) => {
    res.render("categoryBook", { lista: results });
  });
};

const RegisterUser = (req, res) => {
  models_users.getAllUsers((err, results) => {
    const { fname, lname, username, email, password, cpassword, terms } =
      req.body;
    let mensagem;
    if (!validator.isvalidname(fname, lname)) {
      mensagem = "User invalido";
    } else if (!validator.isvalidEmail(results, email)) {
      mensagem = "Email já cadastrado";
    } else if (!validator.isvalidUsername(results, username)) {
      mensagem = "Usuário existente";
    } else if (validator.isvalidPass(password, cpassword)) {
      mensagem = "Senha diferente";
    } else if (!validator.TermsIsOn(terms)) {
      mensagem = "Aceite os termos";
    } else {
      models_users.addUser(fname, lname, username, email, password);
      mensagem = "Sucesso";
    }
    res.status(200).json({ mensagem: mensagem });
  });
};

const login = (req, res) => {
  models_users.getUserByEmail(req.body.email, (err, result) => {
    if (result) {
      if (
        result.email === req.body.email &&
        result.password === req.body.password
      ) {
        req.session.id_user = result.id;
        res.cookie(`user_id`, result.id);
        res.redirect("/");
        res.status(200);
      } else {
        res.status(401);
      }
    }
  });
};

const borrow = (req, res) => {
  const { book_id } = req.params;
  if (req.session.id_user) {
    models_borrows.isAvailable(book_id, (err, result) => {
      if (result === true) {
        models_borrows.borrowBook(req.session.id_user, book_id);
        res.redirect("../");
      } else {
        return;
      }
    });
  } else {
    res.redirect("../login");
  }
};

const reserve = (req, res) => {
  const { book_id } = req.params;
  if (req.session.id_user) {
    models_reservers.isAvailableReserve(book_id, (err, result) => {
      models_borrows.getDateBorrowByID(book_id, (err, book) => {
        if (result === true) {
          models_reservers.reserveBook(
            req.session.id_user,
            book_id,
            book.Data_Devolucao
          );
          res.redirect("../");
        } else {
          return;
        }
      });
    });
  } else {
    res.redirect("../login");
  }
};

const loadAdminpage = (req, res) => {
  models_users.getuserdatas(req.session.id_user, (err, datas) => {
    if (datas.admin === "yes") {
      models_borrows.getAllBorrowBooks((err, allbooksborrow) => {
        models_users.getAllUsers((err, users) => {
          res.render("adminpage", {
            borrowBooks: allbooksborrow,
            users: users,
          });
        });
      });
    } else {
      res.redirect("/");
    }
  });
};

const logoutSession = (req, res) => {
  req.session.destroy(function (err) {
    res.clearCookie("user_id");
    res.redirect("/");
  });
};

const GetAllFavoriteBooks = (req, res) => {
  models_books.getallfavoriteBooksbyID(req.session.id_user, (err, result) => {
    res.render("favoriteBooks", { books: result });
  });
};
const GetAllReadBooks = (req, res) => {
  models_books.getallreadBooksbyID(req.session.id_user, (err, result) => {
    res.render("readBooks", { books: result });
  });
};
const GetAllReadingBooks = (req, res) => {
  models_books.getallreadingBooksbyID(req.session.id_user, (err, result) => {
    res.render("readingBooks", { books: result });
  });
};
const favoriteThisbook = (req, res) => {
  models_books.favoriteThisBook(
    req.session.id_user,
    req.params.bookid,
    (err, result) => {
      res.redirect(`/`);
    }
  );
};
const readThisbook = (req, res) => {
  models_books.readThisBook(
    req.session.id_user,
    req.params.bookid,
    (err, result) => {
      res.redirect(`/`);
    }
  );
};
const readingThisbook = (req, res) => {
  models_books.readingThisBook(
    req.session.id_user,
    req.params.bookid,
    (err, result) => {
      res.redirect(`/`);
    }
  );
};

const changepassword = (req, res) => {
  models_users.changeUserPasswordByID(
    req.session.id_user,
    req.params.password,
    (err, result) => {
      res.redirect(`/`);
    }
  );
};

const updateUser = (req, res) => {
  models_users.UpdateUserByEmail(
    req.body.fname,
    req.body.lname,
    req.body.user,
    req.body.password,
    req.body.email,
    (err, result) => {
      res.redirect("/adminpage");
    }
  );
};
const deleteUser = (req, res) => {
  models_users.deleteUserByEmail(req.body.email, (err, result) => {
    res.redirect("/adminpage");
  });
};

const givebackbook = (req, res) => {
  models_books.GiveBookBackByID(req.body.book, (err, result) => {
    res.redirect("/adminpage");
  });
};

const createnewbook = (req, res) => {
  models_users.getuserdatas(req.session.id_user, (err, datas) => {
    if (datas.admin === "yes") {
      res.render("newbook");
    } else {
      res.redirect("/");
    }
  });
};

const createthisbook = (req, res) => {
  models_users.getuserdatas(req.session.id_user, (err, datas) => {
    if (datas.admin === "yes") {
      const {
        name,
        author,
        cape,
        year,
        description,
        color1,
        color2,
        gender1,
        gender2,
      } = req.body;
      models_books.createBook(
        name,
        author,
        cape,
        year,
        description,
        color1,
        color2,
        gender1,
        gender2,
        (err, result) => {
          res.redirect("./createnewbook");
        }
      );
    } else {
      res.redirect("/");
    }
  });
};

module.exports = {
  getAllBooksOnLoad,
  searchCategory,
  searchInput,
  RegisterUser,
  loadBookPage,
  login,
  borrow,
  reserve,
  logoutSession,
  loadAdminpage,
  GetAllFavoriteBooks,
  GetAllReadBooks,
  GetAllReadingBooks,
  favoriteThisbook,
  readThisbook,
  readingThisbook,
  changepassword,
  updateUser,
  deleteUser,
  givebackbook,
  createnewbook,
  createthisbook,
};
