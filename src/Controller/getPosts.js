const { spawn } = require("child_process");
const path = require("path");

const getPosts = (req, res) => {
  const pythonScriptPath = path.resolve(__dirname, "..\\logic\\getPosts.py");

  username = "spez";
  const pythonProcess = spawn("python", [pythonScriptPath, username]); //value should be change here

  let posts = "";

  pythonProcess.stdout.on("data", (data) => {
    console.error(`Python output file created`);
  });

  pythonProcess.stderr.on("data", (data) => {
    console.error(`Python Error: ${data}`);
  });

  pythonProcess.on("close", (code) => {
    console.log(`Python process exited with code ${code}`);
  });
};

module.exports = getPosts;
