import http from "node:http";
import app from "./lib/app.js";
import dotenv from 'dotenv'

dotenv.config();

const server = http.createServer(app);

const port = process.env.PORT;
const hostname = process.env.APP_HOST;

server.listen(port, hostname, () => {
  console.log(server.address());
});
