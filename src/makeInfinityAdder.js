'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  const adder = (a) => {
    if (a === undefined) {
      return 0;
    }

    let sum = a;

    return (b) => {
      if (b === undefined) {
        return sum;
      }

      sum += b;

      return adder(sum);
    };
  };

  return adder;
}

module.exports = makeInfinityAdder;
