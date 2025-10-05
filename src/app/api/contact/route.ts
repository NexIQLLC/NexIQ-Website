import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import type { SentMessageInfo } from 'nodemailer';

// Types
interface EmailData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  domain?: string;
  description: string;
}

interface MailOptions {
  from: string;
  to: string;
  replyTo?: string;
  subject: string;
  text: string;
  html: string;
}

// This is a simple in-memory store for development
const devEmails: MailOptions[] = [];
const isDev = process.env.NODE_ENV !== 'production';

// Email configuration
const CONFIG = {
  // Sender email
  SENDER_EMAIL: process.env.SMTP_USER || 'nexiqllc.info@gmail.com',
  // Recipient emails (where contact form submissions go)
  RECIPIENT_EMAILS: [
    process.env.NEXIQ_EMAIL || 'spatel@nexiqllc.net',
    'savanp@nexiqllc.net'
  ],
  // SMTP Configuration
  SMTP: {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    },
    pool: true,
    maxConnections: 2,
    maxMessages: 5,
    rateDelta: 1000,
    rateLimit: 5
  }
};

// Create a reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  ...CONFIG.SMTP,
  connectionTimeout: 10000, // 10 seconds
  socketTimeout: 30000, // 30 seconds
  greetingTimeout: 30000, // 30 seconds
  dnsTimeout: 10000, // 10 seconds
});

