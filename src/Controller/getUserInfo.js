const Twit = require("twit");
require("dotenv").config();

const getUserInfo = (req, res) => {
  // Load your Twitter API credentials from environment variables
  const consumer_key = process.env.CONSUMER_KEY;
  const consumer_secret = process.env.CONSUMER_SECRET;
  const access_token = process.env.ACCESS_TOKEN;
  const access_token_secret = process.env.ACCESS_TOKEN_SECRET;

  // Authenticate with Twitter API
  const T = new Twit({
    consumer_key,
    consumer_secret,
    access_token,
    access_token_secret,
  });

  // Fetch user information
  const username = "elonmusk"; // Replace with the target username
  T.get("users/show", { screen_name: username })
    .then((result) => {
      const user = result.data;
      res.send({
        "User ID": user.id,
        "User Name": user.name,
        "User Screen Name": user.screen_name,
      });
      console.log("User ID:", user.id);
      console.log("User Name:", user.name);
      console.log("User Screen Name:", user.screen_name);
    })
    .catch((error) => {
      console.error("Error fetching user information:", error);
    });
};

module.exports = getUserInfo;
