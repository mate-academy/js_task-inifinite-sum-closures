'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  const adder = (num) => {
    if (num === undefined) {
      const temp = sum;

      sum = 0;

      return temp;
    } else {
      sum += num;

      return adder;
    }
  };

  return adder;
}

module.exports = makeAdder;
