// (function EX1() {
//   const person = {
//     hungry: true,

//     feed: function () {
//       if (this.hungry) {
//         this.hungry = false;
//         alert("Im no longer hungry!");
//       }
//     },
//   };

//   person.feed(); //should alert "I'm no longer hungry"
// })();

// (function EX2() {
//   const pump = function (amount) {
//     this.liters += amount;
//     console.log("You put " + amount + " liters in " + this.name);
//   };

//   const garage = {
//     car1: {
//       name: "Audi",
//       liters: 3,
//       fillTank: pump,
//     },
//     car2: {
//       name: "Mercedes",
//       liters: 1,
//       fillTank: pump,
//     },
//   };

//   garage.car1.fillTank(2);
//   console.log("Audi should have 5 liters: ", garage.car1.liters);

//   garage.car2.fillTank(30);
//   console.log("Mercedes should have 31 liters: ", garage.car2.liters);
// })();

// (function EX3() {
//   const pumpFuel = function (plane) {
//     plane.fuel += 1;
//   };

//   const airplane = {
//     fuel: 0,
//     fly: function () {
//       if (this.fuel < 2) {
//         return "on the ground!";
//       } else {
//         return "flying!";
//       }
//     },
//   };

//   console.log("The plane should not be able to fly (yet): " + airplane.fly());

//   pumpFuel(airplane);
//   console.log("The plane should STILL not be able to fly: " + airplane.fly());

//   pumpFuel(airplane);
//   console.log("Take off! " + airplane.fly());
// })();

// (function EX4() {
//   const tipJar = {
//     coinCount: 20,
//     tip: function () {
//       this.coinCount += 1;
//     },
//     stealCoins: function (amount) {
//       this.coinCount -= amount;
//     },
//   };

//   tipJar.tip();
//   console.log("Tip jar should have 21 coins: " + tipJar.coinCount);

//   tipJar.stealCoins(3);
//   console.log("Tip jar should have 18 coins: " + tipJar.coinCount);

//   tipJar.stealCoins(10);
//   console.log("Tip jar should have 8 coins: " + tipJar.coinCount);
// })();

// (function EX5() {
//   const revealSecret = function () {
//     return this.secret;
//   };

//   const shoutIt = function (person, func) {
//     person.revealItAll = func;
//     const result = person.revealItAll();
//     alert(person.name + " said: " + result);
//   };

//   const avi = {
//     name: "Avi",
//     secret: "Im scared of snakes!",
//   };

//   const narkis = {
//     name: "Narkis",
//     secret: "I dont have secrets because I'm zen like that.",
//   };

//   shoutIt(avi, revealSecret);
//   shoutIt(narkis, revealSecret);
// })();

(function EX6() {
  const BEANS_PRICE = 0.2;

  const coffeeShop = {
    beans: 40,
    money: 35,

    drinkRequirements: {
      latte: { beanRequirement: 10, price: 4 },
      americano: { beanRequirement: 5, price: 2 },
      doubleShot: { beanRequirement: 15, price: 6 },
      frenchPress: { beanRequirement: 12, price: 5 },
    },

    buyBeans: function (numBeans) {
      const totalCost = numBeans * BEANS_PRICE;
      if (totalCost > this.money) return alert("Money is not suffcient");
      this.money -= totalCost;
      this.beans += numBeans;
    },

    makeDrink: function (drinkType) {
      const drink = this.drinkRequirements[drinkType];
      if (drink === undefined) {
        console.log(`Sorry, we don't make ${drinkType}`);
        return false;
      }
      if (drink.beanRequirement > this.beans) {
        console.log("Sorry, we're all out of beans");
        return false;
      }
      this.beans -= drink.beanRequirement;
      return true;
    },

    buyDrink: function (drinkType) {
      if (this.makeDrink(drinkType))
        this.money += this.drinkRequirements[drinkType].price;
    },
  };

  coffeeShop.buyDrink("latte");
  coffeeShop.buyDrink("americano");
  coffeeShop.buyDrink("filtered");
  coffeeShop.buyDrink("doubleShot");
  coffeeShop.buyDrink("frenchPress");
  coffeeShop.buyBeans(2);
  coffeeShop.buyDrink("frenchPress");
})();
