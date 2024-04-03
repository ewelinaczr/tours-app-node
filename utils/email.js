const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  // Define the email options
  const mailOptions = {
    from: 'Ewelina',
    to: options.email,
    subcject: options.subjekt,
    tekst: options.tekst,
  };
  // Sent the email with nodemailer
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
