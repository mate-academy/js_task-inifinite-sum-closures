'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  const adder = (number1) => {
    if (number1 === undefined) {
      const returnedSum = sum;

      sum = 0;

      return returnedSum;
    }

    sum += number1;

    return adder;
  };

  return adder;
}

module.exports = makeAdder;
