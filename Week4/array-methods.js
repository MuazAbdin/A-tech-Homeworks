fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((users) => {
    // console.log(users);
    (function EX1(users) {
      console.log("==== EX1 ====");
      const result = users.map((u) => {
        return { email: u.email, companyName: u.company.name };
      });
      console.log(result);
      console.log("=============\n");
    })(users);

    (function EX2(users) {
      console.log("==== EX2 ====");
      const result = users.filter((u) => u.address.zipcode[0] === "5");
      console.log(result);
      console.log("=============\n");
    })(users);

    (function EX3(users) {
      console.log("==== EX3 ====");
      const result = users
        .filter((u) => u.address.zipcode[0] === "5")
        .map((u) => u.id);
      console.log(result);
      console.log("=============\n");
    })(users);

    (function EX4(users) {
      console.log("==== EX4 ====");
      const result = users.map((u) => u.name).filter((n) => n[0] === "C");
      console.log(result);
      console.log("=============\n");
    })(users);

    (function EX5(users) {
      console.log("==== EX5 ====");
      const result = users.every((u) => u.address.city === "South Christy");
      console.log(result);
      console.log("=============\n");
    })(users);

    (function EX6(users) {
      console.log("==== EX6 ====");
      const result = users.find((u) => u.address.suite === "Apt. 950").company
        .name;
      console.log(result);
      console.log("=============\n");
    })(users);

    (function EX7(users) {
      console.log("==== EX7 ====");
      function printUser(user) {
        console.log(
          `${user.name} lives in ${user.address.city}, and owns the company ${user.company.name}`
        );
      }
      users.forEach((u) => printUser(u));
      console.log("=============\n");
    })(users);
  })
  .catch((error) => console.log(error.message));
