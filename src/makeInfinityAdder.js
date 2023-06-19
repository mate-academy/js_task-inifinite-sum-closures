'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let counter = 0;

  const adder = (number) => {
    if (number === undefined) {
      const result = counter;

      counter = 0;

      return result;
    }

    counter += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
