const generateRandomArray = (length, upperBound) => {
  return Array(length)
    .fill()
    .map(() => Math.floor(upperBound * Math.random()));
};

const myObject = {
  // randArray: generateRandomArray(10, 500),
  randArray: [11, 13, 14, 66, 67, 69, 234, 456, 2, 1],
  [Symbol.iterator]: function () {
    let arr = this.randArray.filter((item) => item % 2 === 0);
    let n = 0;
    return {
      next() {
        return n < arr.length
          ? { value: arr[n++], done: false }
          : { value: undefined, done: true };
      },
    };
  },
};

for (let x of myObject) {
  console.log(x);
}
