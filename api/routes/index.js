const express = require("express");

const { placeRouter } = require('./placeRouter');
const openAIRouter = require('./openAIRouter');
const kakaoDirectionsRouter = require('./kakaoDirectionsRouter');

const router = express.Router();

router.use('/places', placeRouter);
router.use('/openai', openAIRouter);
router.use('/kakao', kakaoDirectionsRouter);

module.exports = { router };