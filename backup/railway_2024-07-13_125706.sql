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

-- Dump completed on 2024-07-13 12:57:33
