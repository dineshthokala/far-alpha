const express = require('express');
const app = express();

// Define the /sayHello route
app.get('/sayHello', (req, res) => {
    res.json({ message: 'Hello User' });
});

// Start the server on port 80
app.listen(80, () => {
    console.log('Server is running on port 80');
});