'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  const adder = (number) => {
    if (number !== undefined) {
      amount += number;

      return adder;
    }

    const answer = amount;

    amount = 0;

    return answer;
  };

  return adder;
}

module.exports = makeInfinityAdder;
