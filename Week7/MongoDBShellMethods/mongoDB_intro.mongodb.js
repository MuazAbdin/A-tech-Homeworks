use("test-db");

db.linkedon.find().count();

/* Exercise 1
 * Find the count of people who make more than 25000. */
db.linkedon.find({ salary: { $gt: 25000 } }).count();
db.linkedon.countDocuments({ salary: { $gt: 25000 } });
db.linkedon.aggregate([
  { $match: { salary: { $gt: 25000 } } },
  { $group: { _id: null, count: { $sum: 1 } } },
  { $project: { _id: 0 } },
]);
db.linkedon.aggregate([
  { $match: { salary: { $gt: 25000 } } },
  { $count: "count" },
]);

/* Exercise 2
 * Find only the top 3 earning people, and return only their
 * first name and salary. */
db.linkedon
  .find({}, { _id: 0, firstName: 1, salary: 1 })
  .sort({ salary: -1 })
  .limit(3);

/* Exercise 3
 * Find the total number of people currently working at Walmart
 * that are earning at least 7000. */
db.linkedon
  .find({ "currentCompany.name": "Walmart", salary: { $gte: 7000 } })
  .count();
db.linkedon.countDocuments({
  "currentCompany.name": "Walmart",
  salary: { $gte: 7000 },
});

/* Exercise 4
 * Find the current company name, full name, and salary of the highest
 * earning person that currently works in either Sales or Retail. */
db.linkedon
  .find(
    { "currentCompany.industry": { $in: ["Sales", "Retail"] } },
    { _id: 0, currentCompany: 1, firstName: 1, lastName: 1, salary: 1 }
  )
  .sort({ salary: -1 })
  .limit(1);

/* Exercise 5
 * Find the number of people who have ever worked at Apple, past or present. */
db.linkedon
  .find({
    $or: [
      { "currentCompany.name": "Apple" },
      { "previousCompanies.name": "Apple" },
    ],
  })
  .count();

/* Extension 1
 * Find the count of people per industry that are currently working at Apple. */
db.linkedon.aggregate([
  { $match: { "currentCompany.name": "Apple" } },
  { $group: { _id: "$currentCompany.industry", count: { $sum: 1 } } },
]);

/* Extension 2
 * Find the average salary of an Analyst per company. */
db.linkedon.aggregate([
  { $match: { currentPosition: "Analyst" } },
  {
    $group: {
      _id: "$currentCompany.name",
      averageSalary: { $avg: "$salary" },
    },
  },
]);

/* Extension 3
 * Find the average salary for people that (work at either Google or Apple)
 * and (are in the Tech industry). */
db.linkedon.aggregate([
  {
    $match: {
      "currentCompany.name": { $in: ["Google", "Apple"] },
      "currentCompany.industry": "Tech",
    },
  },
  { $group: { _id: "$lastName", average: { $avg: "$salary" } } },
]);
