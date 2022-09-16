import cats from './routes/cats.js';
import candies from './routes/candies.js';
import notFound from './not-found.js';
import bodyParser from './bodyParser.js'

const routes = {
  cats,
  candies,
};

export default async function (req, res) {
  // Split the url at each /
  const parts = req.url.split('/');
  // if the first part of the url split is api, do this:
  if (parts.length && parts[1] === 'api') {
    const httpMethod = req.method.toLowerCase();
    if (httpMethod === ('post' || 'put' || 'delete')) {
      req.body = await bodyParser(req);
    }
    const resource = routes[parts[parts.length - 1]];
    if (resource == null) {
      notFound(req, res);
      return;
    }
    const route = resource[req.method.toLowerCase()];
    if (route == null) {
      notFound(req, res);
      return;
    }

    route(req, res);
    return;
  } 
    notFound(req, res);
}
