const MyPromise = require("./Promise");

new MyPromise((resolve, reject) => resolve("resolved!")).then(
  (res) => console.log(res),
  (err) => console.log(err)
);

new MyPromise((resolve, reject) => reject("rejected!")).then(
  (res) => console.log(res),
  (err) => console.log(err)
);

new MyPromise((resolve, reject) =>
  setTimeout(() => resolve("resolved!"), 1000)
).then(
  (res) => console.log(res),
  (err) => console.log(err)
);

new MyPromise((resolve, reject) =>
  setTimeout(() => resolve("resolved!"), 1000)
).then(
  (res) => console.log(res),
  (err) => console.log(err)
);

new Promise((resolve, reject) => {
  setTimeout(() => resolve("resolved first one"), 1000);
})
  .then((res) => {
    console.log(res);
    return res + " do some calculation";
  })
  .then((res) => {
    console.log(res);
  });

new MyPromise((resolve, reject) => {
  setTimeout(() => resolve("resolved first one"), 1000);
})
  .then((res) => {
    console.log(res);
    return new MyPromise((resolve) => {
      setTimeout(() => resolve("resolved second one"), 1000);
    });
  })
  .then((res) => {
    console.log(res);
  });
