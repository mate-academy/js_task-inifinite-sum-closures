'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let amount = 0;

  return function func(a) {
    if (a === undefined) {
      const temporary = amount;

      amount = 0;

      return temporary;
    }

    amount += a;

    return func;
  };
}

module.exports = makeInfinityAdder;
