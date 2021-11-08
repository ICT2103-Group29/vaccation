class Payment {
  constructor(payment) {
    this.amount = payment.amount;
    this.paymentStatus = payment.paymentStatus;
    this.paymentMethod = payment.paymentMethod;
    this.expireMonth = payment.expireMonth;
    this.expireYear = payment.expireYear;
  }
}

module.exports = Payment;
