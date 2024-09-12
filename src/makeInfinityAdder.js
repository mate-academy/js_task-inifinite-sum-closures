'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  const add = (a) => {
    if (a !== undefined) {
      return b => {
        if (b === undefined) {
          return a;
        }

        return add(a + b);
      };
    }

    return 0;
  };

  return add;
}

module.exports = makeInfinityAdder;
