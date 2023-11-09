'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let counter = 0;
  const adder = (a) => {
    if (a !== undefined) {
      counter += a;

      return adder;
    }

    const finalCount = counter;

    counter = 0;

    return finalCount;
  };

  return adder;
}

module.exports = makeInfinityAdder;
