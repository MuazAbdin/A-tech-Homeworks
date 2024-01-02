/*=====================================================
Our Setup -
Feel free to ignore all of this and skip to the questions at the end
=======================================================*/
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const Book = require("./models/BookModel");
const Person = require("./models/PersonModel");

mongoose
  .connect("mongodb://127.0.0.1:27017/mongoose-practice")
  .then(() => console.log("conneted to DB"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/*=====================================================
Create books Collection
=======================================================*/
const isbns = [
  9780156012195, 9780743273565, 9780435905484, 9780140275360, 9780756404741,
  9780756407919, 9780140177398, 9780316769488, 9780062225672, 9780143130154,
  9780307455925, 9781501143519,
];
const url = "https://www.googleapis.com/books/v1/volumes?q=isbn:";

// run this once
// isbns.forEach((isbn) => loadFromAPI(url + isbn));
console.log("done");

function loadFromAPI(apiURL) {
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      if (data.totalItems) {
        const resBook = data.items[0].volumeInfo;
        const book = new Book({
          title: resBook.title,
          author: resBook.authors ? resBook.authors[0] : "",
          pages: resBook.pageCount,
          genres: resBook.categories || ["Other"],
          rating: resBook.averageRating || 5,
        });
        //Only save if the book doesn't exist yet
        Book.findOne({ title: book.title }).then(function (foundBook) {
          if (!foundBook) book.save();
        });
      }
    })
    .catch((error) => console.error("Error:", error));
}

/*=====================================================
Create People Collection
=======================================================*/
const colors = ["brown", "black", "red", "yellow", "green", "grey"];
const getColor = function () {
  return colors[Math.floor(Math.random() * colors.length)];
};
const getWeight = function () {
  return getRandIntBetween(50, 120);
};
const getHeight = function () {
  return getRandIntBetween(120, 230);
};
const getSalary = function () {
  return getRandIntBetween(20000, 50000);
};
const getNumKids = function () {
  return Math.floor(Math.random() * 3);
};

const getRandIntBetween = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getKids = function (numKids) {
  const kids = [];
  for (let i = 0; i < numKids; i++) {
    kids.push({
      hair: getColor(),
      eyes: getColor(),
      weight: getWeight(),
      height: getHeight(),
    });
  }
  return kids;
};

/*=====================================================
the below code always makes sure
you don't have over 100 people and
adds new people and their kids until you do have 100

try to understand how this code works
could you write it differently?
=======================================================*/
Person.find({})
  .count()
  .then(function (count) {
    for (let i = 0; i < 100 - count; i++) {
      var numKids = getNumKids();
      var p = new Person({
        hair: getColor(),
        eyes: getColor(),
        weight: getWeight(),
        height: getHeight(),
        salary: getSalary(),
        numKids: numKids,
        kids: getKids(numKids),
      });
      p.save();
    }
  });

/*=====================================================
Start the server:
=======================================================*/

app.listen(3000, function () {
  console.log("Server up and running on port 3000");
});

/*=====================================================
Exercises - now that your databases are full
and your server is running do the following:
=======================================================*/

//Important note: Once you've run the above code once, COMMENT IT OUT
//If you keep re-running this whole file, you'll keep making a ton of requests to the Books API and eventually you will get blocked.
//DON'T GET BLOCKED

/*Books
----------------------*/
//1. Find books with fewer than 500 but more than 200 pages
//2. Find books whose rating is less than 5, and sort by the author's name
//3. Find all the Fiction books, skip the first 2, and display only 3 of them
app.get("/books", async (req, res) => {
  const { pages, rating, genres } = req.query;
  try {
    let books = [];
    if (pages) books = await Book.find({ pages: { $gt: 200, $lt: 500 } });
    if (rating)
      books = await Book.find({ rating: { $lt: 5 } }).sort({ author: 1 });
    if (genres) books = await Book.find({ genres: "Fiction" }).skip(2).limit(3);
    res.send({ books });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({ msg: error.message });
  }
});

/*People
----------------------*/
//1. Find all the people who are tall (>180) AND rich (>30000)
//2. Find all the people who are tall (>180) OR rich (>30000)
//3. Find all the people who have grey hair or eyes, and are skinny (<70)
//4. Find people who have at least 1 kid with grey hair
//5. Find all the people who have at least one overweight kid, and are overweight themselves (>100)
app.get("/people", async (req, res) => {
  try {
    const res1 = await Person.find({
      height: { $gt: 180 },
      salary: { $gt: 30e3 },
    });
    const res2 = await Person.find({
      $or: [{ height: { $gt: 180 } }, { salary: { $gt: 30e3 } }],
    });
    const res3 = await Person.find({
      $or: [{ hair: "grey" }, { eyes: "grey" }],
      weight: { $lt: 70 },
    });
    const res4 = await Person.find({ "kids.hair": "grey" });
    // const res4 = await Person.find({ kids: { $elemMatch: { hair: "grey" } } });
    const res5 = await Person.find({
      weight: { $gt: 100 },
      "kids.weight": { $gt: 100 }, // kids: { $elemMatch: { weight: { $gt: 100 } } }
    });
    res.send({ res1, res2, res3, res4, res5 });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({ msg: error.message });
  }
});
