'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  const adder = (number) => {
    if (number === undefined) {
      const temp = sum;

      sum = 0;

      return temp;
    }

    sum += number;

    return adder;
  };

  return adder;
}

module.exports = makeAdder;
