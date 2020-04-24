CREATE DATABASE todos_db;

USE todos_db;

CREATE TABLE Todos (
	id INTEGER AUTO_INCREMENT NOT NULL,
  text VARCHAR(100) NOT NULL,
  completed BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);