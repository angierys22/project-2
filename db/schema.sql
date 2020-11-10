DROP DATABASE IF EXISTS workout_db;
CREATE DATABASE workout_db;
USE workout_db;
CREATE TABLE user (
   id INT NOT NULL AUTO_INCREMENT,
   first_name VARCHAR(50),
   last_name VARCHAR(50),
   PRIMARY KEY (id)
);
CREATE TABLE exercise (
   id INT NOT NULL AUTO_INCREMENT,
   muscle_group VARCHAR(50),
   equipment VARCHAR(50),
   name VARCHAR(50),
   PRIMARY KEY(id)
);
CREATE TABLE journal (
   id INT NOT NULL AUTO_INCREMENT,
   createdAt TIMESTAMP NOT NULL,
   body VARCHAR(255),
   user_id INT NOT NULL,
   exercise_id INT NOT NULL,
   PRIMARY KEY(id)
);