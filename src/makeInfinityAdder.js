'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const add = (number) => {
    if (number) {
      return (arg) => {
        if (arg || arg === 0) {
          return add(number + arg);
        }

        return number;
      };
    }

    return 0;
  };

  return add;
}

module.exports = makeInfinityAdder;
