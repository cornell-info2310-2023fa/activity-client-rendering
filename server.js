const express = require('express');
const app = express();
const port = 3000;

// serve static resources
app.use(express.static('public'));

// TODO: render resource server-side

// start the web server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
