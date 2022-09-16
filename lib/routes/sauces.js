const sauces = [
    {
      name: 'Sriracha',
      flavor: 'Spicy',
    },
    {
      name: 'Salsa Verde',
      flavor: 'Spicy',
    }
  ]
  
  export default {
    get(req, res) {
      res.write(JSON.stringify(sauces));
      res.end();
    },
  
    post(req, res) {
      sauces.push(req.body);
      res.statusCode = 202;
      res.end();
    },
  
    put(req, res) {
      sauces.map((sauce) => sauce['Add_To'] = 'Everything');
      res.statusCode = 202;
      res.end();
    },
  
    delete(req, res) {
      sauces.pop();
      res.statusCode = 204;
      res.end();
    }
  };
  