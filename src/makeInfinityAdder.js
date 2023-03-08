'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const makeAdder = () => {
    let result = 0;

    const adder = function(number) {
      if (number == null) {
        const log = result;

        result = 0;

        return log;
      } else {
        result += number;

        return adder;
      }
    };

    return adder;
  };

  return makeAdder();
}

module.exports = makeInfinityAdder;
