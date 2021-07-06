'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let add = 0;
  let suma = 0;

  const makeAdder = (number) => {
    if (!number) {
      suma = add;

      add = 0;

      return suma;
    }

    add += number;

    return makeAdder;
  };

  return makeAdder;
}

module.exports = makeInfinityAdder;
