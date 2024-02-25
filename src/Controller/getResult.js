const { spawn } = require("child_process");
const path = require("path");
const fs = require("fs");
const {ResultModel}=require('./schema');
const getRandomSuggestion = require("./getSuggestion");

const getResult = async(req, res) => {
  const pythonScriptPath = path.resolve(__dirname, "..\\logic\\logic.py");
  let pythonOutput = "";
  const filePath = path.join(__dirname, "data.json");
  fs.readFile(filePath, "utf8",(err, data) => {
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


    pythonProcess.on("close", async(code) => {
      console.log(`Python process exited with code ${code}`);

      try {
        console.log("#########\n", pythonOutput);
        global.ResponseObj = JSON.parse(pythonOutput);

        //addding in the suggestion
        global.ResponseObj.Suggestion= getRandomSuggestion(global.ResponseObj.Overall);
        res.send(global.ResponseObj);
        console.log(global.ResponseObj);

        let username=req.body.username;
        let newData={username:username,result:global.ResponseObj}
        const newDocument=new ResultModel(newData);
        newDocument.save()
        .then(doc => {
        console.log('Data inserted successfully!!!');
        })
        .catch(err => {
        console.error('Error inserting data:', err);
        });
      } catch (parseError) {
        console.error("Error in getResult.js:", parseError);
      }
    });
  });
};

module.exports = getResult;
