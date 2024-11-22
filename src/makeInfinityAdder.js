'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  const adder = function (a) {
    let sum;

    if (a === undefined) {
      if (sum === undefined) {
        sum = 0;
      }

      return sum;
    }

    sum = a;

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
