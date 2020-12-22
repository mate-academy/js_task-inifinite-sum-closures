'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let overAllsum = 0;
  let counter = 0;
  const caller = (x) => {
    if (counter === 0) {
      overAllsum = 0;
    }

    if (x === undefined) {
      counter = 0;

      return overAllsum;
    }

    counter++;
    overAllsum += x;

    return caller;
  };

  return caller;
}

module.exports = makeInfinityAdder;
