'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let result = 0;

  const add = (a) => {
    if (a === undefined) {
      const amswer = result;

      result = 0;

      return amswer;
    }
    result += a;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
