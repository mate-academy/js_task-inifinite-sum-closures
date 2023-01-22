'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  const sum = (num) => {
    const result = amount;

    amount = num === undefined ? 0 : amount + num;

    return num === undefined ? result : sum;
  };

  return sum;
}

module.exports = makeInfinityAdder;
