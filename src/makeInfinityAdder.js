'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;
  let i = 0;

  const adder = (valueFirst) => {
    if (i === 0 && !valueFirst) {
      sum = 0;

      return sum;
    }

    if (valueFirst || valueFirst === 0) {
      sum += valueFirst;
      i++;

      return adder;
    } else {
      i = 0;

      return sum;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
