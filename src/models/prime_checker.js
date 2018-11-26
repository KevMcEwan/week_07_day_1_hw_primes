const PubSub = require('../helpers/pub_sub.js');

const PrimeChecker = function () {

};

PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:user-inputted-number', (event) => {
    const inputtedNumber = event.detail;
    const result = this.checkForPrime(inputtedNumber);
    PubSub.publish('PrimeChecker:number-checked', result);
  });
};

PrimeChecker.prototype.checkForPrime = function (number) {
  if (number <= 1) {
      return false;
    }
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
          return false;
      }
    }
    return true;
  };


module.exports = PrimeChecker;
