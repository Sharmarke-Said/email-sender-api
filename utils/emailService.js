const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to send welcome email
exports.sendWelcomeEmail = async (token) => {
  try {
    // Verify the token and extract the user's email
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userEmail = decoded.email;

    // Define the email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: userEmail,
      subject: "Welcome to Our Service!",
      text: `Hello,

Congratulations! You have successfully created an account.

`,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions); // Ensure transporter is defined here
    console.log("Email sent:", info.response);
  } catch (err) {
    console.error("Error sending email:", err.message); // Log detailed error
    throw new Error("Email sending failed");
  }
};
