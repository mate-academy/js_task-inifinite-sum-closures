'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const adder = (number) => {
    if (number !== undefined) {
      result += number;

      return adder;
    } else {
      const tempResult = result;

      result = 0;

      return tempResult;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
