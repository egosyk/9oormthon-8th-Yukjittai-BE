const express = require("express");

const { placeRouter } = require('./placeRouter');
const openAIRouter = require('./openAIRouter');

const router = express.Router();

router.use('/places', placeRouter)
router.use('/openai', openAIRouter);

module.exports = { router };