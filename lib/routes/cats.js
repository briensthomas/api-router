const cats = [
  {
    name: 'Lily',
    codename: 'Nee-nee'
  },
  {
    name: 'Jake',
    codename: 'Yacob'
  },
  {
    name: 'Freddy Cougar',
    codename: 'Frederick'
  }
];

export default {
  get(req, res) {
    res.write(JSON.stringify(cats));
    res.end();
  },

  post(req, res) {
    cats.push(req.body);
    res.statusCode = 202;
    res.end();
  },

  put(req, res) {
    cats.map((cat) => cat['jerkface'] = true);
    res.statusCode = 202;
    res.end();
  },

  delete(req, res) {
    cats.pop();
    res.statusCode = 204;
    res.end();
  },
};
