const axios = require('../clients/yelp');

module.exports = {
  async index(req, res) {
    const { limit } = req.query;

    try {
      const { data } = await axios.get(`/businesses/search?limit=${limit || 5}&term=Ice Cream Shop&location=Alpharetta, GA&sort_by=rating&radius=10000`);

      return res.json(data.businesses);
    } catch (error) {
      return res.status(400).json({
        message: 'Error getting the businesses',
        error,
      });
    }
  },
};
