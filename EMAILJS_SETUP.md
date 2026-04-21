# EmailJS Setup Guide

The contact form in this portfolio uses EmailJS to send emails directly to your inbox. Follow these steps to configure it:

## 1. Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Verify your email address

## 2. Set Up Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Connect your email account and grant necessary permissions
5. Note down your **Service ID**

## 3. Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Set up your template with these variables:
   - `{{name}}` - Contact's full name
   - `{{email}}` - Contact's email address
   - `{{phone}}` - Contact's phone number
   - `{{company}}` - Company/brand name
   - `{{projectType}}` - Type of project
   - `{{budget}}` - Estimated budget
   - `{{timeline}}` - Preferred timeline
   - `{{message}}` - Project details/message

4. Set the "To Email" field to your email address where you want to receive contact form submissions
5. Note down your **Template ID**

## 4. Get Your Public Key

1. Go to "Account" → "General"
2. Copy your **Public Key**

## 5. Configure Environment Variables

Update your `.env` file with the actual values:

```env
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
VITE_EMAILJS_SERVICE_ID=your_actual_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id_here
```

## 6. Test the Form

1. Start your development server: `npm run dev`
2. Fill out the contact form on your portfolio
3. Check your email for the test message

## Troubleshooting

- Make sure all environment variables are set correctly
- Check the browser console for any EmailJS errors
- Verify your email service is properly connected in EmailJS
- Ensure your email template uses the correct variable names

The contact form will now send emails directly to your inbox whenever someone submits the form!</content>
<parameter name="filePath">d:\portfolio\portfolio\EMAILJS_SETUP.md