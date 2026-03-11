'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let result = 0;

  const adder = (a) => {
    if (a === undefined) {
      const sum = result;

      result = 0;

      return sum;
    }

    result += a;

    return adder;
  };

  return adder;
}

module.exports = makeAdder;
