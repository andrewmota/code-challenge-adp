const axios = require('axios');

const yelp = axios.create({
  baseURL: process.env.YELP_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.YELP_API_KEY}`,
  },
});

module.exports = yelp;
