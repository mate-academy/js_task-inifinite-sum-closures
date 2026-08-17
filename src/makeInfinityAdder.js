'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const addFunc = (number) => {
    if (number === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }
    sum += number;

    return addFunc;
  };

  return addFunc;
}

module.exports = makeInfinityAdder;
