'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const calc = (arg) => {
    if (arg !== undefined) {
      sum += arg;

      return calc;
    }

    const result = sum;

    sum = 0;

    return result;
  };

  return calc;
}

module.exports = makeInfinityAdder;
