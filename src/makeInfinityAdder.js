'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;
  const adder = (number) => {
    if (!number) {
      const reset = count;

      count = 0;

      return reset;
    }
    count += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
