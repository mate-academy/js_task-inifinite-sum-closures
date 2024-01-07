'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(...args) {
  let suma = 0;

  const result = (...arg) => {
    if (arg.length > 0) {
      suma += arg[0];

      return result;
    }

    const tem = suma;

    suma = 0;

    return tem;
  };

  return result;
};

module.exports = makeInfinityAdder;
