'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let value = 0;

  const sum = (number) => {
    if (number !== undefined) {
      value += number;

      return sum;
    }

    const returnValue = value;

    value = 0;

    return returnValue;
  };

  return sum;
}

module.exports = makeInfinityAdder;
