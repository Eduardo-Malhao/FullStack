CREATE DATABASE  IF NOT EXISTS `Meals` ;
USE `Meals`;

--
-- Table structure for table `meals`
--

DROP TABLE IF EXISTS `meals`;

CREATE TABLE `meals` (
  `id` int NOT NULL AUTO_INCREMENT,
  `meals_name` varchar(255) NOT NULL,
  `meals_category` varchar(255) NOT NULL,
  `meals_area` varchar(255),
  `meals_Instructions` varchar(255) NOT NULL,
  `meals_image` varchar(255),
  `meals_tag` varchar(255),
  `meals_video` varchar(255),
  `meals_ingredients` JSON,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Insert values for table `meals`
--

-- INSERT INTO `teams` VALUES
--   (1,'Avaí/Kindermann'),(2,'Bahia'),(3,'Botafogo'),
--   (4,'Corinthians'),(5,'Cruzeiro'),(6,'Ferroviária'),
--   (7,'Flamengo'),(8,'Grêmio'),(9,'Internacional'),
--   (10,'Minas Brasília'),(11,'Napoli-SC'),(12,'Palmeiras'),
--   (13,'Real Brasília'),(14,'Santos'),(15,'São José-SP'),
--   (16,'São Paulo');

--
-- Table structure for table `drinks`
--

DROP TABLE IF EXISTS `drinks`;

CREATE TABLE `drinks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `drink_name` varchar(255) NOT NULL,
  `drink_category` varchar(255) NOT NULL,
  `drink_glass` varchar(255),
  `alcoholic` varchar(255),
  `drink_Instructions` varchar(255) NOT NULL,
  `drink_image` varchar(255),
  `drink_tag` varchar(255),
  `drink_video` varchar(255),
  `drinks_ingredients` JSON,

  PRIMARY KEY (`id`),
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


--
-- Insert values for table `drinks`
--

-- INSERT INTO `drinks` VALUES
--   (1,16,1,8,1,0),(2,9,1,14,1,0),(3,4,3,11,0,0),(4,3,0,2,0,0),(5,7,1,10,1,0),
--   (6,5,1,13,1,0),(7,12,2,6,2,0),(8,15,0,1,1,0),(9,1,0,12,3,0),(10,2,0,9,2,0),
--   (11,13,1,3,0,0),(12,6,0,4,1,0),(13,8,2,5,1,0),(14,14,2,16,1,0),(15,10,0,15,1,0),
--   (16,11,0,7,0,0),(17,1,2,8,3,0),(18,12,4,5,2,0),(19,11,2,2,2,0),(20,7,0,9,1,0),
--   (21,6,3,13,1,0),(22,4,3,3,1,0),(23,15,2,16,3,0),(24,10,2,14,2,0),(25,2,0,6,1,0),
--   (26,13,1,1,0,0),(27,5,1,15,2,0),(28,16,3,7,0,0),(29,9,0,4,4,0),(30,3,0,12,4,0),
--   (31,8,2,10,0,0),(32,14,5,11,1,0),(33,1,1,16,1,0),(34,9,3,6,1,0),(35,10,1,5,3,0),
--   (36,2,0,7,1,0),(37,15,0,13,1,0),(38,14,2,4,1,0),(39,3,2,11,0,0),(40,12,4,8,1,0);

