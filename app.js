const express = require("express");
const cors = require("cors");
const client = require('prom-client');

const app = express();

const router = require("./src/Router/route");

app.use(
  cors({
    origin: "*",
  })
);

const register = new client.Registry();

const httpRequestDurationMicroseconds = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'code'],
});

register.registerMetric(httpRequestDurationMicroseconds);

app.use((req, res, next) => {
  const end = httpRequestDurationMicroseconds.startTimer();
  res.on('finish', () => {
    end({ method: req.method, route: req.route ? req.route.path : '', code: res.statusCode });
  });
  next();
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.use(express.json());
app.use("/api/v1/", router);

app.listen(5000, () => {
  console.log("Server listening to port 5000, ENJOY");
});

