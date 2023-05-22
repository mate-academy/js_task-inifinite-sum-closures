'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let summary = 0;

  function adder(x) {
    if (x !== undefined) {
      return (y) => {
        if (y !== undefined) {
          summary += x + y;

          return adder(x + y);
        }
        summary = 0;

        return x;
      };
    }

    return summary;
  };

  return adder;
}

module.exports = makeInfinityAdder;
