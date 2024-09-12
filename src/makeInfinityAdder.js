'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  const adder = (a) => {
    if (a || a === 0) {
      return (b) => {
        if (b || b === 0) {
          return adder(a + b);
        } else {
          return a;
        }
      };
    }

    return 0;
  };

  return adder;
}

module.exports = makeInfinityAdder;
