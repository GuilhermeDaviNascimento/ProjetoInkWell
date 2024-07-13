const userModels = require(`./models.js`);
const userModelsBorrow = require(`./modelsBorrow.js`);
const userModelsReserve = require(`./modelsReserve.js`);
const validator = require("./registerValidaditons.js");

const getAllBooksOnLoad = (req, res) => {
  if (req.session.id_user) {
    userModels.getAllBooks((err, results) => {
      userModelsBorrow.getBorrowBooksByID(
        req.session.id_user,
        (err, resultsBorrow) => {
          userModelsReserve.getAllBorrowBooksByID(
            req.session.id_user,
            (err, resultReservers) => {
              userModels.getuserdatas(req.session.id_user, (err, datas) => {
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
                userModelsBorrow.OverdueLoans(
                  req.session.id_user,
                  formateddate,
                  (err, result) => {
                    if (result.length > 0) {
                      result.forEach((book) => {
                        userModelsBorrow.insertFine(
                          book.ID_Usuario,
                          book.ID_Livro,
                          book.Multa,
                          (err, result) => {}
                        );
                      });
                    }
                  }
                );
                userModelsBorrow.GetBooksClosetoExpirationDateByID(
                  req.session.id_user,
                  formatdate7diasdepois,
                  (err, notificaions) => {
                    userModelsBorrow.serachFines(
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
  userModels.getBookByID(book_id, (err, result) => {
    userModelsBorrow.getBorrowDatByID(book_id, (err, book) => {
      userModelsBorrow.getBorrowBooksByID(
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
    userModels.getAllBooks((err, results) => {
      res.render("categoryBook", { lista: results });
    });
  } else {
    userModels.getBookByCategory(category, (err, results) => {
      res.render("categoryBook", { lista: results });
    });
  }
};

const searchInput = (req, res) => {
  const input = req.params.title;
  userModels.getBookByInput(input, (err, results) => {
    res.render("categoryBook", { lista: results });
  });
};

const RegisterUser = (req, res) => {
  userModels.getAllUsers((err, results) => {
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
      userModels.addUser(fname, lname, username, email, password);
      mensagem = "Sucesso";
    }
    res.status(200).json({ mensagem: mensagem });
  });
};

const login = (req, res) => {
  userModels.getUserByEmail(req.body.email, (err, result) => {
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
    userModelsBorrow.isAvailable(book_id, (err, result) => {
      if (result === true) {
        userModelsBorrow.borrowBook(req.session.id_user, book_id);
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
    userModelsReserve.isAvailableReserve(book_id, (err, result) => {
      userModelsBorrow.getDateBorrowByID(book_id, (err, book) => {
        if (result === true) {
          userModelsReserve.reserveBook(
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
  userModels.getuserdatas(req.session.id_user, (err, datas) => {
    if (datas.admin === "yes") {
      userModelsBorrow.getAllBorrowBooks((err, allbooksborrow) => {
        userModels.getAllUsers((err, users) => {
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
  userModels.getallfavoriteBooksbyID(req.session.id_user, (err, result) => {
    res.render("favoriteBooks", { books: result });
  });
};
const GetAllReadBooks = (req, res) => {
  userModels.getallreadBooksbyID(req.session.id_user, (err, result) => {
    res.render("readBooks", { books: result });
  });
};
const GetAllReadingBooks = (req, res) => {
  userModels.getallreadingBooksbyID(req.session.id_user, (err, result) => {
    res.render("readingBooks", { books: result });
  });
};
const favoriteThisbook = (req, res) => {
  userModels.favoriteThisBook(
    req.session.id_user,
    req.params.bookid,
    (err, result) => {
      res.redirect(`/`);
    }
  );
};
const readThisbook = (req, res) => {
  userModels.readThisBook(
    req.session.id_user,
    req.params.bookid,
    (err, result) => {
      res.redirect(`/`);
    }
  );
};
const readingThisbook = (req, res) => {
  userModels.readingThisBook(
    req.session.id_user,
    req.params.bookid,
    (err, result) => {
      res.redirect(`/`);
    }
  );
};

const changepassword = (req, res) => {
  userModels.changeUserPasswordByID(
    req.session.id_user,
    req.params.password,
    (err, result) => {
      res.redirect(`/`);
    }
  );
};

const updateUser = (req, res) => {
  userModels.UpdateUserByEmail(
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
  userModels.deleteUserByEmail(req.body.email, (err, result) => {
    res.redirect("/adminpage");
  });
};

const givebackbook = (req, res) => {
  userModels.GiveBookBackByID(req.body.book, (err, result) => {
    res.redirect("/adminpage");
  });
};

const createnewbook = (req, res) => {
  userModels.getuserdatas(req.session.id_user, (err, datas) => {
    if (datas.admin === "yes") {
      res.render("newbook");
    } else {
      res.redirect("/");
    }
  });
};

const createthisbook = (req, res) => {
  userModels.getuserdatas(req.session.id_user, (err, datas) => {
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
      userModels.createBook(
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
