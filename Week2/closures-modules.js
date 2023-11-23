/*  StringFormatter Module  */
const StringFormatter = function () {
  const capitalizeFirst = function (str) {
    return str[0].toUpperCase() + str.substring(1).toLowerCase();
  };
  const toSkewerCase = function (str) {
    return "blue box".split(" ").join("-");
  };
  return { capitalizeFirst: capitalizeFirst, toSkewerCase: toSkewerCase };
};

const formatter = StringFormatter();

console.log(formatter.capitalizeFirst("dorothy")); //should return Dorothy
console.log(formatter.toSkewerCase("blue box")); //should return blue-box

/*  Bank Module  */
const Bank = function () {
  let _money = 500;
  const depositCash = (amount) => (_money += amount);
  const checkBalance = () => console.log(_money);
  return { deposit: depositCash, showBalance: checkBalance };
};

const bank = Bank();
bank.deposit(200);
bank.deposit(250);
bank.showBalance(); //should print 950

/*  songsManager Module  */
const SongsManager = function () {
  const PREFIX_URL = "https://www.youtube.com/watch?v=";
  const _songs = {};
  const addSong = (key, val) => (_songs[key] = val.split("=")[1]);
  const getSong = (name) => console.log(`${PREFIX_URL}${_songs[name]}`);
  return { addSong: addSong, getSong: getSong };
};

const songsManager = SongsManager();
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ");
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U");
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8");

songsManager.getSong("sax"); // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
songsManager.getSong("how long");
songsManager.getSong("ain't me");
