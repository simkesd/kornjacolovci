SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

DROP SCHEMA IF EXISTS `kornjacolovci` ;
CREATE SCHEMA IF NOT EXISTS `kornjacolovci` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `kornjacolovci` ;

-- -----------------------------------------------------
-- Table `kornjacolovci`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `kornjacolovci`.`user` ;

CREATE TABLE IF NOT EXISTS `kornjacolovci`.`user` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `kornjacolovci`.`animal`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `kornjacolovci`.`animal` ;

CREATE TABLE IF NOT EXISTS `kornjacolovci`.`animal` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `kornjacolovci`.`offer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `kornjacolovci`.`offer` ;

CREATE TABLE IF NOT EXISTS `kornjacolovci`.`offer` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `offerer_ID` INT NULL,
  `request_ID` INT NULL,
  `price` VARCHAR(200) NULL,
  `details` TEXT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC),
  INDEX `fk_offers_user1_idx` (`offerer_ID` ASC),
  INDEX `fk_offers_requests1_idx` (`request_ID` ASC),
  CONSTRAINT `fk_offers_user1`
    FOREIGN KEY (`offerer_ID`)
    REFERENCES `kornjacolovci`.`user` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_offers_requests1`
    FOREIGN KEY (`request_ID`)
    REFERENCES `kornjacolovci`.`request` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `kornjacolovci`.`request`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `kornjacolovci`.`request` ;

CREATE TABLE IF NOT EXISTS `kornjacolovci`.`request` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `animal_ID` INT NULL,
  `quantity` INT NULL,
  `weight` VARCHAR(45) NULL,
  `delivery_date` DATE NULL,
  `user_ID` INT NULL,
  `offer_ID` INT NULL,
  `creation_time` TIMESTAMP NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC),
  INDEX `fk_requests_user_idx` (`user_ID` ASC),
  INDEX `fk_request_animal1_idx` (`animal_ID` ASC),
  INDEX `fk_request_offer1_idx` (`offer_ID` ASC),
  CONSTRAINT `fk_requests_user`
    FOREIGN KEY (`user_ID`)
    REFERENCES `kornjacolovci`.`user` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_request_animal1`
    FOREIGN KEY (`animal_ID`)
    REFERENCES `kornjacolovci`.`animal` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_request_offer1`
    FOREIGN KEY (`offer_ID`)
    REFERENCES `kornjacolovci`.`offer` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
