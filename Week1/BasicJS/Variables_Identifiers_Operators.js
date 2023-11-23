/* Exercise 1 */
console.log(5 > 2 && false); // false
console.log(!("knife" === "sword")); // true
console.log(1 < 2 || -1 > -1 || !false); // true
console.log(Boolean("")); // false
console.log(31 % 5 == "1"); // true
console.log(!!true); // true
console.log("5th Avenue" != "5th Avenue"); // false
console.log(52 !== "52"); // true
console.log(Boolean(undefined || null)); // false

/* Exercise 2 */
let a = 3;
let c = 0;
let b = a;
b = a;
c = a;
b = c;
a = b;
console.log(`a = ${a}, b = ${b}, c = ${c}`);
// a = 3, b = 3, c = 3;
