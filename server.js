const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route for the homepage
app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
});

// Define a route to handle form submissions
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Log the received message
    console.log('Received message:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Respond with a success message
    res.status(200).send('Message received successfully');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
