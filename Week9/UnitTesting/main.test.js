const {
  add,
  calculateHyp,
  removeBugs,
  clearLowPriority,
  isEven,
  removeAtLeastOne,
  simplify,
  validate,
  addToArray,
} = require("./main");

test("add should return sum of a + b", () => {
  let sum = add(1, 2);
  expect(sum).toBe(3);
});

test("calculateHyp should return the hypotenuse of a and b", () => {
  expect(calculateHyp(3, 4)).toBe(5);
});

test("removeBugs should remove all BUGs from list of code", () => {
  let code = [
    "great code",
    "good code",
    "BUG",
    "async await awesome code",
    "BUG",
    "BUG",
    "general code",
  ];
  let bugFreeCode = removeBugs(code);

  expect(bugFreeCode).not.toContain("BUG");
  expect(bugFreeCode).toContain("good code"); //this is just an example, there are other ways to check
});

test("clearLowPriority should remove all LOW priority objcts", () => {
  const array = [
    { text: "test1", priority: "LOW" },
    { text: "test2", priority: "HIGH" },
    { text: "test3", priority: "LOW" },
    { text: "test4", priority: "HIGH" },
  ];
  const highPriority = clearLowPriority(array);
  highPriority.forEach((obj) => {
    expect(obj.priority).not.toBe("LOW");
    expect(obj.priority).toBe("HIGH");
  });
});

test("isEven should return true if n is even, false otherwise", () => {
  expect(isEven(0)).toBeTruthy();
  expect(isEven(2)).toBeTruthy();
  expect(isEven(3)).toBeFalsy();
  expect(isEven(NaN)).toBeFalsy();
  expect(isEven(null)).toBeFalsy();
  expect(isEven(undefined)).toBeFalsy();
});

test("removeAtLeastOne should remove at least one element from the array `arr`", () => {
  expect(removeAtLeastOne([]).length).toBe(0);
  expect(removeAtLeastOne([1, 2, 3]).length).toBeLessThanOrEqual(2);
});

test(`simplify should return a clean string without these symbols: "!", "#", ".", ",", "'"`, () => {
  expect(simplify("")).not.toMatch(/[!#.,']/);
  expect(simplify(" ")).not.toMatch(/[!#.,']/);
  expect(simplify("abcd")).not.toMatch(/[!#.,']/);
  expect(simplify(".a!b#c,d'")).not.toMatch(/[!#.,']/);
  expect(simplify(".a!b#c,d'")).toEqual("abcd");
});

test("validate should return true if the truthy booleans more than falsey", () => {
  expect(validate([])).toEqual({ error: "Need at least one boolean" });
  expect(validate(["true", "false"])).toEqual({
    error: "Need at least one boolean",
  });
  expect(validate([1, 0])).toEqual({ error: "Need at least one boolean" });
  expect(validate([true])).toBeTruthy();
  expect(validate([false])).toBeFalsy();
  expect(validate([true, true, false])).toBeTruthy();
  expect(validate([true, false])).toBeFalsy();
});

test("checks whether push has been used in addToArray method:", () => {
  const spy = jest.spyOn(Array.prototype, "push");
  addToArray(1, 2);
  expect(spy).toHaveBeenCalled();
});
