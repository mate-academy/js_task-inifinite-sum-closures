'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  const adder = (firstNum) => {
    let currentAmont = amount;

    if (firstNum === undefined) {
      amount = 0;

      return currentAmont;
    } else {
      currentAmont += firstNum;

      return function recurringFunction(addNum) {
        if (addNum === undefined) {
          amount = 0;

          return currentAmont;
        } else {
          currentAmont += addNum;

          return recurringFunction;
        };
      };
    };
  };

  return adder;
};

module.exports = makeInfinityAdder;
