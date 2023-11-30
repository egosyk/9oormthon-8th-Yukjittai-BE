const express = require("express");

// const { surroundItem } = require('./surroundItemRouter');
const openAIRouter = require('./openAIRouter');

const router = express.Router();


// router.use('surroundItem', surroundItem)
router.use('/openai', openAIRouter);

module.exports = { router };