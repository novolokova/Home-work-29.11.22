"use strict";

// Виправити помилки в коді
//повинен бути результат:  'To Be Or Not To Be'

const sentence = "     to         BE       oR   nOt        To     bE ";

/**
 * returns the string, removes extra spaces, returns each word in uppercase
 * 
 * @param {string} str 
 * @returns {string}
 */
function toJadenCase(str) {
  return str
    .trim()
    .toLowerCase()
    .split(" ")
    .filter(word => word !== "")
    .map(word => word[0].toUpperCase() + word.substring(1))
    .join(" ");
}

console.log(toJadenCase(sentence));

