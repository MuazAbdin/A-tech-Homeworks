let meatArr = ["beef", "chicken"];
let vegetableArr = ["rabbit", "carrots", "potatoes", "lettuce"];
let [rabbit, ...rest] = vegetableArr;
meatArr = [...meatArr, rabbit];
vegetableArr = rest;
console.log(meatArr);
console.log(vegetableArr);

var firstPiece = { id: 101, name: "Ofri" };
var secondPiece = { country: "Israel" };
const fullPass = { ...firstPiece, ...secondPiece };
console.log(fullPass);

let employeesArr = [
  { name: "Joey", id: 1, age: 26 },
  { name: "Lily", id: null, age: 24 },
  { name: "Alice", id: 7, age: null },
  { name: "Sam", id: 8, age: 24 },
  { name: "Ray", id: null, age: null },
];
employeesArr.forEach((e) => (e.id && e.age) ?? console.log(e.name));
