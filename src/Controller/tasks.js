const { spawn } = require("child_process");
const path = require("path");

const getHome = async (req, res) => {
  res.send("Go Moodie");
};

const getResult = (req, res) => {
  const pythonScriptPath = path.resolve(__dirname, "..\\logic\\logic.py");

  const pythonProcess = spawn("python", [pythonScriptPath, "i want to die"]); //value should be change here

  let pythonOutput = "";

  pythonProcess.stdout.on("data", (data) => {
    pythonOutput += data.toString();
  });

  pythonProcess.stderr.on("data", (data) => {
    console.error(`Python Error: ${data}`);
  });

  pythonProcess.on("close", (code) => {
    console.log(`Python process exited with code ${code}`);

    try {
      global.ResponseObj = JSON.parse(pythonOutput);
      res.send(global.ResponseObj);
      console.log("Positive:", global.ResponseObj.Positive);
      console.log("Negative:", global.ResponseObj.Negative);
      console.log("Neutral:", global.ResponseObj.Neutral);
      console.log("Overall:", global.ResponseObj.Overall);
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError);
    }
  });
};

module.exports = { getHome, getResult };
