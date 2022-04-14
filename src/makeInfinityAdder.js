'use strict';

/***
 *
 * @return {function}
 */

 function makeInfinityAdder() {
  let ammount = 0;

  const adder = (num) => {
    const result = ammount;

    if (num !== undefined) {
      ammount += num;

      return adder;
    }

    ammount = 0;

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
