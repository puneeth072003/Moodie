const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const { DatasetModel, PostModel } = require('./schema');

const getHome = async (req, res) => {
  res.send("Go Moodie");
};

function pushData(){
  //pushing data.json
  const filePath = path.join(__dirname, "./target/data.json");
  fs.readFile(filePath, "utf8",(err, data) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      return;
    }

    let jsonData = JSON.parse(data);
    let datasetDocument = new DatasetModel(jsonData);
    datasetDocument.save()
    .then(doc => {
    console.log('Dataset inserted successfully!!!');
    })
    .catch(err => {
    console.error('Error inserting data:', err);
    });
  })

  //pushing posts.json
  const postsfilePath = path.join(__dirname, "./target/posts.json");
  fs.readFile(postsfilePath, "utf8",(err, data) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      return;
    }

    let jsonData = JSON.parse(data);
    let datasetDocument = new PostModel(jsonData);
    datasetDocument.save()
    .then(doc => {
    console.log('Posts inserted successfully!!!');
    })
    .catch(err => {
    console.error('Error inserting data:', err);
    });
  })
}

module.exports = { getHome,pushData};
