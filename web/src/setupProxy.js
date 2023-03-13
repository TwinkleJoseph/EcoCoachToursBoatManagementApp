
import apiBaseUrl from "../config";

const { createProxyMiddleware } = require('http-proxy-middleware');

//const baseUrl = apiBaseUrl;

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: apiBaseUrl,
      changeOrigin: true,
    })
  );
};