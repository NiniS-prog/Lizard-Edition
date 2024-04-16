const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'webshinin@gmail.com', // Your Gmail email address
        pass: '193653Martini1!'      // Your Gmail password or App Password
    }
});

// Define a route to handle email sending
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Setup email data
    const mailOptions = {
        from: 'webshinin@gmail.com',
        to: 'webshinin@gmail.com', // Recipient address
        subject: 'New message from contact form',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
