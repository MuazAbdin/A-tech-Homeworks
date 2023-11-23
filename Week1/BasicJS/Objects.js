const ex1Func = () => {
  console.log("OBJECTS : EXERCISE 1");
  const p1 = { name: "Jill", age: 27, city: "Ohio" };
  const p = [
    { name: "Robert", age: 37, city: "Boston" }, // couldn't
    { name: "Robert", age: 37, city: "Ohio" }, // don't want
    { name: "Robert", age: 27, city: "Ohio" }, // date
  ];
  for (p2 of p) {
    if (p1.city !== p2.city) {
      console.log("Jill wanted to date Robert, but couldn't");
      continue;
    }
    if (p1.age === p2.age) console.log("Jill wanted to date Robert");
  }
};

const ex2Func = () => {
  console.log("OBJECTS : EXERCISE 2");
  const library = {
    books: [
      { title: "book1", author: "author1" },
      { title: "book2", author: "author2" },
      { title: "book3", author: "author3" },
    ],
  };
};

/* =============  */

const ex3Func = () => {
  const reservations = {
    bob: { claimed: false },
    ted: { claimed: true },
  };

  const name = prompt(
    "Please enter the name for your reservation"
  ).toLowerCase();
  if (reservations[name]) {
    reservations[name].claimed
      ? console.log("Hmm, someone already claimed this reservation")
      : console.log(`Welcome ${name}`);
  } else {
    console.log(`Sorry ${name}, nothing under your name`);
    reservations[name] = { claimed: true };
  }

  console.log(reservations);
};

/* =============  */

const extension = ({ hasOven, isWorks }) => {
  const date = 3;

  const kitchen = {
    owner: "Geraldine",
    hasOven,
    fridge: {
      price: 500,
      isWorks,
      items: [
        { name: "cheese", expiryDate: 7 },
        { name: "raddish", expiryDate: 2 },
        { name: "bread", expiryDate: 1 },
      ],
    },
  };

  for (let item of kitchen.fridge.items) {
    const daysExpired = date - item.expiryDate;
    if (daysExpired > 0) {
      let res = `${kitchen.owner}'s ${item.name} expired ${daysExpired} day${
        daysExpired == 1 ? "" : "s"
      } ago. `;

      res += isWorks
        ? "Weird, considering her fridge works. "
        : "Probably because her fridge doesn't work. ";

      res += hasOven
        ? "Luckily, she has an oven to cook the raddish in. "
        : "Too bad she doesn't have an oven to cook the raddish in.";

      res += isWorks
        ? ""
        : `And she'll have to pay ${
            kitchen.fridge.price / 2
          } to fix the fridge.`;

      console.log(res);
    }
  }
};

// ex1Func();
// ex2Func();
// ex3Func();
const posibilities = [
  { hasOven: true, isWorks: true },
  { hasOven: true, isWorks: false },
  { hasOven: false, isWorks: true },
  { hasOven: false, isWorks: false },
];
// for (let arg of posibilities) extension(arg);
