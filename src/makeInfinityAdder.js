'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  const adder = (num2) => {
    if (num2 === undefined) {
      const res = sum;

      sum = 0;

      return res;
    } else {
      sum += num2;

      return adder;
    }
  };

  return adder;
}

module.exports = makeAdder;
