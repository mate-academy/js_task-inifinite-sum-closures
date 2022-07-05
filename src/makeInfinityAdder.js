'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(initialValue = 0) {
  const adder = (value) => {
    if (value === undefined) {
      return initialValue;
    }

    return makeInfinityAdder(initialValue + value);
  };

  return adder;
}

module.exports = makeInfinityAdder;
