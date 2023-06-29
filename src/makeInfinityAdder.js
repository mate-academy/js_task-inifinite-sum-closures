'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const add = (val) => {
    if (val !== undefined) {
      sum = val;

      return (arg) => {
        if (arg !== undefined) {
          return add(sum + arg);
        }

        return sum;
      };
    }
    sum = 0;

    return sum;
  };

  return add;
}

module.exports = makeInfinityAdder;
