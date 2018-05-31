// file: server/index.js
const server = require('./app');
const port = process.env.PORT || 8000;
server.listen(8000, function() {
  console.log('The EXPRESS server is listening on port 8000.');
});
