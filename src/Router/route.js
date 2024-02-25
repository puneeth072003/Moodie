const getFinal = require("../Controller/final");
const getPosts = require("../Controller/getPosts");
const getResult = require("../Controller/getResult");
const { getHome } = require("../Controller/tasks");
const express = require("express");
const postSignup = require("../login/signup");
const postLogin = require("../login/login");

const router = express.Router();

router.get("/", getHome);
router.get("/fetch", getPosts); //fetching posts from reddit
router.get("/analyse", getResult);
router.post("/final", getFinal); //final function
router.post("/signup",postSignup)
router.post("/login",postLogin)

module.exports = router;
