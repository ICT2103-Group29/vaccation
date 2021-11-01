USE vaccationdb;

DELIMITER $$
CREATE PROCEDURE Create_Booking
(
	IN airline VARCHAR(255),
    IN arrivalTime DATETIME,
    IN departureTime DATETIME,
    IN departureAirport VARCHAR(255),
    IN destinationAirport VARCHAR(255),
    IN flightDuration VARCHAR(20),
    IN flightNumber VARCHAR(50),
    IN origin CHAR(3),
    IN destination CHAR(3)
)
BEGIN 
 DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
      ROLLBACK;
    END;
START TRANSACTION;
-- flight
INSERT INTO flight (airline, arrival_time, departure_time, departure_airport,
					destination_airport, flight_duration, flight_number, origin, destination)
	VALUES (airline, arrivalTime, departureTime, departureAirport, 
    destinationAirport, flightDuration, flightNumber, origin, destination);
	SET @flightId := LAST_INSERT_ID();
-- booking
INSERT INTO booking (booking_date, flight_id)
	VALUES (SYSDATE(), @flightId);
SELECT LAST_INSERT_ID() as bookingId;
COMMIT;
END $$
DELIMITER ;
