'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const adder = argument1 => argument2 => {
    if (argument2 === undefined) {
      return argument1;
    }

    return adder(argument1 + argument2);
  };

  return adder(0);
}

module.exports = makeInfinityAdder;
