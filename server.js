const express = require('express');
const app = express();
const port = 3000;

// serve static resources
app.use(express.static('public'));

// render resource server-side
app.get('/render-server-side', (req, res) => {
  var html = `<!DOCTYPE html>
  <html>

  <head>
    <title>SSR Website</title>
  </head>

  <body>
    <h1>Website</h1>
    <p>This is a <strong>server-side rendered</strong> website.</p>
  </body>

  </html>`

  res.set('Content-Type', 'text/html');
  res.send(html)
})

// start the web server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
