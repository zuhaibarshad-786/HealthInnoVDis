import { Request, Response } from 'express';
import { sendBookingEmail } from '../utils/mailer';
export const handleBookingRequest = async (req: Request, res: Response) => {
  const { formData, productDetails } = req.body;
  
  console.log('Received formData:', formData);
  console.log('Received productDetails:', productDetails);

  try {
    // Send the booking confirmation email
    await sendBookingEmail(formData, productDetails);
    res.status(200).json({ success: true, message: 'Booking request received and email sent!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Email failed to send.' });
  }
};
