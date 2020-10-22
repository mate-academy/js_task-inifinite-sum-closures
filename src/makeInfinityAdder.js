'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let counter = 0;

  const addDigits = digit => {
    if (digit !== undefined) {
      counter += digit;

      return addDigits;
    }

    const temp = counter;

    counter = 0;

    return temp;
  };

  return addDigits;
}

module.exports = makeInfinityAdder;
