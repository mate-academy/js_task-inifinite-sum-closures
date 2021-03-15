'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const addFunction = (number) => {
    if (!number) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += number;

    return addFunction;
  };

  return addFunction;
}

module.exports = makeInfinityAdder;
