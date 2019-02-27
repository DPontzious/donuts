DROP DATABASE IF EXISTS donuts_db;
CREATE DATABASE donuts_db;
USE donuts_db;

CREATE TABLE donuts
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);