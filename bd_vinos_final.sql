-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-07-2024 a las 02:43:30
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_vinos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bodegas`
--

CREATE TABLE `bodegas` (
  `id_bodega` int(11) NOT NULL,
  `nombre` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `bodegas`
--

INSERT INTO `bodegas` (`id_bodega`, `nombre`) VALUES
(1, 'Los Toneles'),
(2, 'Estancia Mendoza'),
(3, 'Bianchi');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id_categoria` int(11) NOT NULL,
  `Categoria` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id_categoria`, `Categoria`) VALUES
(1, 'Tinto'),
(2, 'Blanco'),
(3, 'Rosado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_productos` int(11) NOT NULL,
  `nombre` varchar(256) NOT NULL,
  `precio` float NOT NULL,
  `bodegaID` int(11) NOT NULL,
  `foto` varchar(128) DEFAULT NULL,
  `categoriaID` int(11) NOT NULL,
  `stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_productos`, `nombre`, `precio`, `bodegaID`, `foto`, `categoriaID`, `stock`) VALUES
(1, 'Famiglia Bianchi', 15000, 3, '', 1, 10),
(2, 'Famiglia Bianchi', 18500, 3, '', 2, 10),
(3, 'Famiglia Bianchi', 19000, 3, '', 2, 10),
(4, 'Famiglia Bianchi', 19000, 3, '', 2, 10),
(5, 'Cabernet Sauvignon', 19000, 3, '', 1, 490),
(6, 'Pinot Noir', 15000, 3, '', 1, 380),
(7, 'Merlot', 15000, 3, '', 1, 278),
(8, 'Syrah', 15000, 3, '', 1, 268),
(9, 'Carmenere', 15000, 3, '', 1, 286),
(10, 'Malbec', 15000, 3, '', 1, 372),
(11, 'Chardonnay', 15000, 3, '', 2, 178),
(12, 'Sauvignon blanc', 15000, 3, '', 2, 374),
(13, 'Riesling', 15000, 3, '', 2, 387),
(14, 'Pinot Gris', 15000, 3, '', 2, 418),
(15, 'Pinot blanc', 15000, 3, '', 2, 267),
(16, 'Gewürztraminer', 15000, 3, '', 2, 376),
(17, 'Moscatel', 15000, 3, '', 2, 296),
(18, 'Viognier', 15000, 3, '', 2, 324),
(19, 'Domaine Lafage Miraflors', 15000, 3, '', 3, 169),
(20, 'Chivite Las Fincas Rosado', 15000, 3, '', 3, 278),
(21, 'Miraval Rosé', 15000, 3, '', 3, 359),
(22, 'Ripa Rosado', 15000, 3, '', 3, 274);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bodegas`
--
ALTER TABLE `bodegas`
  ADD PRIMARY KEY (`id_bodega`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_productos`),
  ADD KEY `bodegaID` (`bodegaID`),
  ADD KEY `categoriaID` (`categoriaID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bodegas`
--
ALTER TABLE `bodegas`
  MODIFY `id_bodega` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_productos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `categorias_fk` FOREIGN KEY (`categoriaID`) REFERENCES `categorias` (`id_categoria`),
  ADD CONSTRAINT `productos_fk` FOREIGN KEY (`bodegaID`) REFERENCES `bodegas` (`id_bodega`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
