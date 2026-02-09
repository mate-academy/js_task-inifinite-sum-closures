'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  const adder = (number) => {
    // I maybe like this even better
    if (typeof number === 'number') {
      sum += number;

      return adder;
    }

    if (number === undefined) {
      const returnValue = sum;

      sum = 0;

      return returnValue;
    }

    // throw here
  };

  return adder;
}

module.exports = makeAdder;
