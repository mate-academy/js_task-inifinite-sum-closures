'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (number) => {
    if (String(number) === 'undefined') {
      const result = sum;

      adder.clear();

      return result;
    }

    sum += number;

    return adder;
  };

  adder.clear = () => {
    sum = 0;
  };

  return adder;
}

module.exports = makeInfinityAdder;
