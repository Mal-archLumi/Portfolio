# EmailJS Setup Guide

## Current Configuration

Your EmailJS credentials are already configured in the Contact form:

```javascript
Service ID: service_7ij60iq
Public Key: _eGe3_Hw7hzf2QmG_
```

## Required: Create Email Template

You need to create an email template in your EmailJS dashboard:

### Steps:

1. **Go to EmailJS Dashboard**
   - Visit: https://dashboard.emailjs.com/
   - Log in with your account

2. **Navigate to Email Templates**
   - Click "Email Templates" in the sidebar
   - Click "Create New Template"

3. **Template Configuration**

   **Template Name:** `template_default` (or any name you prefer)

   **Template Content:**
   ```
   Subject: New Contact Form Message from {{from_name}}

   From: {{from_name}}
   Email: {{from_email}}

   Message:
   {{message}}

   ---
   Sent from your portfolio contact form
   ```

4. **Template Variables**
   The form sends these variables:
   - `from_name` - Sender's name
   - `from_email` - Sender's email
   - `message` - Message content

5. **Save Template**
   - Click "Save"
   - Copy the Template ID

6. **Update Contact.jsx (if needed)**
   If your template ID is different from `template_default`, update line 42 in `/src/components/Contact.jsx`:
   
   ```javascript
   await emailjs.send(
     'service_7ij60iq',
     'YOUR_TEMPLATE_ID_HERE', // Replace this
     formData,
     'DiIq_Jyufw19_CGfy'
   );
   ```

## Testing

1. **Run Development Server**
   ```bash
   npm run dev
   ```

2. **Navigate to Contact Section**
   - Scroll to the bottom
   - Fill out the form
   - Click "SEND MESSAGE"

3. **Check Your Email**
   - You should receive the message at the email configured in EmailJS
   - Response time: instant

## Troubleshooting

### Form Not Sending

1. **Check Template ID**
   - Make sure template ID in code matches EmailJS dashboard

2. **Check Service Status**
   - Verify service is active in EmailJS dashboard
   - Check monthly quota (free tier: 200 emails/month)

3. **Check Browser Console**
   - Open DevTools (F12)
   - Look for error messages
   - Common issues:
     - CORS errors (check EmailJS settings)
     - Invalid credentials
     - Template not found

### Email Not Received

1. **Check Spam Folder**
   - EmailJS emails sometimes go to spam

2. **Verify Email Settings**
   - Check "To Email" in EmailJS service settings
   - Make sure it's your correct email

3. **Check EmailJS Dashboard**
   - Go to "Email History"
   - See if emails are being sent

## Form Features

✅ **Real-time validation**
✅ **Loading state with spinner**
✅ **Success/error messages**
✅ **Auto-clear on success**
✅ **Disabled state during submission**
✅ **6-second auto-dismiss for alerts**

## Security Notes

- Public key is safe to expose (it's meant to be public)
- Service ID is safe to expose
- Template ID is safe to expose
- Never expose your Private Key (not used in frontend)

## Rate Limiting

EmailJS free tier limits:
- 200 emails per month
- 2 emails per second

For production with high traffic, consider:
- Upgrading EmailJS plan
- Implementing backend email service
- Adding reCAPTCHA to prevent spam

---

**Status:** ✅ Form is configured and ready to use once template is created
