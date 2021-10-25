-- CREATE DATABASE  IF NOT EXISTS vaccationdb;
-- USE vaccationdb;

CREATE DATABASE IF NOT EXISTS testing3;
USE testing3;

DROP TABLE IF EXISTS country;

CREATE TABLE country (
iso char(3) NOT NULL,
country_name varchar(255) NOT NULL,
PRIMARY KEY (iso)
);


DROP TABLE IF EXISTS country_restriction;

CREATE TABLE country_restriction (
  iso char(3) NOT NULL,
  restrictions varchar(5000) NOT NULL,
  procedures varchar(5000) NOT NULL,
  FOREIGN KEY (iso) REFERENCES country (iso) 
);


DROP TABLE IF EXISTS country_vaccinated;

CREATE TABLE country_vaccinated (
  cv_id int(11) NOT NULL AUTO_INCREMENT,
  iso char(3) NOT NULL,
  total_fully_vacc varchar(10) NOT NULL,
  total_vacc varchar(10) NOT NULL,
  vacc_percent char(7) NOT NULL,
  PRIMARY KEY (cv_id),
  FOREIGN KEY (iso) REFERENCES country (iso) 
);


DROP TABLE IF EXISTS pcr_clinic;

CREATE TABLE pcr_clinic (
  clinic_id int(11) NOT NULL AUTO_INCREMENT,
  clinic_name varchar(255) NOT NULL,
  location varchar(255) NOT NULL,
  opening_hours varchar(1000) NOT NULL,
  age varchar(255) NOT NULL,
  contact_number varchar(50) NOT NULL,
  PRIMARY KEY (clinic_id)
);


DROP TABLE IF EXISTS flight;

CREATE TABLE flight (
  flight_id int(11) NOT NULL AUTO_INCREMENT,
  airline varchar(255) NOT NULL,
  arrival_time datetime NOT NULL,
  departure_time datetime NOT NULL,
  departure_airport varchar(255) NOT NULL,
  destination_airport varchar(255) NOT NULL,
  flight_duration varchar(20) NOT NULL,
  flight_number varchar(50) NOT NULL,
  origin char(3) NOT NULL,
  destination char(3) NOT NULL,
  PRIMARY KEY (flight_id),
  FOREIGN KEY (origin) REFERENCES country (iso) ,
  FOREIGN KEY (destination) REFERENCES country (iso) 
);


DROP TABLE IF EXISTS booking;

CREATE TABLE booking (
  booking_id int(11) NOT NULL AUTO_INCREMENT,
  booking_date datetime NOT NULL,
  flight_id int(11) NOT NULL,
  PRIMARY KEY (booking_id),
  FOREIGN KEY (flight_id) REFERENCES flight (flight_id)
);


DROP TABLE IF EXISTS payment;

CREATE TABLE payment (
  transaction_id varchar(255) NOT NULL,
  amount float NOT NULL,
  payment_status varchar(20) NOT NULL,
  payment_method varchar(50) NOT NULL,
  expire_month int(11) NOT NULL,
  expire_year int(11) NOT NULL,
  booking_id int(11) NOT NULL,
  PRIMARY KEY (transaction_id),
  FOREIGN KEY (booking_id) REFERENCES booking (booking_id)
);


DROP TABLE IF EXISTS passport;

CREATE TABLE passport (
  passport_number varchar(20) NOT NULL,
  nationality varchar(50) NOT NULL,
  place_of_issue varchar(255) NOT NULL,
  expiry_date date NOT NULL,
  dob date NOT NULL,
  PRIMARY KEY (passport_number)
);


DROP TABLE IF EXISTS customer;

CREATE TABLE customer (
  user_id int(11) NOT NULL AUTO_INCREMENT,
  mobile_number int(11) NOT NULL,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  passport varchar(20) NOT NULL,
  PRIMARY KEY (user_id),
  FOREIGN KEY (passport) REFERENCES passport (passport_number) 
);


DROP TABLE IF EXISTS customer_booking;

CREATE TABLE customer_booking (
  booking_id int(11) NOT NULL,
  user_id int(11) NOT NULL,
  FOREIGN KEY (booking_id) REFERENCES booking (booking_id),
  FOREIGN KEY (user_id) REFERENCES customer (user_id) 
);























