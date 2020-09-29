'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const adder = (startValue = 0) => {
    let sum = startValue;

    const added = (addedValue) => {
      if (addedValue) {
        sum += addedValue;

        return added;
      }

      return sum;
    };

    if (startValue) {
      return added;
    }

    return sum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
