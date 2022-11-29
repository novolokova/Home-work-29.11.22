"use strict";

// Виправити помилки в коді
//повинен бути результат:  'To Be Or Not To Be'


const sentence = "     to         BE       oR   nOt        To     bE ";

function toJadenCase(str) {
return str
.trim()
.toLowerCase()
.split(" ")
.map((word) => word[0].toUpperCase() + word.substring(1))
.join(" ");
}
console.log(toJadenCase(sentence)); 


