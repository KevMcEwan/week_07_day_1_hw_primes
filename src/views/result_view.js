const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

};

console.log("test");
ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:number-checked', (event) => {
    const isItAPrime = event.detail;
    this.displayResult(isItAPrime);
  });
};

ResultView.prototype.displayResult = function (result) {

  const resultElement = document.querySelector('#result');
  if (result === true) {
    resultElement.textContent = "Yes! It's a prime number.";
  } else {
    resultElement.textContent = "Sorry, that's not a prime number.";
  }
};



module.exports = ResultView;
