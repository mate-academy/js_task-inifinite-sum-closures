'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let summer = 0;

  const adder = function(a = null) {
    if (a !== null) {
      summer += a;

      return adder;
    }

    const sum = summer;

    summer = 0;

    return sum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
