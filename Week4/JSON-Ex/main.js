const data = require("./ex1.json");

let recipe = data;

console.log(
  recipe.ingredients.filter((i) => i.name == "garlic powder")[0].count
); //should print 2
console.log(recipe.isHealthy); //should print true
console.log(recipe.calories); //should print 250
console.log(recipe.directions[0]); //should print "Cut potatoes into half inch thick slices"
