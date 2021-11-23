USE vaccationdb;

DELIMITER $$
CREATE PROCEDURE Create_Customer
(
    IN bookingId CHAR(24),
    
    IN mobileNumber INT,
    IN firstName VARCHAR(255),
    IN lastName VARCHAR(255),
    IN email VARCHAR(255),
	
    IN passportNumber VARCHAR(20),
    IN nationality VARCHAR(50),
    IN placeOfIssue VARCHAR(255),
    IN expiryDate DATE,
    IN dob DATE
)
BEGIN 
--  DECLARE EXIT HANDLER FOR SQLEXCEPTION
--     BEGIN
--       ROLLBACK;
--     END;
START TRANSACTION;
-- passport
INSERT INTO passport (passport_number, nationality, place_of_issue, expiry_date, dob)
  VALUES(passportNumber, nationality, placeOfIssue, expiryDate, dob);
-- customer
INSERT INTO customer (mobile_number, first_name, last_name, email, passport)
  VALUES(mobileNumber, firstName, lastName, email, passportNumber);
SET @customer_id = LAST_INSERT_ID();
INSERT INTO customer_booking (booking_id, user_id)
	VALUES (bookingId, @customer_id);
COMMIT;
END $$
DELIMITER ;
