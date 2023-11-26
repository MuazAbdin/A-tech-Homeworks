function EX1() {
  console.log("===== EX1: Basic Validation =====");
  const str = "the fat cat hit the rat with a bat";
  const str1 = "bob yelled hello";
  const str2 = "it's fleece was white as snow";
  const str3 = "0542212222";
  const str4 = "054hihihii";
  const str5 = "9542212222";

  //Checks if it contains “a” in the string
  const checkIfContainsA = (str) => /a/.test(str);

  //Checks if it’s a string that ends with “at”
  const checkIfEndsWithAt = (str) => /at$/.test(str);

  //Checks if it’s a number that starts with 054 and of size 10.
  const checkIfStartsWithNum = (str) => /^054\d{7}$/.test(str);

  console.log(checkIfContainsA(str)); //returns true
  console.log(checkIfContainsA(str1)); //returns false
  console.log("=======");
  console.log(checkIfEndsWithAt(str)); //returns true
  console.log(checkIfEndsWithAt(str1)); //returns false
  console.log(checkIfEndsWithAt(str2)); //returns false
  console.log("=======");
  console.log(checkIfStartsWithNum(str)); //returns false
  console.log(checkIfStartsWithNum(str3)); //return true
  console.log(checkIfStartsWithNum(str4)); //return false
  console.log(checkIfStartsWithNum(str5)); //return false
}

function EX2() {
  console.log("===== EX2: Regex Dynamic Searcher =====");
  const regexArr = [/a/, /b/, /^d/, /e$/];
  const str = "Bike";
  const str1 = "the room is on fire";
  const str2 = "Fergalicious";
  const str3 = "Fox in sheep clothing";
  const searchMatchingRegex = function (str) {
    for (let pattern of regexArr) if (pattern.test(str)) return true;
    return false;
  };

  console.log(searchMatchingRegex(str)); //return true (contains b)
  console.log(searchMatchingRegex(str1)); //return true (ends with e)
  console.log(searchMatchingRegex(str2)); //return true (contains a)
  console.log(searchMatchingRegex(str3)); //return false
}

function EX3() {
  console.log("===== EX3: Email Validator =====");
  const email1 = "cat@meow.com";
  const email2 = "bad1npuT!@gmail.com";
  const email3 = "meow@gmail.net";

  const emailValidator = function (str) {
    return /^[A-Za-z]+@[A-Za-z]+.com$/.test(str);
  };

  console.log(emailValidator(email1)); //return true
  console.log(emailValidator(email2)); //return false
  console.log(emailValidator(email3)); //return false
}

function EX4() {
  console.log("===== EX4: URL Validator =====");
  const firstURL = "www.workingurl.com";
  const secondURL = "iamabadurl.com";
  const thirdURL = "www.doireallywork.net";

  const urlValidator = function (str) {
    return /^www.[A-Za-z]+.com$/.test(str);
  };

  console.log(urlValidator(firstURL)); //return true
  console.log(urlValidator(secondURL)); //return false
  console.log(urlValidator(thirdURL)); //return false
}

EX1();
EX2();
EX3();
EX4();
