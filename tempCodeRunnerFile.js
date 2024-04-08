const mysql = require('mysql2'); // LEMBRAR: $ npm install mysql

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
    host: `roundhouse.proxy.rlwy.net`,
    user: `root`,
    port: `14015`,
    password: `dfbnhGXrIghazlBtytpEybPvOrfuxagP`,
    database: `railway`
});
// Conexão com o banco de dados
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão bem-sucedida ao banco de dados MySQL');
});

const books = [
    {
        id: 1,
        name: "It: A coisa",
        author: "Stephen King",
        cape: "https://m.media-amazon.com/images/I/91g9Dvtf+jL.SL1500.jpg",
        year: 2014,
        description: "Nesse clássico que inspirou os filmes da Warner, um grupo de amigos conhecido como Clube dos Otários aprende o real sentido da amizade, do amor, da confiança... e do medo. O mais profundo e tenebroso medo.",
        primary_color: "#fffef9",
        secondary_color: "#ba252b",
        gender: "terror",
        gender_2: "best-seller"
    },
    {
        id: 2,
        name: "O Iluminado",
        author: "Stephen King",
        cape: "https://m.media-amazon.com/images/I/81Q+pJi4NjL.SY425.jpg",
        year: 1977,
        description: "Um homem aceita um emprego de zelador durante o inverno em um hotel nas montanhas do Colorado e acaba se tornando influenciado pelo hotel a se tornar violento.",
        primary_color: "#d2d0d1",
        secondary_color: "#891b15",
        gender: "terror",
        gender_2: "best-seller"
    },
    {
        id: 3,
        name: "Cem Anos de Solidão",
        author: "Gabriel García Márquez",
        cape: "https://m.media-amazon.com/images/I/817esPahlrL.AC_UF1000,1000_QL80.jpg",
        year: 1967,
        description: "A história da família Buendía em Macondo, uma cidade fictícia na Colômbia, abrangendo sete gerações e repleta de eventos mágicos e surreais.",
        primary_color: "#55a5a6",
        secondary_color: "#e4e871",
        gender: "romance",
        gender_2: "fiction"
    },
    {
        id: 4,
        name: "Harry Potter e a Pedra Filosofal",
        author: "J. K. Rowling",
        cape: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTaPMH7Iyo6zPufus05jg34XOqV6rOp77-OLqp2YuaqSNtL4Lpuch8XliyoJFBe6vHoiAmLHkGJKKYI1AlGNLuPGxcgHvF08kYfsXDO1KQ&usqp=CAE",
        year: 1997,
        description: "O livro segue a história de um jovem órfão chamado Harry Potter, que descobre que é um bruxo e é convidado a frequentar a Escola de Magia de Hogwarts.",
        primary_color: "#c39954",
        secondary_color: "#988ba6",
        gender: "fiction",
        gender_2: "best-seller"
    },
    {
        id: 5,
        name: "A Culpa é das Estrelas",
        author: "John Green",
        cape: "https://m.media-amazon.com/images/I/51M9IbBqxCL.AC_UF1000,1000_QL80.jpg",
        year: 2012,
        description: "A história segue dois adolescentes, Hazel Grace Lancaster e Augustus Waters, que se apaixonam depois de se conhecerem em um grupo de apoio a pacientes com câncer.",
        primary_color: "#4488ff",
        secondary_color: "#f0f0f0",
        gender: "romance",
        gender_2: "best-seller"
    },
    {
        id: 6,
        name: "O Senhor dos Anéis: A Sociedade do Anel",
        author: "J.R.R. Tolkien",
        cape: "https://m.media-amazon.com/images/I/81MZ8OjmQrL.AC_UF1000,1000_QL80.jpg",
        year: 1954,
        description: "Uma grande aventura épica que segue Frodo Baggins e sua busca para destruir o Um Anel e derrotar o Senhor do Escuro Sauron.",
        primary_color: "#e1da55",
        secondary_color: "#50635d",
        gender: "fiction",
        gender_2: "best-seller"
    },
    {
        id: 7,
        name: "1984",
        author: "George Orwell",
        cape: "https://m.media-amazon.com/images/I/51tB3WdAyrL.jpg",
        year: 1949,
        description: "Um romance distópico que descreve um mundo totalitário onde o governo controla todos os aspectos da vida dos cidadãos, incluindo seus pensamentos e sentimentos.",
        primary_color: "#aba64c",
        secondary_color: "#7ea987",
        gender: "fiction",
        gender_2: "best-seller"
    },
    {
        id: 8,
        name: "O Alquimista",
        author: "Paulo Coelho",
        cape: "https://m.media-amazon.com/images/I/71-ifOPuOGL.AC_UF350,350_QL50.jpg",
        year: 1988,
        description: "Um conto místico sobre um pastor andaluz chamado Santiago, que embarca em uma jornada para encontrar seu tesouro pessoal e realizar seus sonhos.",
        primary_color: "#FFFF00",
        secondary_color: "#8B4513",
        gender: "fiction",
        gender_2: "best-seller"
    },
    {
        id: 9,
        name: "As Crônicas de Gelo e Fogo",
        author: "George R.R. Martin",
        cape: "https://m.media-amazon.com/images/I/81oghpBoNhL.AC_UY218.jpg",
        year: 1996,
        description: "Uma série de fantasia épica que segue as intrigas políticas e batalhas pelo trono dos Sete Reinos de Westeros, enquanto um inverno rigoroso se aproxima.",
        primary_color: "#06455e",
        secondary_color: "#4ab7d8",
        gender: "fiction",
        gender_2: "best-seller"
    },
    {
        id: 10,
        name: "Orgulho e Preconceito",
        author: "Jane Austen",
        cape: "https://bibliotecajaneausten.wordpress.com/wp-content/uploads/2022/01/orgulhopreconceito_antofagica.jpg",
        year: 1813,
        description: "Um clássico da literatura que narra os encontros e desencontros entre Elizabeth Bennet e Mr. Darcy em meio à sociedade inglesa do século XIX.",
        primary_color: "#ffffff",
        secondary_color: "#008000",
        gender: "romance",
        gender_2: "best-seller"
    },
    {
        id: 11,
        name: "O Pequeno Príncipe",
        author: "Antoine de Saint-Exupéry",
        cape: "https://m.media-amazon.com/images/I/51sTJ1+5eXL.jpg",
        year: 1943,
        description: "Uma história encantadora sobre um jovem príncipe que viaja de planeta em planeta, encontrando personagens peculiares e aprendendo lições valiosas sobre amor e amizade.",
        primary_color: "#ffffff",
        secondary_color: "#d8cecf",
        gender: "fiction",
        gender_2: "best-seller"
    },
    {
        id: 12,
        name: "A Sutil Arte de Ligar o F*da-se",
        author: "Mark Manson",
        cape: "https://m.media-amazon.com/images/I/6175IU0qFgL.AC_UF1000,1000_QL80.jpg",
        year: 2016,
        description: "Um livro de autoajuda que promove uma abordagem mais realista e descomplicada para a busca da felicidade e do sucesso na vida.",
        primary_color: "#FFA302",
        secondary_color: "#ffffff",
        gender: "autoajuda",
        gender_2: "best-seller"
    },
    {
        id: 13,
        name: "A Menina que Roubava Livros",
        author: "Markus Zusak",
        cape: "https://m.media-amazon.com/images/I/61L+4OBhm-L.SL1000.jpg",
        year: 2005,
        description: "Uma história comovente sobre uma menina chamada Liesel Meminger, que encontra consolo nos livros durante os tempos difíceis da Segunda Guerra Mundial na Alemanha.",
        primary_color: "#FFFFFF",
        secondary_color: "#000000",
        gender: "fiction",
        gender_2: "best-seller"
    },
    {
        id: 14,
        name: "Dom Quixote",
        author: "Miguel de Cervantes",
        cape: "https://m.media-amazon.com/images/I/51XULadddlL.jpg",
        year: 1605,
        description: "Uma obra-prima da literatura espanhola que narra as aventuras de um cavaleiro errante chamado Dom Quixote e seu fiel escudeiro Sancho Pança.",
        primary_color: "#a4b4a9",
        secondary_color: "#987b41",
        gender: "best-seller",
        gender_2: null
    },
    {
        id: 15,
        name: "As Vantagens de Ser Invisível",
        author: "Stephen Chbosky",
        cape: "https://m.media-amazon.com/images/I/61RvpX3hkTL.AC_UF1000,1000_QL80.jpg",
        year: 1999,
        description: "Um romance adolescente que aborda temas como amizade, amor, depressão e o processo de crescimento, através das experiências de um estudante introvertido chamado Charlie.",
        primary_color: "#c5d72d",
        secondary_color: "#0a200d",
        gender: "romance",
        gender_2: "fiction"
    },
    {
        id: 16,
        name: "A Revolução dos Bichos",
        author: "George Orwell",
        cape: "https://m.media-amazon.com/images/I/91BsZhxCRjL.AC_UF1000,1000_QL80.jpg",
        year: 1945,
        description: "Uma fábula política que satiriza a Revolução Russa e critica o totalitarismo, retratando uma fazenda onde os animais expulsam os humanos e tentam governar por conta própria.",
        primary_color: "#12255f",
        secondary_color: "#c9bca9",
        gender: "fiction",
        gender_2: null
    },
    {
        id: 17,
        name: "O Poder do Hábito",
        author: "Charles Duhigg",
        cape: "https://m.media-amazon.com/images/I/815iPX0SgkL.SL1500.jpg",
        year: 2012,
        description: "Um livro que explora a ciência por trás dos hábitos e como podemos transformá-los para melhorar nossas vidas.",
        primary_color: "#f4e959",
        secondary_color: "#da2719",
        gender: "autoajuda",
        gender_2: "ebook"
    },
    {
        id: 18,
        name: "A Coragem de Ser Imperfeito",
        author: "Brené Brown",
        cape: "https://m.media-amazon.com/images/I/61rRRbfINJL.SL1006.jpg",
        year: 2010,
        description: "Neste livro, Brené Brown explora o poder da vulnerabilidade e da autenticidade para viver uma vida mais plena e significativa.",
        primary_color: "#e1a96e",
        secondary_color: "#01825c",
        gender: "autoajuda",
        gender_2: "ebook"
    },
    {
        id: 19,
        name: "Sapiens: Uma Breve História da Humanidade",
        author: "Yuval Noah Harari",
        cape: "https://m.media-amazon.com/images/I/71-ghLb8qML.SL1500.jpg",
        year: 2011,
        description: "Um livro que explora a história da humanidade, desde os primórdios até os dias atuais, com insights fascinantes sobre a evolução da sociedade.",
        primary_color: "#f0e8dd",
        secondary_color: "#c82520",
        gender: "best-seller",
        gender_2: "ebook"
    },
    {
        id: 20,
        name: "Mindset: A Nova Psicologia do Sucesso",
        author: "Carol S. Dweck",
        cape: "https://m.media-amazon.com/images/I/71Ils+Co9fL.SL1500.jpg",
        year: 2006,
        description: "Neste livro, Carol S. Dweck explora a importância do mindset (mentalidade) na determinação do sucesso e do fracasso.",
        primary_color: "#f5f0ea",
        secondary_color: "#e8c0c0",
        gender: "autoajuda",
        gender_2: "ebook"
    },
    {
        id: 21,
        name: "O Poder do Agora",
        author: "Eckhart Tolle",
        cape: "https://m.media-amazon.com/images/I/71sh8JtiZbL.SL1500.jpg",
        year: 1997,
        description: "Um guia espiritual que nos ensina a viver no presente e a transcender as preocupações do passado e do futuro.",
        primary_color: "#85a091",
        secondary_color: "#6086b3",
        gender: "autoajuda",
        gender_2: "ebook"
    },
    {
        id: 22,
        name: "Pai Rico, Pai Pobre",
        author: "Robert T. Kiyosaki",
        cape: "https://m.media-amazon.com/images/I/81ALgAW3gHL.SL1500.jpg",
        year: 1997,
        description: "Um livro que explora as diferenças na mentalidade financeira entre os ricos e os pobres, e oferece conselhos práticos sobre como alcançar a independência financeira.",
        primary_color: "#8a5c8a",
        secondary_color: "#7a685c",
        gender: "autoajuda",
        gender_2: "ebook"
    },
    {
        id: 23,
        name: "A Arte da Guerra",
        author: "Sun Tzu",
        cape: "https://m.media-amazon.com/images/I/51Fe45NGwkL.SL1360.jpg",
        year: "Século V a.C.",
        description: "Um clássico da estratégia militar que oferece insights atemporais sobre como vencer batalhas e alcançar o sucesso.",
        primary_color: "#120c0c",
        secondary_color: "#963338",
        gender: "estratégia",
        gender_2: "ebook"
    },
    {
        id: 24,
        name: "O Milagre da Manhã",
        author: "Hal Elrod",
        cape: "https://m.media-amazon.com/images/I/61gNWfoYghL.SL1484.jpg",
        year: 2012,
        description: "Um guia para transformar sua vida através de uma rotina matinal poderosa que inclui práticas como meditação, exercícios físicos e afirmações positivas.",
        primary_color: "#FBC02D",
        secondary_color: "#fcec7d",
        gender: "autoajuda",
        gender_2: "ebook"
    },
];

function addUser(name, author, cape, year, description, primary_color, secound_color, secound_color, gender, gender_2) {
    const query = `INSERT INTO users (name, author, cape, year, description, primary_color, secound_color, gender, gender_2, available)VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1, ?)`;
    db.query(query, [name, author, cape, year, description, primary_color, secound_color, secound_color, gender, gender_2], (err, results) => {
        if (err) {
            console.error('Error searching books:', err);
            return;
        }
    });
}

books.forEach(book => {
    addUser(book.name, book.author, book.cape, book.year, book.description, book.primary_color, book.secound_color, book.gender, book.gender_2)
});
module.exports = connection;