(function EX1_2() {
  console.log("===== EXERCISE 1 =====");
  const isEven = (num) => num % 2 === 0;
  const filterArray = (arr) => {
    console.log("===== EXERCISE 2 =====");
    for (let i of arr) if (!isEven(i)) console.log(i);
  };
  filterArray([1, 2, 3, 4, 5, 6, 7]);
  console.log("\n");
})();

/* ================= */

(function EX3() {
  console.log("===== EXERCISE 3 =====");
  const checkExists = (arr, num) => {
    for (let i of arr) if (i == num) return true;
    return false;
  };
  console.log(checkExists([1, 2, 3], 2));
  console.log(checkExists([1, 2, 3], 5));
  console.log("\n");
})();

/* ================= */

(function EX4() {
  console.log("===== EXERCISE 4 =====");
  const calculator = {
    add(num1, num2) {
      return num1 + num2;
    },
    subtract(num1, num2) {
      return num1 - num2;
    },
  };
  console.log(calculator.add(10, 12));
  console.log(calculator.subtract(10, 12));
  console.log("\n");
})();

/* ================= */

(function EX5() {
  console.log("===== EXERCISE 5 =====");
  const increaseByNameLength = (money, name) => money * name.length;
  const makeRegal = (name) => `His Royal Highness, ${name}`;
  const turnToKing = (name, money) => {
    name = name.toUpperCase();
    money = increaseByNameLength(money, name);
    name = makeRegal(name);
    console.log(name + " has " + money + " gold coins.");
  };
  turnToKing("martin luther", 100);
  console.log("\n");
})();

/* ================= */

const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!",
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub",
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power",
  },
];
const capitalize = function (str) {
  let capitalizedStr = "";
  capitalizedStr += str[0].toUpperCase();
  capitalizedStr += str.slice(1);
  return capitalizedStr;
};

const getAge = function (age) {
  if (age < 21) return "Underage";
  if (age > 55) return "55+";
  return `${age} year${age == 1 ? "" : "s"} old`;
};

const getProfession = function (profession) {
  return profession
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");
};

const getLocation = function (country, city) {
  return `from ${capitalize(country)}, ${capitalize(city)}`;
};

const getCatchphrase = function (name, catchphrase) {
  return `${capitalize(name)} loves to say "${capitalize(catchphrase)}"`;
};

const getSummary = function (person) {
  let summary = "";
  summary += capitalize(person.name);
  summary += ` is ${getAge(person.age)} `;
  summary += getProfession(person.profession);
  summary += ` ${getLocation(person.country, person.city)}. `;
  summary += `${getCatchphrase(person.name, person.catchphrase)}.`;
  return summary;
};

console.log("===== EXERCISE 6 (Get Summary) =====");
for (let data of people_info) console.log(getSummary(data));
console.log("\n");

/* ================= */

const story =
  "In the beginning there was light. Then there were wolves.\
   Finally there was a big fire. Ultimately, Shelob the wolf-master\
   put out the fire with her feet. But until then, the fire caused\
   one heck of a lot of damage.";
const specialChars = [",", ".", "'", '"', "?", "!", ";"];

const countWords = (text, chars) => {
  const allWords = text.split(" ").map((word) => {
    let newWord = word.toLowerCase();
    const n = newWord.length - 1;
    return chars.includes(newWord[n]) ? newWord.substring(0, n) : newWord;
  });
  // .filter((word) => word != "");
  const counter = {};
  for (let word of allWords) counter[word] = (counter[word] || 0) + 1;
  // counter[word] ? counter[word]++ : (counter[word] = 1);
  return counter;
};

console.log("===== EXERCISE 7 (Count Words) =====");
const wordCounts = countWords(story, specialChars);
console.log(wordCounts);
console.log("\n");
