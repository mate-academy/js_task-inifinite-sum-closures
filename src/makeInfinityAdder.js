'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const makeAdder = (a) => {
    if (a) {
      return (b) => {
        if (b !== undefined) {
          return makeAdder(a + b);
        }

        return a;
      };
    }

    return 0;
  };

  return makeAdder;
}

module.exports = makeInfinityAdder;
