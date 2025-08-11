'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  const adder = (a) => {
    if (a === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }
    sum += a;

    return adder;
  };

  return adder;
}

module.exports = makeAdder;
