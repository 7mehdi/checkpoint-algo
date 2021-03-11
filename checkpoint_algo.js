let words = 0;
let vowels = 0;
let str;
do {
  str = prompt("write a sentence character by character");
  if (str === " ") {
    words += 1;
  }
  if (
    str === "e" ||
    str === "o" ||
    str === "i" ||
    str === "a" ||
    str === "u" ||
    str === "y"
  ) {
    vowels += 1;
  }
} while (str != ".");

console.log(`number of words is ${words + 1}`);
console.log(`number of vowels is ${vowels}`);
