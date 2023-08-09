CREATE DATABASE  IF NOT EXISTS `Meals` ;
USE `Meals`;

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

