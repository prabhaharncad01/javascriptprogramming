const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/register', (req, res) => {
  // Process the registration data
  const { username, email, password } = req.body;

  // Example: Send email using nodemailer (replace with your SMTP details)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'prabaharanmurugesan5@gmail.com',
      pass: '9043792705',
    },
  });

  const mailOptions = {
    from: 'prabaharanmurugesan5@gmail.com',
    to: email,
    subject: 'Registration Confirmation',
    text: `Dear ${username},\n\nThank you for registering!\n\nBest regards,\nYour App Team`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error:', error);
      res.json({ success: false });
    } else {
      console.log('Email sent:', info.response);
      res.json({ success: true });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
