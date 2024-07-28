const getPosts = require("../Controller/getPosts");
const express = require("express");

const router = express.Router();

router.get("/fetch", getPosts);

module.exports = router;
