const { spawn } = require("child_process");
const path = require("path");
const fs = require("fs");

const getResult = (req, res) => {
  const pythonScriptPath = path.resolve(__dirname, "..\\logic\\logic.py");

  let pythonOutput = "";
  const filePath = path.join(__dirname, "data.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      return;
    }

    const jsonData = JSON.parse(data);

    const posts = jsonData.sentence;
    console.log(posts);

    const pythonProcess = spawn("python", [pythonScriptPath, posts]);

    pythonProcess.stdout.on("data", (data) => {
      pythonOutput += data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
      console.error(`Python Error: ${data}`);
    });

    pythonProcess.on("close", (code) => {
      console.log(`Python process exited with code ${code}`);

      try {
        console.log("#########", pythonOutput);
        global.ResponseObj = JSON.parse(pythonOutput);
        console.log("Positive:", global.ResponseObj.Positive);
        console.log("Negative:", global.ResponseObj.Negative);
        console.log("Neutral:", global.ResponseObj.Neutral);
        console.log("Overall:", global.ResponseObj.Overall);
      } catch (parseError) {
        console.error("Error parsing JSON:", parseError);
      }
    });
  });
};

module.exports = getResult;
