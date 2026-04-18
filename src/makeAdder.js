'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  const adder = (x) => {
    if (x === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }
    sum += x;

    return adder;
  };

  return adder;
}

module.exports = makeAdder;
