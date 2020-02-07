const axios = require('../clients/yelp');

module.exports = {
  async index(req, res) {
    const { id } = req.params;
    const { limit } = req.query;
    try {
      const { data } = await axios.get(`/businesses/${id}/reviews`);

      return res.json(data.reviews.slice(0, limit));
    } catch (error) {
      return res.status(400).json({
        message: 'Error getting the reviews',
        error,
      });
    }
  },
};
