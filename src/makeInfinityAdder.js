'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  const createAdder = (number) => {
    if (number === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += number;

    return createAdder;
  };

  return createAdder;
}

module.exports = makeAdder;
