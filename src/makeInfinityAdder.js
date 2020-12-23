'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let overAllsum = 0;
  const caller = (x) => {
    if (x === undefined) {
      const returner = overAllsum;

      overAllsum = 0;

      return returner;
    }
    overAllsum += x;

    return caller;
  };

  return caller;
}

module.exports = makeInfinityAdder;
