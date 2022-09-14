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
  post(req, res) {},
  put(req, res) {},
  delete(req, res) {},
};
