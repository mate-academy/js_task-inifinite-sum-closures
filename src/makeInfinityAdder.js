'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let ammount = 0;

  function add(number) {
    if (number === undefined) {
      const result = ammount;

      ammount = 0;

      return result;
    }
    ammount += number;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
