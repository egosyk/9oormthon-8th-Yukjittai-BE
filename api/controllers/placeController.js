const placeService = require('../services/placeService');
const { catchAsync } = require('../utils/error');

const getplace = catchAsync(async (req, res) => {
    const { places } = req.query;
    const sortedPlace = await placeService.sortPlaces(places);
    res.status(200).json(sortedPlace);
});

module.exports = {
    getplace
}