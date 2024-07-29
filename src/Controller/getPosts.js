const { spawn } = require("child_process");
const path = require("path");
const getRandomSuggestion = require("./getSuggestion");

const getPosts = async (req, res) => {
  const username = req.body.username;
  const pythonScriptPath = path.resolve(__dirname, "..", "logic", "getPosts.py");
  const pythonProcess = spawn("python3", [pythonScriptPath, username]);

  let dataToSend = "";

  // Collect data from the Python script
  pythonProcess.stdout.on("data", (data) => {
    dataToSend += data.toString();
  });

  pythonProcess.stderr.on("data", (data) => {
    console.error(`Python Error: ${data}`);
  });

  pythonProcess.on("close", (code) => {;
    try {
      // Parse the received JSON string
      let jsonData = JSON.parse(dataToSend);

      // Add extra elements to the JSON object
      jsonData.Suggestion = getRandomSuggestion(jsonData.Overall);

      // Convert the modified object back to a JSON string
      const modifiedDataToSend = JSON.stringify(jsonData);

      // Send the modified JSON string in the HTTP response
      res.send(modifiedDataToSend);
    } catch (error) {
      console.error("Error parsing JSON data:", error);
      res.status(500).send("Error parsing JSON data");
    }
  });
};

module.exports = getPosts;
