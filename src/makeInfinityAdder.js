'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0; // Змінна для збереження поточної суми

  function adder(n) {
    if (n === undefined) {
      const result = sum;

      sum = 0; // Очищаємо суму після повернення результату

      return result;
    } else {
      sum += n; // Додаємо число до суми

      return adder; // Повертаємо функцію для подальших викликів
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
