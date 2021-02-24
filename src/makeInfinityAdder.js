'use strict';

function makeInfinityAdder() {
  let numbersSum = 0;

  return function nextStep(number) {
    if (!number) {
      const savedSum = numbersSum;

      numbersSum = 0;

      return savedSum;
    }

    numbersSum += number;

    return nextStep;
  };
}

module.exports = makeInfinityAdder;
