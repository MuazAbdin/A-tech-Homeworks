/* EXERCISE 1 */

(function EX1() {
  console.log("=== EXERCISE 1 ===");
  try {
    const run = true;

    if (run) {
      let distance = 8;
      for (var i = 0; i < distance; i++) {
        console.log("running");
      }
      console.log("Finished running " + distance + " miles");
    }

    console.log("Damn, you see this gal? She ran " + distance + " miles"); // error
  } catch (error) {
    console.error(error);
  }
  console.log();
})();

/* EXERCISE 2 */

(function EX2() {
  console.log("=== EXERCISE 2 ===");
  try {
    if (13 == "space") {
      let cowSound = "moo";
    } else {
      console.log("Cow says " + cowSound); // error
    }
  } catch (error) {
    console.error(error);
  }
  console.log();
})();

/* EXERCISE 3 */

(function EX3() {
  console.log("=== EXERCISE 3 ===");
  try {
    const serveOrders = function (orders) {
      for (let order of orders) {
        let specialOrder = "special " + order;
        console.log("Served a " + specialOrder);
      }

      console.log("Finished serving all the orders: " + orders);
    };
    const allOrders = ["fish", "lettuce plate", "curious cheese"];
    serveOrders(allOrders);
  } catch (error) {
    console.error(error);
  }
  console.log();
})();

/* EXERCISE 4 */

(function EX4() {
  console.log("=== EXERCISE 4 ===");
  try {
    const pot = "red pot with earth in it";

    const getSeed = function () {
      const seed = "brown seed";
    };

    const plant = function () {
      getSeed();
      console.log("Planting the " + seed + " inside a " + pot); // error
    };

    plant();
  } catch (error) {
    console.error(error);
  }
  console.log();
})();

/* EXERCISE 5 */

(function EX5() {
  console.log("=== EXERCISE 5 ===");
  try {
    const doesUserExist = function (name) {
      const users = [
        { name: "Shapira", age: 19 },
        { name: "Lucius", age: 23 },
      ];
      for (let u of users) {
        if (u.name == name) {
          const found = true;
        }
      }
      return found; // error
    };

    const userExists = doesUserExist("Lucius");
    if (userExists) {
      console.log("We found the ragamuffin!");
    } else {
      console.log("No idea where this person is.");
    }
  } catch (error) {
    console.error(error);
  }
  console.log();
})();

/* EXERCISE 6 */

(function EX6() {
  console.log("=== EXERCISE 6 ===");
  try {
    const isEnough = false;

    const makeEnough = function () {
      for (let i = 0; i < 10; i++) {
        if (i > 5) {
          isEnough = true; // error
        }
      }
    };

    makeEnough();
    if (isEnough) {
      console.log("Finally, sheesh");
    } else {
      console.log("Here we go again...");
    }
  } catch (error) {
    console.error(error);
  }
  console.log();
})();
