'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  const adder = (...args) => {
    if (args.length > 0) {
      amount += args[0];

      return adder;
    } else {
      const answer = amount;

      amount = 0;

      return answer;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
