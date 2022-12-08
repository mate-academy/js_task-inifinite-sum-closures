'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  const add = (num) =>{
    if (num === undefined) {
      const totalAmount = amount;

      amount = 0;

      return totalAmount;
    }

    amount += num;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
