'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  // write code here
  let result = 0;

  const adder = (...value) => {
    if (value.length !== 0) {
      result += value[0];

      return adder;
    } else {
      const sum = result;

      result = 0;

      return sum;
    }
  };

  return adder;
}

module.exports = makeAdder;
