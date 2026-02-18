'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  // write code here
  let sum = 0;

  const adder = (num) => {
    if (num === undefined) {
      const results = sum;

      sum = 0;

      return results;
    } else {
      sum += num;

      return adder;
    }
  };

  return adder;
}

module.exports = makeAdder;
