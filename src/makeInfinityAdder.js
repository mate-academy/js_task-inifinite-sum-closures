'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sumParametr = 0;

  const result = function(num) {
    if (num === undefined) {
      const tempSumParametr = sumParametr;

      sumParametr = 0;

      return tempSumParametr;
    }

    sumParametr += num;

    return result;
  };

  return result;
}

module.exports = makeInfinityAdder;
