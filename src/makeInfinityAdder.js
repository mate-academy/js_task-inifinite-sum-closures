'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let counter = 0;

  const adder = (number) => {
    if (typeof number === 'number') {
      counter += number;

      return adder;
    }

    const result = counter;

    counter = 0;

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
