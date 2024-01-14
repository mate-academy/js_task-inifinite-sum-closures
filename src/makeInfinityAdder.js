'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let accum = [];
  let total = 0;

  return (input) => {
    if (input) {
      addElem(accum, input);

      return function subsequent(inputNth) {
        if (inputNth || inputNth === 0) {
          addElem(accum, inputNth);

          return subsequent;
        }

        total = returnTotal(accum);
        accum = [];

        return total;
      };
    }

    total = returnTotal(accum);
    accum = [];

    return total;
  };
}

function addElem(arr, input) {
  return arr.push(input);
}

function returnTotal(arr) {
  return arr.reduce((acc, elem) => acc + elem, 0);
}

module.exports = makeInfinityAdder;
