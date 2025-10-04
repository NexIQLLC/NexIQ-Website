/*
  Contact form backend powered by Express.js and Nodemailer
  --------------------------------------------------------
  • Receives POST requests at /contact
  • Validates payload
  • Sends form details to the company inbox (jmakwana@nexiqllc.net)
  • Sends an auto-reply back to the user
  • Uses async/await, proper error handling and Outlook SMTP configuration
*/

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const {
  SMTP_HOST = 'smtp.gmail.com',
  SMTP_PORT = 587,
  SMTP_SECURE = false, // STARTTLS for port 587, switch to true for port 465
  SMTP_USER = 'nexiqllc.info@gmail.com',
  SMTP_PASSWORD = 'bpij sdnz wzwb ikzf',
} = process.env;

if (!SMTP_USER || !SMTP_PASSWORD) {
  console.error('\u274C  SMTP credentials are missing. Please set SMTP_USER and SMTP_PASSWORD in your environment.');
  process.exit(1);
}

// Initialise mail transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: SMTP_SECURE === 'true' || Number(SMTP_PORT) === 465, // true for port 465 (SSL), false for 587 + STARTTLS
  requireTLS: !(SMTP_SECURE === 'true' || Number(SMTP_PORT) === 465),
  auth: {
    user: SMTP_USER.trim(),
    pass: SMTP_PASSWORD.trim(),
  },
});

// Verify connection configuration at start-up
(async () => {
  try {
    await transporter.verify();
    console.log('\u2705  SMTP connection successful. Ready to send emails.');
  } catch (err) {
    console.error('\u274C  Unable to verify SMTP configuration:', err);
  }
})();

const app = express();
app.use(express.json());
app.use(cors()); // Allow requests from any origin; tweak as needed

// Map domain values to their display names
const domainDisplayNames = {
  'HRIS_CRM_Integration': 'HRIS & CRM Integration',
  'API_Creation': 'API Creation',
  'Automation_Development': 'Automation Development',
  'Web_App_Development': 'Web App Development',
  'AI_Automation': 'AI-based Automation',
  'Other': 'Other'
};

