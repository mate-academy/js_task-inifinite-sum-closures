'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const call = (arg) => {
    if (arg === undefined) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += arg;

      return call;
    }
  };

  return call;
}

module.exports = makeInfinityAdder;
