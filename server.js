const express = require('express');
const app = express();

// Serve static files from the public directory
app.use(express.static(`${__dirname}/public`));

// Listen for requests
app.listen(4000, () => console.log('Server running on port 4000'));