app.post('/contact', async (req, res) => {
  const { firstName, lastName = '', email, phone = 'Not provided', domain, description } = req.body || {};
  const displayDomain = domainDisplayNames[domain] || domain;

  // Basic validation
  if (!firstName || !email || !domain || !description) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  try {
    /* 1. Send internal notification */
    await transporter.sendMail({
      from: `NexIQ Website <${SMTP_USER}>`,
      to: ['spatel@nexiqllc.net', 'savanp@nexiqllc.net'],
      replyTo: email,
      subject: `New Lead: ${firstName} ${lastName} - ${domain.replace(/&/g, 'and')}`.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <div style="background-color: #2563eb; padding: 20px; color: white;">
            <h1 style="margin: 0; font-size: 24px;">New Website Inquiry</h1>
          </div>
          
          <div style="padding: 20px; border-left: 1px solid #e5e7eb; border-right: 1px solid #e5e7eb;">
            <div style="background-color: #f8fafc; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
              <p style="margin: 5px 0; font-size: 16px;"><strong>Lead Source:</strong> Website Contact Form</p>
              <p style="margin: 5px 0; font-size: 16px;"><strong>Received:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <h3 style="color: #2563eb; margin-top: 0;">Contact Information</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; width: 120px;"><strong>Name:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Email:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Phone:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; vertical-align: top;"><strong>Domain:</strong></td>
                <td style="padding: 8px 0;"><strong style="color: #2563eb; white-space: pre-wrap;">${displayDomain.replace(/&/g, '&amp;')}</strong></td>
              </tr>
            </table>
            
            <h3 style="color: #2563eb; margin-top: 20px;">Inquiry Details</h3>
            <div style="background-color: #f8fafc; padding: 15px; border-radius: 4px; border-left: 4px solid #2563eb;">
              <p style="margin: 0; line-height: 1.6;">${description.replace(/\n/g, '<br/>')}</p>
            </div>
          </div>
          
          <div style="background-color: #f1f5f9; padding: 15px 20px; text-align: center; font-size: 14px; color: #64748b; border: 1px solid #e5e7eb; border-top: none;">
            <p style="margin: 5px 0;">This is an automated message from NexIQ LLC's website contact form.</p>
          </div>
        </div>
      `,
    });

    /* 2. Send auto-reply to the visitor */
    await transporter.sendMail({
      from: `NexIQ LLC <${SMTP_USER}>`,
      to: email,
      subject: `Thank you for your inquiry - ${displayDomain.replace(/&/g, '&amp;')}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333333; line-height: 1.6;">
          <!-- Header -->
          <div style="background-color: #1e40af; padding: 25px 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">Thank You for Contacting NexIQ LLC</h1>
          </div>
          
          <!-- Content -->
          <div style="padding: 30px; background-color: #ffffff; border-left: 1px solid #e5e7eb; border-right: 1px solid #e5e7eb;">
            <p style="margin: 0 0 20px 0; color: #1f2937;">Hello ${firstName},</p>
            
            <p style="margin: 0 0 20px 0; color: #1f2937;">Thank you for reaching out to NexIQ LLC regarding your project inquiry. We have received your message and are excited to learn more about your needs.</p>
            
            <div style="background-color: #f3f4f6; border-left: 4px solid #1e40af; padding: 15px; margin: 20px 0; border-radius: 0 4px 4px 0;">
              <p style="margin: 0; color: #1e40af; font-weight: 600; font-size: 16px;">Inquiry Type: ${displayDomain.replace(/&/g, '&amp;')}</p>
            </div>
            
            <p style="margin: 20px 0; color: #1f2937;">Our team will review the details you've provided and get back to you within <strong>1–3 business days</strong> with the next steps. We value your interest in partnering with us and look forward to exploring this opportunity together.</p>
                       
            <p style="margin: 25px 0 15px 0; color: #1f2937;">We look forward to the possibility of working together and will be in touch soon.</p>
            
            <p style="margin: 0 0 5px 0; color: #1f2937;">Best regards,</p>
            <p style="margin: 0 0 25px 0; color: #1f2937;">The NexIQ Team</p>
            
            <!-- Signature -->
            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px;">
              <div style="text-align: right;">
                <p style="margin: 0 0 5px 0; font-size: 15px; font-weight: 600; color: #1e40af;">Sanchit Patel | Founder</p>
                <p style="margin: 0 0 5px 0; font-size: 14px; color: #4b5563;">+1 (215) 262-7084</p>
                <p style="margin: 0 0 5px 0; font-size: 14px;">
                  <a href="mailto:spatel@nexiqllc.net" style="color: #1e40af; text-decoration: none;">spatel@nexiqllc.net</a>
                </p>
                <p style="margin: 0; font-size: 14px;">
                  <a href="https://www.nexiqllc.net" style="color: #1e40af; text-decoration: none;">www.nexiqllc.net</a>
                </p>
              </div>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #f9fafb; padding: 15px 30px; text-align: center; font-size: 12px; color: #6b7280; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <!-- Social Links -->
            <div style="margin: 10px 0 15px 0;">
              <a href="https://www.linkedin.com/company/nexiqllc/" target="_blank" style="display: inline-block; margin: 0 5px; text-decoration: none;">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" style="width: 24px; height: 24px; vertical-align: middle;" />
              </a>
            </div>
            
            <p style="margin: 5px 0;">© ${new Date().getFullYear()} NexIQ LLC. All rights reserved.</p>
            <p style="margin: 5px 0; font-size: 11px; color: #9ca3af;">
              This is an automated message. Please do not reply to this email.
            </p>
          </div>
        </div>
      `,
    });

    return res.json({ message: 'Emails sent successfully.' });
  } catch (err) {
    console.error('Error while sending emails:', err);
    return res.status(500).json({ error: 'Failed to send emails. Please try again later.' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`\u2728  Contact form server running on http://localhost:${PORT}`));
