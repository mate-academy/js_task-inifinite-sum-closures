'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const sumN = (arg1) => {
    if (arg1) {
      return (arg2) => {
        return arg2 || arg2 === 0 ? sumN(arg1 + arg2) : arg1;
      };
    }

    return 0;
  };

  return sumN;
}

module.exports = makeInfinityAdder;
