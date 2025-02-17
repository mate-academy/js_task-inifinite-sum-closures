'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (...args) => {
    if (args.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      args.forEach((num) => {
        if (typeof num !== 'number') {
          throw new Error('Arguments must be numbers');
        }
        sum += num;
      });

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
