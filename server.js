const express = require('express');
const path = require('path');
const app = express();

// Serve static HTML from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Web app running on http://localhost:${port}`);
});
