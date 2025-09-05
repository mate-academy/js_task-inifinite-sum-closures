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
      const res = sum;

      sum = 0;

      return res;
    }
  };

  return adder;
}

module.exports = makeAdder;
