class Flight {
  constructor(flight) {
    this.airline = flight.airline;
    this.arrivalTime = flight.arrivalTime;
    this.departureTime = flight.departureTime;
    this.departureAirport = flight.departureAirport;
    this.destinationAirport = flight.destinationAirport;
    this.flightDuration = flight.flightDuration;
    this.flightNumber = flight.flightNumber;
    this.origin = flight.origin;
    this.destination = flight.destination;
  }
}

module.exports = Flight;
