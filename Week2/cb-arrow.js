// (function EX1() {
//   const push = function () {
//     console.log("pushing it!");
//   };

//   const pull = function () {
//     console.log("pulling it!");
//   };

//   const pushPull = (cb) => cb();

//   pushPull(push); //should print "pushing it!"
//   pushPull(pull); //should print "pulling it!"
// })();

// (function EX2() {
//   const returnTime = function (time) {
//     console.log("The current time is: " + time);
//   };

//   const getTime = (cb) => cb(new Date());

//   getTime(returnTime);
// })();

// (function EX3() {
//   const displayData = function (alertDataFunc, logDataFunc, data) {
//     alertDataFunc(data);
//     logDataFunc(data);
//   };
//   const logData = (data) => console.log(data);
//   displayData(alert, logData, "I like to party");
// })();

// (function EX4() {
//   const sumThreeNum = (num1, num2, num3) => num1 + num2 + num3;
//   console.log(sumThreeNum(1, 2, 3));
//   console.log(sumThreeNum(4, 6, 5));
//   console.log(sumThreeNum(3, 3, 3));
// })();

// (function EX5() {
//   const capitalize = (str) =>
//     console.log(str[0].toUpperCase() + str.substring(1).toLowerCase());

//   capitalize("bOb"); // returns Bob
//   capitalize("TAYLOR"); // returns Taylor
//   capitalize("feliSHIA"); // returns Felishia
// })();

// (function EX6() {
//   const determineWeather = (temp) => (temp > 25 ? "hot" : "cold");
//   const commentOnWeather = (temp) => `It's ${determineWeather(temp)}`;
//   // const commentOnWeather = (temp) => `It's ${temp > 25 ? "hot" : "cold"}`;

//   console.log(commentOnWeather(30)); //returns "It's hot"
//   console.log(commentOnWeather(22)); //returns "It's cold"
// })();

(function EX7() {
  const explode = (lightFunc, soundFunc, sound) => {
    lightFunc();
    soundFunc(sound);
  };

  const shineLight = () =>
    (document.getElementById("box").style.backgroundColor = "yellow");

  const makeSound = (sound) => alert(sound);

  explode(shineLight, makeSound, "BOOM");
})();
