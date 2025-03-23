'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let amount = 0;

  const sum = (firstNum) => {
    const nextSum = (secondNum) => {
      return sum(secondNum);
    }

    if (firstNum !== undefined) {
      amount += firstNum;

      return nextSum;
    } else {
      const returnedAmount = amount;

      amount = 0;
      
      return returnedAmount;
    }
  }

  return sum;
}

module.exports = makeInfinityAdder;
