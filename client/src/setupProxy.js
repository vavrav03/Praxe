const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
   app.use(createProxyMiddleware("/assets/scripts_php", { target: "http://localhost:5000/" }));
   
};
