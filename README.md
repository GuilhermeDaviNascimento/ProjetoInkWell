Integrantes:

Guilherme Davi: Desenvolvedor Backend, responsável pelo auxílio no FrontEnd e banco de dados.
Anthony Sales: Desenvolvedor FrontEnd, responsável pelas telas de login e registro, além de encontrar bugs na aplicação.
Emanuel Carlos: Desenvolvedor, responsável por criar e popular o banco de dados.
José Adolfo: Desenvolvedor FrontEnd, responsável pela interface e telas do site.

Perguntas:

1. Com os conhecimentos adquiridos nas aulas de POO, conseguimos modularizar nosso código, o que ajuda na segurança e organização, além de ser essencial para a conexão com nosso banco de dados.

2. Utilizamos o serviço Railway para criar um banco de dados em nuvem e empregamos as variáveis fornecidas por eles para estabelecer uma conexão dentro do arquivo ./bd.js, utilizando o padrão DAO e os conhecimentos de POO.

3. Sim, é possível adicionar o mesmo livro mais de uma vez nos favoritos, lidos e lendo.

4 .
    Guilherme: Foi uma experiência incrível; foi como um teste de todos os conhecimentos adquiridos até agora no curso. A greve foi o meu maior desafio, pois começamos o desenvolvimento antes dela e, ao retornar às aulas, estava completamente perdido em tudo que já havíamos feito.

    Adolfo: Minha experiência foi ótima, trabalhei com meus amigos em equipe, e obtive bastante conhecimento que não tinha.  Minha maior dificuldade foi a falta de tempo, porque meu dia a dia na greve foi bastante corrido, e tive que me desdobrar.

    Anthony: Minha maior dificuldade no projeto foi alinhar minha ideia com a dos outros participantes visto que cada um tinha sua maneira de fazer o código ou resolver algum problema.

    Emanuel: Foi um projeto de bastante aprendizado junto aos meus companheiros, desenvolvemos muito conhecimento durante o desenvolvimento da aplicação.
    A minha maior dificuldade foi trabalhar em equipe, dividindo responsabilidades e compreender o codigo que os meus parceiros estavam a desenvolver.
    Além do mais, nunca tive que lidar com tamanha responsabilidade de um projeto com essa dimensão, que envolvesse três matérias. E isso foi de grande aprendizado e experiência.

Referências:
Dribbble

---

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
SELECT \* FROM Emprestimos WHERE Data_Devolucao < CURRENT_DATE;

Livros(ID_Livro, Titulo, Autor, Ano_Publicacao, Disponivel)
Usuarios(ID_Usuario, Nome, Email)
Emprestimos(ID_Emprestimo, ID_Usuario, ID_Livro, Data_Emprestimo, Data_Devolucao, Multa)
Reservas(ID_Reserva, ID_Usuario, ID_Livro, Data_Reserva)
Os relacionamentos são os seguintes:

Usuarios -> Emprestimos: Um usuário pode ter vários empréstimos, mas cada empréstimo é associado a um único usuário. Isso é um relacionamento de um para muitos (1:N) de Usuarios para Emprestimos.
Usuarios -> Reservas: Um usuário pode ter várias reservas, mas cada reserva é associada a um único usuário. Isso é um relacionamento de um para muitos (1:N) de Usuarios para Reservas.
Livros -> Emprestimos: Um livro pode ter vários empréstimos, mas cada empréstimo é associado a um único livro. Isso é um relacionamento de um para muitos (1:N) de Livros para Emprestimos.
Livros -> Reservas: Um livro pode ter várias reservas, mas cada reserva é associada a um único livro. Isso é um relacionamento de um para muitos (1:N) de Livros para Reservas.
