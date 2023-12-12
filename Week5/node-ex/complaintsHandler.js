const { FINANCE, WEATHER } = require("./consts");

function handleComplaints(complaint) {
  switch (complaint.type) {
    case FINANCE:
      return console.log("Money doesn't grow on trees, you know.");
    case WEATHER:
      return console.log("It is the way of nature. Not much to be done.");
    default:
      return console.log("It'll pass, as all things do, with time.");
  }
}

module.exports.handleComplaint = handleComplaints;
