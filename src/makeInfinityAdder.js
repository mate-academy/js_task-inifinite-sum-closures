'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;
  let result = 0;

  const adder = (x) => {
    if (x !== undefined) {
      sum += x;

      return adder;
    }

    result = sum;
    sum = 0;

    return result;
  };

  return adder;
}

module.exports = makeAdder;
