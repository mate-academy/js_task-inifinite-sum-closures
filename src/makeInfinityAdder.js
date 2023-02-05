'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let value = 0;
  let count = 0;

  const getSum = (arg) => {
    const argument = arg || 0;

    value += argument;

    if (arg !== undefined) {
      count++;

      return getSum;
    }

    if (arg === undefined && count === 0) {
      value = 0;
    }

    count = 0;

    return value;
  };

  return getSum;
}

module.exports = makeInfinityAdder;
