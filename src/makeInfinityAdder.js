'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  // write code here
  let total = 0;

  function adder(...args) {
    if (args.length === 0) {
      const result = total;

      total = 0;

      return result;
    }

    total += args.reduce((acc, n) => acc + n, 0);

    return adder;
  }

  return adder;
}

module.exports = makeAdder;
