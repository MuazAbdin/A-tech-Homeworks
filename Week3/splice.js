const splice = function (arr, start, deleteCount, ...items) {
  if (start === undefined) return [];
  if (start < 0) start = Math.max(0, arr.length + start);
  if (deleteCount === undefined) deleteCount = Math.max(0, arr.length - start);
  deleteCount = Math.min(deleteCount, arr.length - start);

  let i = 0;
  const newArr = [];
  const delArr = [];
  while (i < start) newArr.push(arr[i++]);
  while (deleteCount-- > 0) delArr.push(arr[i++]);
  for (let item of items) newArr.push(item);
  while (i < arr.length) newArr.push(arr[i++]);

  arr.length = 0;
  for (let k of newArr) arr.push(k);

  return delArr;
};

const testCases = [
  [],
  [0, 0],
  [0],
  [0, 1],
  [0, 0, 0],
  [0, 0, -1, 0],
  [1, 1, 55],
  [1],
  [1, 1],
  [1, 0, 5],
  [-1],
  [-4],
  [-1, 4],
  [-2, -2],
];

for (let test of testCases) {
  let arr1 = [1, 2, 3];
  let arr2 = [1, 2, 3];
  console.log(
    `deleted: [${splice(arr1, ...test)}] <= ? => [${arr2.splice(...test)}]`
  );
  console.log(`updated: [${arr1}] <=?=> [${arr2}]`);
  console.log("=======");
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];
let test = [1];
console.log(
  `deleted: [${splice(arr1, ...test)}] <= ? => [${arr2.splice(...test)}]`
);
console.log(`updated: [${arr1}] <=?=> [${arr2}]`);
