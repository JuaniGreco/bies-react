-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 11-09-2021 a las 20:48:24
-- Versión del servidor: 8.0.21
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bies-react`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estacionamiento`
--

DROP TABLE IF EXISTS `estacionamiento`;
CREATE TABLE IF NOT EXISTS `estacionamiento` (
  `idEstacionamiento` int NOT NULL AUTO_INCREMENT,
  `idUsuario` int NOT NULL,
  `idPlayaDeEstacionamiento` int NOT NULL,
  `idPlayaDeEstacionamientoHorario` int NOT NULL,
  `fechaEstacionamiento` date NOT NULL,
  `horaInicioEstacionamiento` time NOT NULL DEFAULT '00:00:00',
  `horaFinEstacionamiento` time NOT NULL DEFAULT '00:00:00',
  PRIMARY KEY (`idEstacionamiento`),
  KEY `fk_idPlayaDeEstacionamiento` (`idPlayaDeEstacionamiento`),
  KEY `fk_idPlayaDeEstacionamientoHorario` (`idPlayaDeEstacionamientoHorario`),
  KEY `fk_idUsuario` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `playadeestacionamiento`
--

DROP TABLE IF EXISTS `playadeestacionamiento`;
CREATE TABLE IF NOT EXISTS `playadeestacionamiento` (
  `idPlayaDeEstacionamiento` int NOT NULL AUTO_INCREMENT,
  `nombrePlayaDeEstacionamiento` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `ubicacion` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `capacidad` int NOT NULL,
  `observaciones` varchar(2000) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `mapa` varchar(10000) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`idPlayaDeEstacionamiento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `playadeestacionamientohorario`
--

DROP TABLE IF EXISTS `playadeestacionamientohorario`;
CREATE TABLE IF NOT EXISTS `playadeestacionamientohorario` (
  `idHorario` int NOT NULL AUTO_INCREMENT,
  `diaSemana` int NOT NULL,
  `horaInicio` time NOT NULL,
  `horaFin` time NOT NULL,
  PRIMARY KEY (`idHorario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `idRol` int NOT NULL AUTO_INCREMENT,
  `nombreRol` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`idRol`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`idRol`, `nombreRol`) VALUES
(1, 'Administrador'),
(2, 'Usuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `idUsuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `dni` int NOT NULL,
  `password` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `idRol` int NOT NULL DEFAULT '2',
  PRIMARY KEY (`idUsuario`),
  KEY `fk_idRol` (`idRol`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `nombre`, `dni`, `password`, `email`, `idRol`) VALUES
(1, 'Guido ', 37774564, 'guido', 'guido_magi@hotmail.com', 1),
(2, 'juani', 37153076, '1234', 'email@email.com', 2);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `estacionamiento`
--
ALTER TABLE `estacionamiento`
  ADD CONSTRAINT `fk_idPlayaDeEstacionamiento` FOREIGN KEY (`idPlayaDeEstacionamiento`) REFERENCES `playadeestacionamiento` (`idPlayaDeEstacionamiento`),
  ADD CONSTRAINT `fk_idPlayaDeEstacionamientoHorario` FOREIGN KEY (`idPlayaDeEstacionamientoHorario`) REFERENCES `playadeestacionamientohorario` (`idHorario`),
  ADD CONSTRAINT `fk_idUsuario` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_idRol` FOREIGN KEY (`idRol`) REFERENCES `roles` (`idRol`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
