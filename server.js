// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mailgun = require('mailgun-js');

const app = express();
const port = process.env.PORT || 3000;

// Parse JSON bodies
app.use(bodyParser.json());

// Initialize Mailgun SDK
const mg = mailgun({ apiKey: '6355112c59d32a06caf7da5f24192980-19806d14-9f922c7b', domain: ' lizardedition.com' });

// Define a route to handle email sending
app.post('/send-email', (req, res) => {
    const { to, subject, text, replyTo } = req.body;

    // Setup email data
    const mailOptions = {
        from: 'webshinin@gmail.com',
        to,
        subject,
        text,
        'h:Reply-To': replyTo  // Include Reply-To address
    };

    // Send email
    mg.messages().send(mailOptions, (error, body) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + body);
            res.status(200).send('Email sent successfully');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
