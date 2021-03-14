'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const addFunction = (x) => {
    if (x !== undefined) {
      sum += x;

      return addFunction;
    } else {
      const output = sum;

      sum = 0;

      return output;
    }
  };

  return addFunction;
}

module.exports = makeInfinityAdder;
