'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;
  const adder = (num) => {
    if (num !== undefined) {
      sum += num;

      return adder;
    }

    const count = sum;

    sum = 0;

    return count;
  };

  return adder;
}

module.exports = makeAdder;
