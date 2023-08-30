-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 30-08-2023 a las 07:19:25
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pizzeria la esquina`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'Nueva creación de Pizza', '\"Hawaiiana Picante\"', 'Presentamos nuestra última creación: una deliciosa pizza hawaiana con un giro picante. Combinamos piña fresca, jamón ahumado, jalapeños y salsa de barbacoa casera para darle un toque único a tus papilas gustativas.'),
(2, 'Pizza del mes', 'Mediterránea Fresca', 'Este mes, disfruta de nuestra pizza del mes inspirada en los sabores mediterráneos. Con aceitunas Kalamata, tomates secados al sol, espinacas frescas y queso feta, te transportará directamente a las costas del Mediterráneo.'),
(3, 'Colaboración con Grido', 'Postres irresistibles!', '¿Tienes una idea para la próxima gran pizza? Participa en nuestro concurso de diseño de pizza y podrías ganar pizzas gratis por un año. ¡Tu creatividad podría convertirse en nuestro próximo éxito!'),
(4, 'Noche de Trivia y Pizzas!!', 'Jueves a las 7 PM', ' Únete a nosotros cada jueves a las 7 PM para una emocionante noche de trivia con premios y, por supuesto, deliciosas pizzas. ¡Demuestra tus conocimientos mientras disfrutas de una gran comida!');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
