'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let amount = 0;
  const adder = (num) => {
    if (num !== undefined) {
      amount += num;

      return adder;
    } else {
      const result = amount;

      amount = 0;

      return result;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
