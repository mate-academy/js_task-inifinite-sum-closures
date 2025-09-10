'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  // write code here
  let total = 0;

  const adder = function (num) {
    if (num === undefined) {
      const result = total;

      total = 0;

      return result;
    }

    total += num;

    return adder;
  };

  return adder;
}

module.exports = makeAdder;
