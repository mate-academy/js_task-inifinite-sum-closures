'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const add = (number) => {
    const result = sum;

    if (number !== undefined) {
      sum += number;
    } else {
      sum = 0;

      return result;
    }

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
