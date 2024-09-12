'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let result = 0;

  const sumFunction = (value) => {
    if (value !== undefined) {
      result += value;

      return sumFunction;
    }

    const sum = result;

    result = 0;

    return sum;
  };

  return sumFunction;
}

module.exports = makeInfinityAdder;
