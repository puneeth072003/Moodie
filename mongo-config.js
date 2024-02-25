const mongoose = require("mongoose");

const Mongo_connect = (app) => {
  const uri =
    "mongodb+srv://pyd773:lnLWt5TimGjuN84K@cluster0.zfco9sx.mongodb.net/"; //
  mongoose.connect(uri,{
    dbName: 'Moodie'
  });

  const mongoconnect = async () => {
    const db = await mongoose.connection;
    db.on("error", console.error.bind(console, "Connection error:"));
    db.once("open", () => {
      console.log("Connected to MongoDB...");
    });
  };
  mongoconnect();
};

module.exports = Mongo_connect;