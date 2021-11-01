class Customer {
  constructor(cust) {
    this.mobileNumber = cust.mobileNumber;
    this.firstName = cust.firstName;
    this.lastName = cust.lastName;
    this.email = cust.email;
    this.passportNumber = cust.passportNumber;
    this.nationality = cust.nationality;
    this.placeOfIssue = cust.placeOfIssue;
    this.expiryDate = cust.expiryDate;
    this.dob = cust.dob;
  }
}
module.exports = Customer;
