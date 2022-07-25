"use strict";

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  const addRol = (out) => {
    if (out !== undefined) {
      const arr = (inner) => {
        if (inner !== undefined) {
          return addRol(out + inner);
        } else {
          return out;
        }
      };

      return arr;
    }

    return 0;
  };

  return addRol;
}

module.exports = makeInfinityAdder;
