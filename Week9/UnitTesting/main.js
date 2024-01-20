const add = (a, b) => a + b;

const calculateHyp = (a, b) => Math.sqrt(a * a + b * b);

const removeBugs = (code) => code.filter((c) => c != "BUG");

const clearLowPriority = (array) => array.filter((o) => o.priority !== "LOW");

const isEven = (n) => typeof n === "number" && n % 2 === 0;

const removeAtLeastOne = (arr) => {
  let numItemsToRemove = Math.floor(Math.random() * arr.length) + 1;
  arr.splice(0, numItemsToRemove);
  return arr;
};

const simplify = (str) => {
  let symbols = ["!", "#", ".", ",", "'"];
  return str
    .split("")
    .filter((c) => symbols.indexOf(c) == -1)
    .join("");
};

const validate = (arr) => {
  if (arr.some((e) => typeof e !== "boolean") || arr.length === 0)
    return { error: "Need at least one boolean" };
  const trueCount = arr.reduce((a, b) => a + (b ? 1 : 0));
  return arr.length - trueCount < trueCount;
};

function addToArray(x, y) {
  let stuff = [];
  stuff.push(x, y);
}

module.exports = {
  add,
  calculateHyp,
  removeBugs,
  clearLowPriority,
  isEven,
  removeAtLeastOne,
  simplify,
  validate,
  addToArray,
};
