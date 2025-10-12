'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let summ = 0;

  return function adder(...args) {
    if (args.length === 0) {
      const result = summ;

      summ = 0;

      return result;
    }
    summ += args[0];

    return adder;
  };
}
module.exports = makeAdder;
