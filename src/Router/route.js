const getFinal = require("../Controller/final");
const getPosts = require("../Controller/getPosts");
const { getHome } = require("../Controller/tasks");
const express = require("express");

const router = express.Router();

router.get("/", getHome);
router.get("/fetch", getPosts); //fetching posts from reddit
router.get("/final",getFinal);  //final function

module.exports = router;
