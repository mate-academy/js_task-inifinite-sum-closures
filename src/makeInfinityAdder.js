'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;
  const adder = (letter) => {
    if (letter === undefined) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += letter;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
