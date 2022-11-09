-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.31 - MySQL Community Server - GPL
-- SO del servidor:              Linux
-- HeidiSQL Versión:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para vuelosdb
DROP DATABASE IF EXISTS `vuelosdb`;
CREATE DATABASE IF NOT EXISTS `vuelosdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `vuelosdb`;

-- Volcando estructura para tabla vuelosdb.aerolineas
CREATE TABLE IF NOT EXISTS `aerolineas` (
  `id_aerolinea` int DEFAULT NULL,
  `nombre_aerolinea` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla vuelosdb.aerolineas: ~4 rows (aproximadamente)
INSERT INTO `aerolineas` (`id_aerolinea`, `nombre_aerolinea`) VALUES
	(1, 'volaris'),
	(2, 'Aeromar'),
	(3, 'Interjet'),
	(4, 'Aeromexico');

-- Volcando estructura para tabla vuelosdb.aeropuertos
CREATE TABLE IF NOT EXISTS `aeropuertos` (
  `id_aeropuerto` int DEFAULT NULL,
  `nombre_aerolinea` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla vuelosdb.aeropuertos: ~0 rows (aproximadamente)
INSERT INTO `aeropuertos` (`id_aeropuerto`, `nombre_aerolinea`) VALUES
	(1, 'Benito Juarez'),
	(2, 'Guanajuato'),
	(3, 'La paz'),
	(4, 'Oaxaca');

-- Volcando estructura para tabla vuelosdb.movimientos
CREATE TABLE IF NOT EXISTS `movimientos` (
  `id_movimiento` int DEFAULT NULL,
  `movimiento` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla vuelosdb.movimientos: ~2 rows (aproximadamente)
INSERT INTO `movimientos` (`id_movimiento`, `movimiento`) VALUES
	(1, 'Salida'),
	(2, 'Llegada');

-- Volcando estructura para tabla vuelosdb.Vuelos
CREATE TABLE IF NOT EXISTS `Vuelos` (
  `id_aerolinea` int DEFAULT NULL,
  `id_aeropuerto` int DEFAULT NULL,
  `id_movimiento` int DEFAULT NULL,
  `fecha` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla vuelosdb.Vuelos: ~0 rows (aproximadamente)
INSERT INTO `Vuelos` (`id_aerolinea`, `id_aeropuerto`, `id_movimiento`, `fecha`) VALUES
	(1, 1, 1, '2021-05-02'),
	(2, 1, 1, '2021-05-02'),
	(3, 2, 2, '2021-05-02'),
	(4, 3, 2, '2021-05-02'),
	(1, 3, 2, '2021-05-02'),
	(2, 1, 1, '2021-05-02'),
	(2, 3, 1, '2021-05-04'),
	(3, 4, 1, '2021-05-04'),
	(3, 4, 1, '2021-05-04');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
