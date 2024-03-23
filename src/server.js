const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const SampleComponent = require('./SampleComponent'); // Replace with your component

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  const componentStr = ReactDOMServer.renderToString(
    React.createElement(SampleComponent),
  );

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>React SSR with Client-Side Hydration</title>
    </head>
    <body>
      <div id="root">${componentStr}</div>
      <script src="/bundled-client.js"></script>
    </body>
    </html>
  `);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
