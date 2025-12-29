'use strict';

/***
 *
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  return function adder(...args) {
    // Jeśli wywołano bez argumentów: zwróć sumę i zresetuj licznik
    if (args.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }

    // Dodaj wszystkie argumenty z bieżącego wywołania do sumy
    const currentBatch = args.reduce((acc, val) => acc + val, 0);

    sum += currentBatch;

    // Zwróć funkcję adder, aby umożliwić dalsze łańcuchowanie
    return adder;
  };
}

module.exports = makeAdder;
