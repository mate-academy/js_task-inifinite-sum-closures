'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;
  let tmp = 0;
  let returner;

  return returner = (s) => {
    if (s === undefined) {
      tmp = sum;
      sum = 0;

      return tmp;
    } else {
      sum += s;
      return returner;
    }
  }

}

module.exports = makeInfinityAdder;
