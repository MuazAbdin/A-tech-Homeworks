const ex1Func = () => {
  console.log("LOOPS : EXERCISE 1");
  const names = ["Ashley", "Donovan", "Lucas"];
  const ages = [23, 47, 18];
  const people = [];
  for (let i = 0; i < names.length; i++)
    people.push({ name: names[i], age: ages[i] });
  console.log(people);
  return people;
};

const ex2Func = (arr) => {
  console.log("LOOPS : EXERCISE 2");
  for (let person of arr)
    console.log(`${person.name} is ${person.age} years old.`);
};

const ex3Func = () => {
  console.log("LOOPS : EXERCISE 3");
  const posts = [
    { id: 1, text: "Love this product" },
    { id: 2, text: "This is the worst. DON'T BUY!" },
    { id: 3, text: "So glad I found this. Bought four already!" },
  ];

  posts.splice(
    1,
    posts.findIndex((post) => post.id === 2)
  );

  console.log(posts);
};

const ex4Func = () => {
  console.log("LOOPS : EXERCISE 4");
  const posts = [
    {
      id: 1,
      text: "Love this product",
      comments: [],
    },
    {
      id: 2,
      text: "This is the worst. DON'T BUY!",
      comments: [
        { id: 1, text: "Idiot has no idea" },
        { id: 2, text: "Fool!" },
        { id: 3, text: "I agree!" },
      ],
    },
    {
      id: 3,
      text: "So glad I found this. Bought four already!",
      comments: [],
    },
  ];

  const postID = 2,
    commentToDel = 3;

  posts[postID - 1].comments = posts[postID - 1].comments.filter(
    (comment) => comment.id !== commentToDel
  );

  console.log(posts);
};

const ExtensionFunc = () => {
  console.log("LOOPS : Extension");
  const dictionary = {
    A: ["Aardvark", "Abacus", "Actually", "Atomic"],
    B: ["Banana", "Bonkers", "Brain", "Bump"],
    C: ["Callous", "Chain", "Coil", "Czech"],
  };

  for (let letter of Object.keys(dictionary)) {
    console.log(`Words that begin with  ${letter}:`);
    for (let word of dictionary[letter]) console.log(`\t${word}`);
  }
};

// ex1Func();
// ex2Func(ex1Func());
// ex3Func();
// ex4Func();
ExtensionFunc();
