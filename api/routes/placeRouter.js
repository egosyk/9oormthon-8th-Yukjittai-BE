const express = require('express');
const { getplace } = require('../controllers/placeController');
const placeRouter = express.Router();

placeRouter.get('', getplace);

module.exports = { placeRouter };