export async function POST(request: Request) {
  try {
    const body = await request.json() as EmailData;
    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      domain, 
      description 
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !description) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { SENDER_EMAIL, RECIPIENT_EMAILS } = CONFIG;

    if (isDev) {
      console.log('Development - Preparing to send emails');
      console.log('Admin emails to:', RECIPIENT_EMAILS);
      console.log('Confirmation to:', email);
    }

    // Validate SMTP configuration
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('SMTP credentials are missing');
      throw new Error('Email configuration is incomplete');
    }

    // Log SMTP config (without password)
    console.log('Using SMTP server:', CONFIG.SMTP.host, 'on port', CONFIG.SMTP.port);
    console.log('Authenticating as:', CONFIG.SMTP.auth.user);
    
    // Verify SMTP connection
    try {
      console.log('Verifying SMTP connection...');
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error('SMTP connection error:', error);
      throw new Error(`Failed to connect to SMTP server: ${errorMessage}`);
    }
    
    // Create admin mail promises for all recipients
    const adminMailPromises = RECIPIENT_EMAILS.map(recipient => {
      const adminMailOptions: MailOptions = {
        from: `NexIQ Contact Form <${SENDER_EMAIL}>`,
        to: recipient,
        replyTo: email,
        subject: `New Inquiry from ${firstName} ${lastName}`,
        text: `New Inquiry:

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Domain: ${domain || 'Not specified'}

Message:
${description}

---
This email was sent from the contact form on NexIQ website.`,
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #2C2C2C; background-color: #F7F9FC;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F7F9FC;">
    <tr>
      <td align="center" valign="top" style="padding: 30px 0;">
        <table border="0" cellpadding="0" cellspacing="0" width="600" style="max-width: 600px; background: #FFFFFF; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);">
          <!-- Header -->
          <tr>
            <td style="background-color: #1A73E8; padding: 25px 30px; text-align: center;">
              <h1 style="margin: 0; font-size: 22px; font-weight: 600; color: #FFFFFF;">New Contact Form Submission</h1>
              <p style="margin: 8px 0 0; font-size: 14px; color: rgba(255, 255, 255, 0.9);">Lead Source: Website Contact Form</p>
              <p style="margin: 4px 0 0; font-size: 13px; color: rgba(255, 255, 255, 0.8);">Received: ${new Date().toLocaleString()}</p>
            </td>
          </tr>
          
          <!-- Contact Info -->
          <tr>
            <td style="padding: 30px;">
              <h2 style="margin: 0 0 15px 0; font-size: 18px; color: #1A73E8; font-weight: 600; padding-bottom: 8px; border-bottom: 1px solid #E0E6ED;">
                📇 Contact Information
              </h2>
              <table cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; width: 30%; color: #5F6368; font-weight: 500; vertical-align: top;">Name:</td>
                  <td style="padding: 8px 0; font-weight: 400; color: #2C2C2C;">${firstName} ${lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #5F6368; font-weight: 500; vertical-align: top;">Email:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #1A73E8; text-decoration: none;">${email}</a></td>
                </tr>
                ${phone ? `
                <tr>
                  <td style="padding: 8px 0; color: #5F6368; font-weight: 500; vertical-align: top;">Phone:</td>
                  <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #1A73E8; text-decoration: none;">${phone}</a></td>
                </tr>` : ''}
                ${domain ? `
                <tr>
                  <td style="padding: 8px 0; color: #5F6368; font-weight: 500; vertical-align: top;">Domain:</td>
                  <td style="padding: 8px 0;">${domain}</td>
                </tr>` : ''}
              </table>
            </td>
          </tr>
          
          <!-- Inquiry Details -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <h2 style="margin: 0 0 15px 0; font-size: 18px; color: #1A73E8; font-weight: 600; padding-bottom: 8px; border-bottom: 1px solid #E0E6ED;">
                📝 Inquiry Details
              </h2>
              <div style="background-color: #F8FAFE; border-left: 4px solid #1A73E8; padding: 15px; border-radius: 0 4px 4px 0;">
                <p style="margin: 0; color: #2C2C2C; white-space: pre-line; line-height: 1.6;">${description}</p>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 20px 30px; text-align: center; font-size: 12px; color: #70757A; background-color: #F8F9FA; border-top: 1px solid #E0E6ED;">
              <p style="margin: 0 0 8px 0;">This email was sent from the contact form on NexIQ website.</p>
              <p style="margin: 0; font-size: 11px; color: #9AA0A6;">© ${new Date().getFullYear()} NexIQ LLC. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
      };
      return transporter.sendMail(adminMailOptions);
    });

    // User confirmation email
    const userMailOptions: MailOptions = {
      from: `NexIQ LLC <${SENDER_EMAIL}>`,
      to: email,
      subject: `Thank You for Contacting NexIQ LLC${domain ? ' - ' + domain : ''}`,
      text: `Thank You for Inquiry

Hello ${firstName},

Thank you for reaching out to NexIQ LLC regarding your project inquiry. We have received your message and are excited to learn more about your needs.

Inquiry Type: ${domain || 'General Inquiry'}

Our team will review the details you've provided and get back to you within 1–3 business days with the next steps. We value your interest in partnering with us and look forward to exploring this opportunity together.

We look forward to the possibility of working together and will be in touch soon.

Best regards,
The NexIQ Team

---
Sanchit Patel | Founder
+1 (215) 262-7084
spatel@nexiqllc.net
www.nexiqllc.net

© ${new Date().getFullYear()} NexIQ LLC. All rights reserved.`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting NexIQ LLC</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #2C2C2C; background-color: #F7F9FC;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F7F9FC;">
    <tr>
      <td align="center" valign="top" style="padding: 30px 0;">
        <table border="0" cellpadding="0" cellspacing="0" width="600" style="max-width: 600px; background: #FFFFFF; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);">
          <!-- Header -->
          <tr>
            <td style="background-color: #1A73E8; padding: 35px 30px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 600; color: #FFFFFF; line-height: 1.3;">Thank You for Contacting Us</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 30px;">
              <p style="margin: 0 0 20px 0; font-size: 16px; color: #2C2C2C;">Hello ${firstName},</p>
              
              <p style="margin: 0 0 20px 0; font-size: 15px; line-height: 1.6; color: #5F6368;">
                Thank you for reaching out to NexIQ LLC regarding your project inquiry. We have received your message and are excited to learn more about your needs.
              </p>
              
              <!-- Highlight Box -->
              <div style="background-color: #E8F0FE; border-radius: 6px; padding: 16px; margin: 20px 0;">
                <p style="margin: 0 0 8px 0; font-size: 14px; font-weight: 500; color: #1A73E8;">Inquiry Type:</p>
                <p style="margin: 0; font-size: 15px; font-weight: 500; color: #0D47A1;">${domain || 'General Inquiry'}</p>
              </div>
              
              <p style="margin: 0 0 20px 0; font-size: 15px; line-height: 1.6; color: #5F6368;">
                Our team will review the details you've provided and get back to you within <strong style="color: #1A73E8;">1–3 business days</strong> with the next steps. We value your interest in partnering with us and look forward to exploring this opportunity together.
              </p>
              
              <p style="margin: 0 0 25px 0; font-size: 15px; line-height: 1.6; color: #5F6368;">
                We look forward to the possibility of working together and will be in touch soon.
              </p>
              
              <p style="margin: 0 0 5px 0; font-size: 15px; color: #2C2C2C;">Best regards,</p>
              <p style="margin: 0 0 20px 0; font-size: 15px; font-weight: 600; color: #1A73E8;">The NexIQ Team</p>
            </td>
          </tr>
          
          <!-- Signature -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <div style="border-top: 1px solid #E0E6ED; padding-top: 20px;">
                <p style="margin: 0 0 8px 0; font-size: 15px; font-weight: 600; color: #2C2C2C;">Sanchit Patel | Founder</p>
                <p style="margin: 0 0 4px 0; font-size: 14px; color: #5F6368;">
                  <a href="tel:+12152627084" style="color: #1A73E8; text-decoration: none;">+1 (215) 262-7084</a>
                </p>
                <p style="margin: 0 0 4px 0; font-size: 14px;">
                  <a href="mailto:spatel@nexiqllc.net" style="color: #1A73E8; text-decoration: none;">spatel@nexiqllc.net</a>
                </p>
                <p style="margin: 0 0 20px 0; font-size: 14px;">
                  <a href="https://www.nexiqllc.net" style="color: #1A73E8; text-decoration: none;">www.nexiqllc.net</a>
                </p>
                
                <!-- LinkedIn Link -->
                <div style="margin-top: 16px; text-align: center;">
                  <a href="https://www.linkedin.com/company/nexiqllc/" target="_blank" style="display: inline-block; text-decoration: none; color: #1A73E8; font-size: 14px; background-color: #F0F7FF; padding: 10px 20px; border-radius: 4px;">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style="width: 16px; height: 16px; margin-right: 8px; vertical-align: middle;">
                    Follow us on LinkedIn
                  </a>
                </div>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 20px 30px; text-align: center; font-size: 12px; color: #70757A; background-color: #F8F9FA; border-top: 1px solid #E0E6ED;">
              <p style="margin: 0 0 8px 0;">© ${new Date().getFullYear()} NexIQ LLC. All rights reserved.</p>
              <p style="margin: 0; font-size: 11px; color: #9AA0A6;">This is an automated message. Please do not reply to this email.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
    };

    if (isDev) {
      devEmails.push(userMailOptions);
    }

    // Send all emails in parallel
    console.log('Starting email sending process...');
    const [adminResults, userResult] = await Promise.all([
      Promise.all(adminMailPromises),
      transporter.sendMail(userMailOptions)
    ]);
    
    console.log(`Admin emails sent to ${RECIPIENT_EMAILS.length} recipients`);
    console.log('User email sent:', userResult.messageId);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Emails sent successfully',
      adminEmailIds: adminResults.map((r: SentMessageInfo) => r.messageId),
      userEmailId: userResult.messageId,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to send message';
    const errorStack = error instanceof Error ? error.stack : undefined;
    
    console.error('Error in contact form submission:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? errorStack : undefined
      },
      { status: 500 }
    );
  }
}

// Health check endpoint (optional)
export async function GET() {
  return NextResponse.json({ 
    status: 'ok',
    message: 'Contact API is running',
    timestamp: new Date().toISOString()
  });
}
