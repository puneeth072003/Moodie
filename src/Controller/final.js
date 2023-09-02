const getResult = require("./getResult");
const getPosts = require("./getPosts");

const getFinal = async (req, res) => {
  console.log("Fetching posts from reddit...");
  await getPosts(req, res);
  console.log("Analysing the data...");
  await getResult(req, res);
};

module.exports = getFinal;
