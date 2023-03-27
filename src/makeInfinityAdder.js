'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let summ = 0;

  return function addition(number) {
    if (typeof number === 'number') {
      summ += number;

      return addition;
    }

    const resave = summ;

    summ = 0;

    return resave;
  };
}

module.exports = makeInfinityAdder;
