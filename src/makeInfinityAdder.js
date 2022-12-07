'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const add = (num) => {
    if (num === undefined) {
      const finalResult = result;

      result = 0;

      return finalResult;
    }

    result += num;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
