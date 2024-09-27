'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let count = 0;
  const counter = (number) => {
    if (number === undefined) {
      const result = count;

      count = 0;

      return result;
    }

    count += number;

    return counter;
  };

  return counter;
}
module.exports = makeInfinityAdder;
