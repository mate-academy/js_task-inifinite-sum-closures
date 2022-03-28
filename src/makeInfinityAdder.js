'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let counter = 0;

  const adder = (value) => {
    if (value === undefined) {
      const result = counter;

      counter = 0;

      return result;
    }

    counter += value;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
