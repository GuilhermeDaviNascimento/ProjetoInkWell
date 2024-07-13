-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: roundhouse.proxy.rlwy.net    Database: railway
-- ------------------------------------------------------
-- Server version	9.0.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `cape` text,
  `year` int DEFAULT NULL,
  `description` text,
  `primary_color` varchar(255) DEFAULT NULL,
  `secound_color` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `available` tinyint(1) DEFAULT NULL,
  `gender_2` varchar(255) DEFAULT NULL,
  `reserve` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=241 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (145,'It: A coisa','Stephen King','https://m.media-amazon.com/images/I/91g9Dvtf+jL.SL1500.jpg',2014,'Nesse clássico que inspirou os filmes da Warner, um grupo de amigos conhecido como Clube dos Otários aprende o real sentido da amizade, do amor, da confiança... e do medo. O mais profundo e tenebroso medo.','#fffef9','#E2E2DE','terror',0,'best-seller',1),(146,'O Iluminado','Stephen King','https://m.media-amazon.com/images/I/81Q+pJi4NjL.SY425.jpg',1977,'Um homem aceita um emprego de zelador durante o inverno em um hotel nas montanhas do Colorado e acaba se tornando influenciado pelo hotel a se tornar violento.','#d2d0d1','#BABABA','terror',0,'best-seller',1),(147,'Cem Anos de Solidão','Gabriel García Márquez','https://m.media-amazon.com/images/I/817esPahlrL.AC_UF1000,1000_QL80.jpg',1967,'A história da família Buendía em Macondo, uma cidade fictícia na Colômbia, abrangendo sete gerações e repleta de eventos mágicos e surreais.','#55a5a6','#4A8E8F','romance',1,'fiction',0),(148,'Harry Potter e a Pedra Filosofal','J. K. Rowling','https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTaPMH7Iyo6zPufus05jg34XOqV6rOp77-OLqp2YuaqSNtL4Lpuch8XliyoJFBe6vHoiAmLHkGJKKYI1AlGNLuPGxcgHvF08kYfsXDO1KQ&usqp=CAE',1997,'O livro segue a história de um jovem órfão chamado Harry Potter, que descobre que é um bruxo e é convidado a frequentar a Escola de Magia de Hogwarts.','#c39954','#85693A','fiction',1,'best-seller',0),(149,'A Culpa é das Estrelas','John Green','https://m.media-amazon.com/images/I/51M9IbBqxCL.AC_UF1000,1000_QL80.jpg',2012,'A história segue dois adolescentes, Hazel Grace Lancaster e Augustus Waters, que se apaixonam depois de se conhecerem em um grupo de apoio a pacientes com câncer.','#4488ff','#376AC5','romance',0,'best-seller',1),(150,'O Senhor dos Anéis: A Sociedade do Anel','J.R.R. Tolkien','https://m.media-amazon.com/images/I/81MZ8OjmQrL.AC_UF1000,1000_QL80.jpg',1954,'Uma grande aventura épica que segue Frodo Baggins e sua busca para destruir o Um Anel e derrotar o Senhor do Escuro Sauron.','#e1da55','#B5B045','fiction',0,'best-seller',0),(151,'1984','George Orwell','https://m.media-amazon.com/images/I/819js3EQwbL._AC_UF1000,1000_QL80_.jpg',1949,'Um romance distópico que descreve um mundo totalitário onde o governo controla todos os aspectos da vida dos cidadãos, incluindo seus pensamentos e sentimentos.','#aba64c','#787535','fiction',1,'best-seller',0),(152,'O Alquimista','Paulo Coelho','https://m.media-amazon.com/images/I/71-ifOPuOGL.AC_UF350,350_QL50.jpg',1988,'Um conto místico sobre um pastor andaluz chamado Santiago, que embarca em uma jornada para encontrar seu tesouro pessoal e realizar seus sonhos.','#FFFF00','#C8C800','fiction',0,'best-seller',0),(153,'As Crônicas de Gelo e Fogo','George R.R. Martin','https://m.media-amazon.com/images/I/91+1SUO3vUL._AC_UF1000,1000_QL80_.jpg',1996,'Uma série de fantasia épica que segue as intrigas políticas e batalhas pelo trono dos Sete Reinos de Westeros, enquanto um inverno rigoroso se aproxima.','#06455e','#053446','fiction',0,'best-seller',1),(154,'Orgulho e Preconceito','Jane Austen','https://bibliotecajaneausten.wordpress.com/wp-content/uploads/2022/01/orgulhopreconceito_antofagica.jpg',1813,'Um clássico da literatura que narra os encontros e desencontros entre Elizabeth Bennet e Mr. Darcy em meio à sociedade inglesa do século XIX.','#ffffff','#BABABA','romance',0,'best-seller',0),(155,'O Pequeno Príncipe','Antoine de Saint-Exupéry','https://m.media-amazon.com/images/I/71LJ4k-k9hL._AC_UF1000,1000_QL80_.jpg',1943,'Uma história encantadora sobre um jovem príncipe que viaja de planeta em planeta, encontrando personagens peculiares e aprendendo lições valiosas sobre amor e amizade.','#ffffff','#B2B2B2','fiction',1,'best-seller',0),(156,'A Sutil Arte de Ligar o F*da-se','Mark Manson','https://m.media-amazon.com/images/I/6175IU0qFgL.AC_UF1000,1000_QL80.jpg',2016,'Um livro de selfhelp que promove uma abordagem mais realista e descomplicada para a busca da felicidade e do sucesso na vida.','#FFA302','#C17B00','selfhelp',0,'best-seller',1),(157,'A Menina que Roubava Livros','Markus Zusak','https://m.media-amazon.com/images/I/61L+4OBhm-L.SL1000.jpg',2005,'Uma história comovente sobre uma menina chamada Liesel Meminger, que encontra consolo nos livros durante os tempos difíceis da Segunda Guerra Mundial na Alemanha.','#FFFFFF','#B2B2B2','fiction',1,'best-seller',0),(158,'Dom Quixote','Miguel de Cervantes','https://m.media-amazon.com/images/I/51XULadddlL.jpg',1605,'Uma obra-prima da literatura espanhola que narra as aventuras de um cavaleiro errante chamado Dom Quixote e seu fiel escudeiro Sancho Pança.','#a4b4a9','#7A847D','best-seller',1,NULL,0),(159,'As Vantagens de Ser Invisível','Stephen Chbosky','https://m.media-amazon.com/images/I/61RvpX3hkTL.AC_UF1000,1000_QL80.jpg',1999,'Um romance adolescente que aborda temas como amizade, amor, depressão e o processo de crescimento, através das experiências de um estudante introvertido chamado Charlie.','#c5d72d','#909C22','romance',0,'fiction',0),(160,'A Revolução dos Bichos','George Orwell','https://m.media-amazon.com/images/I/91BsZhxCRjL.AC_UF1000,1000_QL80.jpg',1945,'Uma fábula política que satiriza a Revolução Russa e critica o totalitarismo, retratando uma fazenda onde os animais expulsam os humanos e tentam governar por conta própria.','#12255f','#0B173B','fiction',1,NULL,0),(161,'O Poder do Hábito','Charles Duhigg','https://m.media-amazon.com/images/I/815iPX0SgkL.SL1500.jpg',2012,'Um livro que explora a ciência por trás dos hábitos e como podemos transformá-los para melhorar nossas vidas.','#f4e959','#BFB646','selfhelp',1,'ebook',0),(162,'A Coragem de Ser Imperfeito','Brené Brown','https://m.media-amazon.com/images/I/61rRRbfINJL.SL1006.jpg',2010,'Neste livro, Brené Brown explora o poder da vulnerabilidade e da autenticidade para viver uma vida mais plena e significativa.','#e1a96e','#A88055','selfhelp',0,'ebook',0),(163,'Sapiens: Uma Breve História da Humanidade','Yuval Noah Harari','https://m.media-amazon.com/images/I/71-ghLb8qML.SL1500.jpg',2011,'Um livro que explora a história da humanidade, desde os primórdios até os dias atuais, com insights fascinantes sobre a evolução da sociedade.','#f0e8dd','#B9B3AB','best-seller',1,'ebook',0),(164,'Mindset: A Nova Psicologia do Sucesso','Carol S. Dweck','https://m.media-amazon.com/images/I/71Ils+Co9fL.SL1500.jpg',2006,'Neste livro, Carol S. Dweck explora a importância do mindset (mentalidade) na determinação do sucesso e do fracasso.','#f5f0ea','#B7B3AE','selfhelp',0,'ebook',1),(165,'O Poder do Agora','Eckhart Tolle','https://m.media-amazon.com/images/I/71sh8JtiZbL.SL1500.jpg',1997,'Um guia espiritual que nos ensina a viver no presente e a transcender as preocupações do passado e do futuro.','#85a091','#61756A','selfhelp',1,'ebook',0),(166,'Pai Rico, Pai Pobre','Robert T. Kiyosaki','https://m.media-amazon.com/images/I/81ALgAW3gHL.SL1500.jpg',1997,'Um livro que explora as diferenças na mentalidade financeira entre os ricos e os pobres, e oferece conselhos práticos sobre como alcançar a independência financeira.','#8a5c8a','#5E3F5E','selfhelp',0,'ebook',1),(167,'O Milagre da Manhã','Hal Elrod','https://m.media-amazon.com/images/I/61gNWfoYghL.SL1484.jpg',2012,'Um guia para transformar sua vida através de uma rotina matinal poderosa que inclui práticas como meditação, exercícios físicos e afirmações positivas.','#FBC02D','#AE851F','selfhelp',1,'ebook',0),(168,'Jujutsu Kaisen','Gege Akutami','https://m.media-amazon.com/images/I/81TmHlRleJL._AC_UF1000,1000_QL80_.jpg',2019,'Itadori Yuuji, um estudante do colegial com uma capacidade física única, tem como rotina visitar seu avô que está hospitalizado. Porém, um dia, o selo de um \"objeto amaldiçoado\" escondido em sua escola é rompido, fazendo surgir criaturas assustadoras. Para salvar seus colegas ele parte em direção ao colégio, quando algo inesperado acontece...!','#1A7077','#104448','manga',1,'null',0),(240,'Demon Slayer - Kimetsu No Yaiba Vol. 1','Koyoharu Gotouge','https://www.oportavoz.com/wp-content/uploads/2022/01/demon-slayer-kimetsu-no-yaiba-vol-1.jpg',2022,'Estamos na Era Taishou. O dia-a-dia pacato de Tanjiro, um gentil garoto que vende carvão, se transforma radicalmente quando sua família é assassinada por um demônio. A única sobrevivente é Nezuko, sua irmã mais nova. Porém, agora, ela se transformou em um Oni. Diante dessa tragédia, os dois irmãos partem em uma jornada para derrotar o Oni que matou sua mãe e irmãozinhos. E assim tem início uma aventura sanguinolenta de espadachins!','#60b7a2','#488475','manga',NULL,'fantasy',0);
