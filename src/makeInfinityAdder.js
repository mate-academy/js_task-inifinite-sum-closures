'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const adder = (param) => {
    const toShow = result;

    if (param !== undefined) {
      result += param;

      return adder;
    } else {
      result = 0;

      return toShow;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
