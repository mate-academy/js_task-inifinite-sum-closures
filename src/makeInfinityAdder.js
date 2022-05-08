'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const add = (number) => {
    if (number !== undefined) {
      return (number2) => {
        if (number2 !== undefined) {
          return add(number + number2);
        } else {
          return number;
        }
      };
    }

    return 0;
  };

  return add;
}

module.exports = makeInfinityAdder;
