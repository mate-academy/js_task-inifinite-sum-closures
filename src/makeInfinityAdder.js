'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  // write code here
  // Внутрішня змінна для накопичення суми
  let totalSum = 0;

  // Головна функція adder, яка буде повертатися на кожному кроці
  function adder(num) {
    // Якщо функцію викликали без параметрів (num === undefined)
    if (num === undefined) {
      const finalResult = totalSum; // Запам'ятовуємо поточну суму

      totalSum = 0; // ОЧИЩАЄМО суму для наступних використань

      return finalResult; // Повертаємо результат
    }

    // Якщо параметр є, додаємо його до загальної суми
    totalSum += num;

    // Повертаємо саму себе (функцію adder), щоб ланцюжок можна було продовжити
    return adder;
  }

  // Повертаємо початкову функцію
  return adder;
}

module.exports = makeAdder;
