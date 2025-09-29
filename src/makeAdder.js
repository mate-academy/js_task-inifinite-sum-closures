'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;
  const adder = (value) => {
    if (value !== undefined) {
      sum += value;

      return adder;
    }

    const result = sum;

    sum = 0;

    return result;
  };

  return adder;
}

module.exports = makeAdder;
