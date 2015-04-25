-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               5.6.16 - MySQL Community Server (GPL)
-- Server OS:                    Win32
-- HeidiSQL Verzija:             9.1.0.4867
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping database structure for kornjacolovci
DROP DATABASE IF EXISTS `kornjacolovci`;
CREATE DATABASE IF NOT EXISTS `kornjacolovci` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `kornjacolovci`;


-- Dumping structure for table kornjacolovci.animal
DROP TABLE IF EXISTS `animal`;
CREATE TABLE IF NOT EXISTS `animal` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- Dumping data for table kornjacolovci.animal: ~0 rows (approximately)
/*!40000 ALTER TABLE `animal` DISABLE KEYS */;
INSERT INTO `animal` (`ID`, `name`) VALUES
	(3, 'Krava'),
	(4, 'Svinja'),
	(5, 'Patka');
/*!40000 ALTER TABLE `animal` ENABLE KEYS */;


-- Dumping structure for table kornjacolovci.offer
DROP TABLE IF EXISTS `offer`;
CREATE TABLE IF NOT EXISTS `offer` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `offerer_ID` int(11) DEFAULT NULL,
  `request_ID` int(11) DEFAULT NULL,
  `price` varchar(200) DEFAULT NULL,
  `details` text,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`),
  KEY `fk_offers_user1_idx` (`offerer_ID`),
  KEY `fk_offers_requests1_idx` (`request_ID`),
  CONSTRAINT `fk_offers_user1` FOREIGN KEY (`offerer_ID`) REFERENCES `user` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_offers_requests1` FOREIGN KEY (`request_ID`) REFERENCES `request` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- Dumping data for table kornjacolovci.offer: ~0 rows (approximately)
/*!40000 ALTER TABLE `offer` DISABLE KEYS */;
INSERT INTO `offer` (`ID`, `offerer_ID`, `request_ID`, `price`, `details`) VALUES
	(1, 1, 1, '500', 'sdg sdfg sfg sdfg sdfg sdfg sdfg sdfg s'),
	(2, 1, 1, '600', '2et wt wetw tw twe w'),
	(3, 1, 1, '700', 'gsldkfbj zdj,fhbvlszk.dfihvxlck.v jcnxkcv,bsldxkfihknvvb v'),
	(4, 1, 1, '800', ' twsxgwte sfd twefsdqr af'),
	(5, 1, 1, '1500', 'siofh lesifvbxliuvh lsaifhvlkcjvb z,xfv '),
	(6, 1, 1, '3500', 'eirulgfb kaugf kdjb lidufg dfg z'),
	(7, 1, 1, '260', 'jual fgdkfg kfhxbv jzdfhvbkxfvb ');
/*!40000 ALTER TABLE `offer` ENABLE KEYS */;


-- Dumping structure for table kornjacolovci.request
DROP TABLE IF EXISTS `request`;
CREATE TABLE IF NOT EXISTS `request` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `animal_ID` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `weight` varchar(45) DEFAULT NULL,
  `delivery_date` date DEFAULT NULL,
  `user_ID` int(11) DEFAULT NULL,
  `offer_ID` int(11) DEFAULT NULL,
  `creation_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`),
  KEY `fk_requests_user_idx` (`user_ID`),
  KEY `fk_request_animal1_idx` (`animal_ID`),
  KEY `fk_request_offer1_idx` (`offer_ID`),
  CONSTRAINT `fk_requests_user` FOREIGN KEY (`user_ID`) REFERENCES `user` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_request_animal1` FOREIGN KEY (`animal_ID`) REFERENCES `animal` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_request_offer1` FOREIGN KEY (`offer_ID`) REFERENCES `offer` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- Dumping data for table kornjacolovci.request: ~0 rows (approximately)
/*!40000 ALTER TABLE `request` DISABLE KEYS */;
INSERT INTO `request` (`ID`, `animal_ID`, `quantity`, `weight`, `delivery_date`, `user_ID`, `offer_ID`, `creation_time`) VALUES
	(1, 3, 10, '400kg', '2015-05-10', 1, NULL, '2015-04-25 20:08:00'),
	(2, 5, 20, '4kg', '2015-05-10', 1, NULL, '2015-04-25 20:08:00'),
	(3, 4, 30, '60kg', '2015-05-10', 3, NULL, '2015-04-25 20:08:00'),
	(4, 3, 15, '400kg', '2015-05-10', 2, NULL, '2015-04-25 20:08:00'),
	(5, 3, 25, '400kg', '2015-05-10', 4, NULL, '2015-04-25 20:08:00'),
	(6, 3, 40, '500kg', '2015-05-10', 3, NULL, '2015-04-25 20:08:00');
/*!40000 ALTER TABLE `request` ENABLE KEYS */;


-- Dumping structure for table kornjacolovci.user
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- Dumping data for table kornjacolovci.user: ~0 rows (approximately)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`ID`, `username`, `password`) VALUES
	(1, 'maric', NULL),
	(2, 'simi', NULL),
	(3, 'deki', NULL),
	(4, 'smiki', NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
