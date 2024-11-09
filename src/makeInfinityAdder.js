'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  const adder = (sum = 0) => {
    return (value) => {
      if (value === undefined) {
        return sum;
      }

      return adder(sum + value);
    };
  };

  return adder();
}

module.exports = makeInfinityAdder;
