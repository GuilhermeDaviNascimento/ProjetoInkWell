CREATE TABLE `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255),
  `author` varchar(255),
  `cape` text,
  `year` int,
  `description` text,
  `primary_color` varchar(255),
  `secound_color` varchar(255),
  `gender` varchar(255),
  `available` tinyint(1),
  `gender_2` varchar(255),
  `reserve` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
) 

CREATE TABLE `borrow` (
  `ID_Emprestimo` bigint unsigned NOT NULL AUTO_INCREMENT,
  `ID_Usuario` bigint unsigned,
  `ID_Livro` int,
  `Data_Emprestimo` date,
  `Data_Devolucao` date,
  `Multa` decimal(5,2),
  PRIMARY KEY (`ID_Emprestimo`),
  FOREIGN KEY (`ID_Usuario`) REFERENCES `users` (`id`),
  FOREIGN KEY (`ID_Livro`) REFERENCES `books` (`id`)
) 

CREATE TABLE `favorite_books` (
  `ID_Serial` bigint unsigned NOT NULL AUTO_INCREMENT,
  `ID_User` bigint unsigned NOT NULL,
  `ID_Book` int NOT NULL,
  PRIMARY KEY (`ID_Serial`),
  FOREIGN KEY (`ID_User`) REFERENCES `users` (`id`),
  FOREIGN KEY (`ID_Book`) REFERENCES `books` (`id`)
)

CREATE TABLE `fines` (
  `ID_USER` bigint unsigned NOT NULL,
  `ID_BOOK` int NOT NULL,
  `PRICE` int NOT NULL,
  PRIMARY KEY (`ID_USER`,`ID_BOOK`),
  FOREIGN KEY (`ID_USER`) REFERENCES `users` (`id`),
  FOREIGN KEY (`ID_BOOK`) REFERENCES `books` (`id`)
)
CREATE TABLE `read_books` (
  `ID_Read` bigint unsigned NOT NULL AUTO_INCREMENT,
  `ID_User` bigint unsigned NOT NULL,
  `ID_Book` int NOT NULL,
  PRIMARY KEY (`ID_Read`),
  FOREIGN KEY (`ID_User`) REFERENCES `users` (`id`),
  FOREIGN KEY (`ID_Book`) REFERENCES `books` (`id`)
)
CREATE TABLE `reading_books` (
  `ID_Reading` bigint unsigned NOT NULL AUTO_INCREMENT,
  `ID_User` bigint unsigned NOT NULL,
  `ID_Book` int NOT NULL,
  PRIMARY KEY (`ID_Reading`),
  FOREIGN KEY (`ID_User`) REFERENCES `users` (`id`),
  FOREIGN KEY (`ID_Book`) REFERENCES `books` (`id`)
) 
CREATE TABLE `reservas` (
  `ID_Reserva` bigint unsigned NOT NULL AUTO_INCREMENT,
  `ID_Usuario` bigint unsigned,
  `ID_Livro` int,
  `Data_Reserva` date,
  PRIMARY KEY (`ID_Reserva`),
  FOREIGN KEY (`ID_Usuario`) REFERENCES `users` (`id`),
  FOREIGN KEY (`ID_Livro`) REFERENCES `books` (`id`)
) 
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `fname` varchar(255),
  `lname` varchar(255),
  `username` varchar(255),
  `email` varchar(255),
  `password` varchar(255),
  `admin` varchar(255) DEFAULT 'no',
  PRIMARY KEY (`id`),
) 