/*!40000 ALTER TABLE `books` ENABLE KEYS */;

--
-- Table structure for table `borrow`
--

DROP TABLE IF EXISTS `borrow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `borrow` (
  `ID_Emprestimo` bigint unsigned NOT NULL AUTO_INCREMENT,
  `ID_Usuario` bigint unsigned DEFAULT NULL,
  `ID_Livro` int DEFAULT NULL,
  `Data_Emprestimo` date DEFAULT NULL,
  `Data_Devolucao` date DEFAULT NULL,
  `Multa` decimal(5,2) DEFAULT NULL,
  PRIMARY KEY (`ID_Emprestimo`),
  UNIQUE KEY `ID_Emprestimo` (`ID_Emprestimo`),
  KEY `ID_Usuario` (`ID_Usuario`),
  KEY `ID_Livro` (`ID_Livro`),
  CONSTRAINT `borrow_ibfk_1` FOREIGN KEY (`ID_Usuario`) REFERENCES `users` (`id`),
  CONSTRAINT `borrow_ibfk_2` FOREIGN KEY (`ID_Livro`) REFERENCES `books` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `borrow`
--

/*!40000 ALTER TABLE `borrow` DISABLE KEYS */;
INSERT INTO `borrow` VALUES (25,1,146,'2024-04-08','2024-05-08',10.00),(26,1,156,'2024-04-08','2024-05-08',10.00),(27,2,153,'2024-04-08','2024-05-08',10.00),(28,2,149,'2024-04-08','2024-05-08',10.00),(29,2,166,'2024-04-08','2024-05-08',10.00),(30,3,152,'2024-04-10','2024-05-10',10.00),(34,1,150,'2024-07-09','2024-07-12',10.00);
/*!40000 ALTER TABLE `borrow` ENABLE KEYS */;

--
-- Table structure for table `favorite_books`
--

DROP TABLE IF EXISTS `favorite_books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorite_books` (
  `ID_Serial` bigint unsigned NOT NULL AUTO_INCREMENT,
  `ID_User` bigint unsigned NOT NULL,
  `ID_Book` int NOT NULL,
  PRIMARY KEY (`ID_Serial`),
  UNIQUE KEY `ID_Serial` (`ID_Serial`),
  KEY `ID_User` (`ID_User`),
  KEY `ID_Book` (`ID_Book`),
  CONSTRAINT `favorite_books_ibfk_1` FOREIGN KEY (`ID_User`) REFERENCES `users` (`id`),
  CONSTRAINT `favorite_books_ibfk_2` FOREIGN KEY (`ID_Book`) REFERENCES `books` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorite_books`
