const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(__dirname));

// Route to handle file operations
app.get('/read-file', (req, res) => {
  fs.readFile(path.join(__dirname, 'data.txt'), 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
    } else {
      res.send(`<pre>${data}</pre>`);
    }
  });
});

app.get('/write-file', (req, res) => {
  const content = 'New data added to file\n';
  fs.appendFile(path.join(__dirname, 'data.txt'), content, (err) => {
    if (err) {
      res.status(500).send('Error writing to file');
    } else {
      res.send('Data added to file');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
