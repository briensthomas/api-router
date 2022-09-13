const candies = [
  {
    name: 'Sour Patch Kids',
    flavor_profile: 'fruity',
    sweetness: '2'
  },
  {
    name: 'Reese\'s Peanut Butter Cups',
    flavor_profile: 'chocolate, peanut butter',
    sweetness: '4'
  }
]

export default {
  get(req, res) {
    res.write(JSON.stringify(candies));
    res.end();
  },

  post(req, res) {
    candies.push(req.body);
    res.statusCode = 200;
    res.end
  },

  put(req, res) {

  },

  delete(req, res) {

  }
};
