const express = require("express");
const router = express.Router();

wordCounter = { man: 2, cat: 4, car: 1 };

router.get("/", (req, res) => {
  console.log("Server is up and running");
  res.status(200).send(wordCounter);
});

router.get("/word/:word", (req, res) => {
  let word = req.params.word.toLowerCase();
  word = word.replaceAll(/^[\W_]+|[\W_]+$/g, "");
  res.status(200).send({ count: wordCounter[word] || 0 });
});

router.get("/frequent/:num", (req, res) => {
  const num = req.params.num;
  let words = Object.keys(wordCounter);
  if (words.length === 0) return res.send(200).send({ text: "", count: -1 });

  words.sort((w1, w2) => wordCounter[w2] - wordCounter[w1]);
  if (num == 1)
    return res
      .status(200)
      .send({ text: words[0], count: wordCounter[words[0]] });

  ranking = [];
  words
    .slice(0, num)
    .forEach((word) => ranking.push({ [word]: wordCounter[word] }));
  res.status(200).send({ ranking });
});

router.get("/total", (req, res) => {
  let sum = 0;
  for (let word of Object.keys(wordCounter)) sum += wordCounter[word];
  res.status(200).send({ text: "Total count", count: sum });
});

router.post("/word/:word", (req, res) => {
  let word = req.params.word.toLowerCase();
  word = word.replaceAll(/^[\W_]+|[\W_]+$/g, "");
  wordCounter[word] = (wordCounter[word] || 0) + 1;
  res
    .status(200)
    .send({ text: `Added ${word}`, currentCount: wordCounter[word] });
});

router.post("/sentence/:sentence", (req, res) => {
  const sentence = req.params.sentence;
  const newWords = {};
  sentence.split(" ").forEach((word) => {
    word = word.toLowerCase();
    word = word.replaceAll(/^[\W_]+|[\W_]+$/g, "");
    newWords[word] = (newWords[word] || 0) + 1;
  });

  let numOldWords = 0;
  let numNewWords = 0;
  for (let word of Object.keys(newWords)) {
    numNewWords++;
    if (wordCounter[word]) {
      numOldWords++;
      wordCounter[word] += newWords[word];
    } else {
      wordCounter[word] = newWords[word];
    }
  }

  res.status(200).send({
    text: `Added ${numNewWords} words, ${numOldWords} already existed`,
    currentCount: -1,
  });
});

// router.put("", (req, res) => {});

router.delete("/word/:word", (req, res) => {
  let word = req.params.word.toLowerCase();
  word = word.replaceAll(/^[\W_]+|[\W_]+$/g, "");
  if (!wordCounter[word])
    return res
      .status(404)
      .send({ text: `${word} not found`, currentCount: -1 });
  delete wordCounter[word];
  res.status(202).send({ text: `${word} is deleted`, currentCount: -1 });
});

module.exports = router;
