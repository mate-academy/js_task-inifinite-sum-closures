'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let number = 0;
  const adder = (x) => {
    if (x === undefined) {
      const result = number;

      number = 0;

      return result;
    }
    number += x;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
