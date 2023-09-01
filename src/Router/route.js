const getPosts = require("../Controller/getPosts");
const getUserInfo = require("../Controller/getUserInfo");
const { getHome, getResult } = require("../Controller/tasks");
const express = require("express");

const router = express.Router();

router.get("/", getHome);
router.get("/test", getResult); //to run python script
router.get("/fetch", getPosts); //fetching tweets
router.get("/getUser", getUserInfo);

module.exports = router;
