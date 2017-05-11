### Schema tempalte we can use if needed
CREATE DATABASE somename_db;

USE somename_db;

CREATE TABLE sometable
(
	id INT NOT NULL AUTO_INCREMENT,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);
