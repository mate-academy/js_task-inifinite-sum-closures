'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const passedNumbers = [];
  const adder = (num) => {
    if (num !== undefined) {
      passedNumbers.push(num);

      return adder;
    } else {
      const result = passedNumbers.reduce((sum, current) => sum + current, 0);

      passedNumbers.length = 0;

      return result;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
