// let hasBoughtTesla = true;
// const yearOfTeslaPurchase = 2014;
// let isUSCitizen = true;
// let currentYear = 2018;

const AISalesPersonPrototype = (hasBoughtTesla, isUSCitizen, currentYear) => {
  const yearOfTeslaPurchase = 2014;
  const timeBought = currentYear - yearOfTeslaPurchase;

  if (hasBoughtTesla) {
    if (isUSCitizen) {
      if (timeBought >= 4) console.log("Would you like an upgrade?");
      else console.log("Are satisfied with the car?");
    } else {
      console.log("Whould you like to move to the US?");
    }
  } else {
    console.log("Are you interested in buying a car?");
  }

  // if (hasBoughtTesla && isUSCitizen) {
  //   if (timeBought >= 4) console.log("Would you like an upgrade?");
  //   else console.log("Are satisfied with the car?");
  // } else if (hasBoughtTesla) {
  //   console.log("Whould you like to move to the US?");
  // } else {
  //   console.log("Are you interested in buying a car?");
  // }
};

allPossibilities = [
  [true, true, 2018], // Would you like an upgrade?
  [true, true, 2015], // Are satisfied with the car?
  [true, false, 2018], // Whould you like to move to the US?
  [true, false, 2015], // Whould you like to move to the US?
  [false, true, 2018], // Are you interested in buying a car?
  [false, true, 2015], // Are you interested in buying a car?
  [false, false, 2018], // Are you interested in buying a car?
  [false, false, 2015], // Are you interested in buying a car?
];
for (args of allPossibilities) AISalesPersonPrototype(...args);
