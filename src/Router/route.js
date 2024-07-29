const getHome = require("../Controller/gethome");
const getPosts = require("../Controller/getPosts");
const express = require("express");

const router = express.Router();

router.get("/fetch", getPosts);
router.get("/", getHome);

module.exports = router;
