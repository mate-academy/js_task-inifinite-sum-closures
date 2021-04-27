'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  const makeAdder = (prevValue) => {
    if (prevValue) {
      return (nextValue) => {
        if (nextValue) {
          return makeAdder(prevValue + nextValue);
        } else {
          return prevValue;
        }
      };
    }

    return 0;
  };

  return makeAdder;
}

module.exports = makeInfinityAdder;
