const imagesData = {
  images: [
    "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
    "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
    "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
  ],
  currentImg: 0,
};

const conversationsData = {
  displayConversation: null,
  conversations: [
    {
      with: "Laura",
      convo: [
        { text: "Hi", sender: "self" },
        { text: "You there?", sender: "self" },
        { text: "Yeah, hi, what's up?", sender: "other" },
      ],
    },
    {
      with: "Dad",
      convo: [
        { text: "Have you finished your school work yet?", sender: "other" },
        { text: "Yes.", sender: "self" },
        { text: "What do you mean, yes?", sender: "other" },
        { text: "??", sender: "self" },
      ],
    },
    {
      with: "Shoobert",
      convo: [
        { text: "Shoobert!!!", sender: "self" },
        { text: "Dude!!!!!!!!", sender: "other" },
        { text: "Shooooooooo BERT!", sender: "self" },
        { text: "You're my best friend", sender: "other" },
        { text: "No, *you're* my best friend", sender: "self" },
      ],
    },
  ],
};

export { imagesData, conversationsData };
