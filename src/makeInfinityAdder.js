'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  const adder = (number) => {
    if (number == null) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += number;

      return adder;
    }
  };

  return adder;
}

module.exports = makeAdder;
