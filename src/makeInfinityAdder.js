'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const adder = (number) => {
    const toShow = result;

    if (number !== undefined) {
      result += number;

      return adder;
    } else {
      result = 0;

      return toShow;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
