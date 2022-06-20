'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here

  const addMine = (outerValue) => {
    if (outerValue !== undefined) {
      const funky = (innerValue) => {
        if (innerValue !== undefined) {
          return addMine(outerValue + innerValue);
        } else {
          return outerValue;
        }
      };

      return funky;
    }

    return 0;
  };

  return addMine;
}

module.exports = makeInfinityAdder;
