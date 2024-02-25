
const getResult = require("./getResult");
const getPosts = require("./getPosts");

const getFinal = async (req, res) => {
  let username = req.body.username;
  console.log("Fetching posts from reddit...");
  await getPosts(username);
  console.log("Analysing the data...");
  await getResult(req, res);
};

module.exports = getFinal;
