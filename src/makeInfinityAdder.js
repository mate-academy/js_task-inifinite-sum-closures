'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;

  const iterate = (figure) => {
    if (figure !== undefined) {
      count += figure;

      return iterate;
    } else {
      const endResult = count;

      count = 0;

      return endResult;
    }
  };

  return iterate;
}

module.exports = makeInfinityAdder;
