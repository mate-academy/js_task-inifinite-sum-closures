'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;
  const sumInfinity = (item) => {
    if (item === undefined) {
      const saveResult = result;

      result = 0;

      return saveResult;
    }
    result += item;

    return sumInfinity;
  };

  return sumInfinity;
}

module.exports = makeInfinityAdder;
