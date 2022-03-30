'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let counter = 0;

  const inner = (number) => {
    if (number === undefined) {
      const lastCount = counter;

      counter = 0;

      return lastCount;
    }

    counter += number;

    return inner;
  };

  return inner;
}

module.exports = makeInfinityAdder;
