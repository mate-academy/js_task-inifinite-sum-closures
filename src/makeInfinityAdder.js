'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  const adder = (a) => {
    if (a !== undefined) {
      sum += a;

      return adder;
    } else {
      const result = sum;

      sum = 0;

      return result;
    }
  };

  return adder;
}

module.exports = makeAdder;
