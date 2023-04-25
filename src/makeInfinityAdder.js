'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const adder = (value) => {
    if (value !== undefined) {
      return (args) => {
        if (args !== undefined) {
          return adder(value + args);
        }

        return value;
      };
    }

    return 0;
  };

  return adder;
}

module.exports = makeInfinityAdder;
