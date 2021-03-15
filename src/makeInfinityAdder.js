'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const addFunction = (value) => {
    if (value !== undefined) {
      sum += value;

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