--

/*!40000 ALTER TABLE `favorite_books` DISABLE KEYS */;
INSERT INTO `favorite_books` VALUES (1,1,145),(2,1,149),(3,12,153);
/*!40000 ALTER TABLE `favorite_books` ENABLE KEYS */;

--
-- Table structure for table `fines`
--

DROP TABLE IF EXISTS `fines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fines` (
  `ID_USER` bigint unsigned NOT NULL,
  `ID_BOOK` int NOT NULL,
  `PRICE` int NOT NULL,
  PRIMARY KEY (`ID_USER`,`ID_BOOK`),
  KEY `fines_ibfk_2` (`ID_BOOK`),
  CONSTRAINT `fines_ibfk_1` FOREIGN KEY (`ID_USER`) REFERENCES `users` (`id`),
  CONSTRAINT `fines_ibfk_2` FOREIGN KEY (`ID_BOOK`) REFERENCES `books` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fines`
--

/*!40000 ALTER TABLE `fines` DISABLE KEYS */;
INSERT INTO `fines` VALUES (1,146,10),(1,150,10),(1,156,10),(2,149,10),(2,153,10),(2,166,10);
/*!40000 ALTER TABLE `fines` ENABLE KEYS */;

--
-- Table structure for table `read_books`
--

DROP TABLE IF EXISTS `read_books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `read_books` (
  `ID_Read` bigint unsigned NOT NULL AUTO_INCREMENT,
  `ID_User` bigint unsigned NOT NULL,
  `ID_Book` int NOT NULL,
  PRIMARY KEY (`ID_Read`),
  UNIQUE KEY `ID_Read` (`ID_Read`),
  KEY `ID_User` (`ID_User`),
  KEY `ID_Book` (`ID_Book`),
  CONSTRAINT `read_books_ibfk_1` FOREIGN KEY (`ID_User`) REFERENCES `users` (`id`),
  CONSTRAINT `read_books_ibfk_2` FOREIGN KEY (`ID_Book`) REFERENCES `books` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `read_books`
--

/*!40000 ALTER TABLE `read_books` DISABLE KEYS */;
INSERT INTO `read_books` VALUES (1,1,146),(2,1,148),(3,1,150),(4,1,153),(5,1,148),(6,1,148);
/*!40000 ALTER TABLE `read_books` ENABLE KEYS */;

--
-- Table structure for table `reading_books`
--

DROP TABLE IF EXISTS `reading_books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reading_books` (
  `ID_Reading` bigint unsigned NOT NULL AUTO_INCREMENT,
  `ID_User` bigint unsigned NOT NULL,
  `ID_Book` int NOT NULL,
  PRIMARY KEY (`ID_Reading`),
  UNIQUE KEY `ID_Reading` (`ID_Reading`),
  KEY `ID_User` (`ID_User`),
  KEY `ID_Book` (`ID_Book`),
  CONSTRAINT `reading_books_ibfk_1` FOREIGN KEY (`ID_User`) REFERENCES `users` (`id`),
  CONSTRAINT `reading_books_ibfk_2` FOREIGN KEY (`ID_Book`) REFERENCES `books` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reading_books`
--

/*!40000 ALTER TABLE `reading_books` DISABLE KEYS */;
INSERT INTO `reading_books` VALUES (1,1,151);
/*!40000 ALTER TABLE `reading_books` ENABLE KEYS */;

--
-- Table structure for table `reservas`
--

DROP TABLE IF EXISTS `reservas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservas` (
  `ID_Reserva` bigint unsigned NOT NULL AUTO_INCREMENT,
  `ID_Usuario` bigint unsigned DEFAULT NULL,
  `ID_Livro` int DEFAULT NULL,
  `Data_Reserva` date DEFAULT NULL,
  PRIMARY KEY (`ID_Reserva`),
  UNIQUE KEY `ID_Reserva` (`ID_Reserva`),
  KEY `ID_Usuario` (`ID_Usuario`),
  KEY `ID_Livro` (`ID_Livro`),
  CONSTRAINT `reservas_ibfk_1` FOREIGN KEY (`ID_Usuario`) REFERENCES `users` (`id`),
  CONSTRAINT `reservas_ibfk_2` FOREIGN KEY (`ID_Livro`) REFERENCES `books` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservas`
--

/*!40000 ALTER TABLE `reservas` DISABLE KEYS */;
INSERT INTO `reservas` VALUES (2,1,145,'2024-05-06'),(3,1,146,'2024-05-08'),(4,1,156,'2024-05-08'),(5,2,153,'2024-05-08'),(6,3,166,'2024-05-08'),(7,7,164,'2024-06-02'),(8,12,149,'2024-05-08');
/*!40000 ALTER TABLE `reservas` ENABLE KEYS */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `fname` varchar(255) DEFAULT NULL,
  `lname` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `admin` varchar(255) DEFAULT 'no',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `id_2` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Guilherme','Davi','admin','admin@gmail.com','admin','yes'),(2,'vinicius','Barros','vinicius','vinicius@gmail.com','vini','no'),(3,'nyelzada','massa','nyelkk','catl1@aluno.ifal.edu.br','12345','no'),(5,'Guilherme','Davi','Gui','guiguidavi9@gmail.com','123','no'),(7,'nyelzada','massa','nyel_kk','nyel@desgraca.com','mcpesilva123','no'),(8,'nyelzada','massa','nyel','sas@gg','1234','no'),(11,'a','a','guilherme3designer@gmail.com','guilherme3designer@gmail.com','123','no'),(12,'Emanuel','carlos','eman','emanuel2@gmail.com','12','no');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

--
-- Dumping routines for database 'railway'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-13 12:57:48
