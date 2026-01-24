'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  const adder = (...numbers) => {
    if (numbers.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += numbers.reduce((acc, num) => acc + num, 0);

      return adder;
    }
  };

  return adder;
}

module.exports = makeAdder;
