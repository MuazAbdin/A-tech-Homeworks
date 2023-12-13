const validator = require("validator");
const { faker } = require("@faker-js/faker");

//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
console.log(validator.isEmail("foo@bar.com")); //=> true
console.log(validator.isEmail("shoobert@dylan")); //=> false

//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
console.log(validator.isMobilePhone("786-329-9958", "en-US"));

//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"];
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!";
//Ultimately, it should print "im so excited"
console.log(validator.blacklist(text, blacklist).toLowerCase());

function makeHuman(num) {
  faker.helpers.multiple(
    () =>
      console.log(
        `${faker.person.firstName()}, ` +
          `${faker.image.avatar()}, ` +
          `${faker.company.name()}`
      ),
    { count: num }
  );
}
makeHuman(2);
/* 
  prints the following:
  Viola, https://s3.amazonaws.com/uifaces/faces/twitter/motionthinks/128.jpg, Donnelly - Feil
  Isaias, https://s3.amazonaws.com/uifaces/faces/twitter/gt/128.jpg, Wilkinson, Hickle and Hoppe
*/
