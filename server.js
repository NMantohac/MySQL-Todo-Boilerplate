const express = require('express');
// The file name index is a special name in node
// If we require a folder in Node and we don't specify a file name
// Node will automatically look for a index.js inside of that folder
const routes = require('./routes');

const app = express();
const PORT = 9000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Any route that goes to slash,
// Have the router object inside of routes
// Handle the routing for us
app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
