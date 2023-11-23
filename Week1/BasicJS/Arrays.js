const editAndPrint = (arr) => {
  // 1. delete the second and third elements
  arr.splice(1, 2);
  // 2. change the fourth element to 1
  arr.splice(3, 1, 1);
  // 3. delete the last 4 elements
  arr.splice(arr.length - 4, 4);
  // 4. add another element 0 to the beginning of the array
  arr.splice(0, 0, 0);
  // 5. print the modified array
  console.log(arr);
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
editAndPrint(numbers); // [0,1,4,5,1]
