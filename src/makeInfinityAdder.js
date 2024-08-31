'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // eslint-disable-next-line no-unused-vars
  let sum = 0;

  const sumNumbers = (arg) => {
    if (arg === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += arg;

    return sumNumbers;
  };

  return sumNumbers;
}

module.exports = makeInfinityAdder;
