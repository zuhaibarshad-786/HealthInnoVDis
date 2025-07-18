import nodemailer from 'nodemailer';
import ejs from 'ejs';
import path from 'path';

export const sendBookingEmail = async (formData: any, productDetails: any) => {
  const templatePath = path.join(__dirname, '../templates/emailSummary.ejs');
  const html = await ejs.renderFile(templatePath, { formData, productDetails });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,  // Ensure you have your email credentials here
      pass: process.env.MAIL_PASS,  // Ensure you have your email credentials here
    },
  });

  const recipientEmail = "zabi213456@gmail.com";  // Send to the user’s email

  try {
    await transporter.sendMail({
      from: `"HIDI Facilities" <${process.env.MAIL_USER}>`,
      to: recipientEmail,  // Send to the user’s email
      subject: `Booking Confirmation – ${productDetails.title}`,
      html,
    });
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Email failed to send.');
  }
};

