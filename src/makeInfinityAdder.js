'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let amount = 0;

  const adder = function(num) {
    if (typeof num === 'number') {
      amount += num;

      return adder;
    }

    const result = amount;

    amount = 0;

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
