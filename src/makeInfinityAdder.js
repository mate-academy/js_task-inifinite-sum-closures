'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let total = 0;

  const addFunc = (arg) => {
    if (arg === undefined) {
      const curentTotal = total;

      total = 0;

      return curentTotal;
    }

    total += arg;

    return addFunc;
  };

  return addFunc;
}

module.exports = makeInfinityAdder;
