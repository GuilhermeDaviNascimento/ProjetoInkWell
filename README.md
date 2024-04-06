CREATE TABLE Livros (
    ID_Livro INT PRIMARY KEY,
    Titulo VARCHAR(100),
    Autor VARCHAR(100),
    Ano_Publicacao DATE,
    Disponivel BOOLEAN
);

CREATE TABLE Usuarios (
    ID_Usuario INT PRIMARY KEY,
    Nome VARCHAR(100),
    Email VARCHAR(100)
);

CREATE TABLE Emprestimos (
    ID_Emprestimo SERIAL PRIMARY KEY,
    ID_Usuario INT,
    ID_Livro INT,
    Data_Emprestimo DATE,
    Data_Devolucao DATE,
    Multa DECIMAL(5,2),
    FOREIGN KEY (ID_Usuario) REFERENCES Usuarios(ID_Usuario),
    FOREIGN KEY (ID_Livro) REFERENCES Livros(ID_Livro)
);

CREATE TABLE Reservas (
    ID_Reserva INT PRIMARY KEY,
    ID_Usuario INT,
    ID_Livro INT,
    Data_Reserva DATE,
    FOREIGN KEY (ID_Usuario) REFERENCES Usuarios(ID_Usuario),
    FOREIGN KEY (ID_Livro) REFERENCES Livros(ID_Livro)
);

NOTIFICAÇÃO 
SELECT * FROM Emprestimos WHERE Data_Devolucao < CURRENT_DATE;

Livros(ID_Livro, Titulo, Autor, Ano_Publicacao, Disponivel)
Usuarios(ID_Usuario, Nome, Email)
Emprestimos(ID_Emprestimo, ID_Usuario, ID_Livro, Data_Emprestimo, Data_Devolucao, Multa)
Reservas(ID_Reserva, ID_Usuario, ID_Livro, Data_Reserva)
Os relacionamentos são os seguintes:

Usuarios -> Emprestimos: Um usuário pode ter vários empréstimos, mas cada empréstimo é associado a um único usuário. Isso é um relacionamento de um para muitos (1:N) de Usuarios para Emprestimos.
Usuarios -> Reservas: Um usuário pode ter várias reservas, mas cada reserva é associada a um único usuário. Isso é um relacionamento de um para muitos (1:N) de Usuarios para Reservas.
Livros -> Emprestimos: Um livro pode ter vários empréstimos, mas cada empréstimo é associado a um único livro. Isso é um relacionamento de um para muitos (1:N) de Livros para Emprestimos.
Livros -> Reservas: Um livro pode ter várias reservas, mas cada reserva é associada a um único livro. Isso é um relacionamento de um para muitos (1:N) de Livros para Reservas.