'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;
  const makeAdder = (args) => {
    if (args || args === 0) {
      sum += args;

      return makeAdder;
    } else if (!args) {
      const result = sum;

      sum = 0;

      return result;
    }
  };

  return makeAdder;
}

module.exports = makeInfinityAdder;
