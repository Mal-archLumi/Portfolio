# EmailJS Troubleshooting & Setup Guide

## ✅ What Was Fixed

1. **Updated to @emailjs/browser** (newer, more reliable package)
2. **Added proper initialization** with `emailjs.init()`
3. **Enhanced error handling** with detailed console logging
4. **Added `to_email` parameter** for better template compatibility

---

## 🔧 Current Configuration

```javascript
Service ID: service_7ij60iq
Public Key: _eGe3_Hw7hzf2QmG_
Template ID: template_default
Your Email: makutualvine@gmail.com
```

---

## 📋 Step-by-Step Setup (REQUIRED)

### Step 1: Verify EmailJS Account

1. Go to https://dashboard.emailjs.com/
2. Log in with your account
3. Verify your email address is confirmed

### Step 2: Check Service Configuration

1. Click **"Email Services"** in sidebar
2. Find service: `service_7ij60iq`
3. Verify it's **connected** and **active**
4. Check the "To Email" is set to: `makutualvine@gmail.com`

### Step 3: Create Email Template (CRITICAL)

This is the most common issue - the template must exist!

1. Click **"Email Templates"** in sidebar
2. Click **"Create New Template"**
3. Set Template ID: `template_default`
4. Configure template:

```
Subject: New Contact Form Message from {{from_name}}

Hello,

You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
Reply to: {{from_email}}
```

5. **IMPORTANT:** In the template settings, make sure these variables are mapped:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email  
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email (optional)

6. Click **"Save"**

### Step 4: Test in EmailJS Dashboard

1. Go to your template
2. Click **"Test It"** button
3. Fill in test values
4. Click **"Send Test Email"**
5. Check your inbox (and spam folder!)

If test email works, the form will work too.

---

## 🐛 Debugging Steps

### Check Browser Console

1. Open your portfolio in browser
2. Press **F12** to open DevTools
3. Go to **Console** tab
4. Fill out the contact form
5. Click **"SEND MESSAGE"**
6. Look for these messages:

**Success:**
```
Attempting to send email with data: {from_name: "...", from_email: "...", message: "..."}
Email sent successfully: {status: 200, text: "OK"}
```

**Error:**
```
EmailJS Error: {text: "...", status: ..., message: "..."}
Error details: {...}
```

### Common Errors & Solutions

#### Error: "Template ID not found"
**Problem:** Template doesn't exist or ID is wrong
**Solution:** 
- Create template with ID: `template_default`
- Or update Contact.jsx line 52 with your actual template ID

#### Error: "Service ID not found"
**Problem:** Service doesn't exist or is inactive
**Solution:**
- Verify service ID: `service_7ij60iq`
- Check service is active in dashboard

#### Error: "Public key is invalid"
**Problem:** Wrong public key
**Solution:**
- Verify public key: `_eGe3_Hw7hzf2QmG_`
- Get correct key from EmailJS dashboard → Account → API Keys

#### Error: "Failed to send"
**Problem:** Network issue or CORS
**Solution:**
- Check internet connection
- Verify EmailJS service is not down
- Check browser console for CORS errors

#### Error: "Monthly limit exceeded"
**Problem:** Free tier limit reached (200 emails/month)
**Solution:**
- Wait for next month
- Upgrade EmailJS plan
- Use alternative email service

---

## 🧪 Testing Checklist

### Before Testing
- [ ] EmailJS account verified
- [ ] Service `service_7ij60iq` is active
- [ ] Template `template_default` exists
- [ ] Template has correct variables
- [ ] Test email sent successfully from dashboard

### During Testing
- [ ] Open browser console (F12)
- [ ] Fill out form with real data
- [ ] Click "SEND MESSAGE"
- [ ] Check console for logs
- [ ] Wait for success/error message

### After Testing
- [ ] Check email inbox
- [ ] Check spam folder
- [ ] Verify email content is correct
- [ ] Test reply-to address works

---

## 📧 Email Template Variables

The form sends these variables to your template:

```javascript
{
  from_name: "John Doe",           // User's name
  from_email: "john@example.com",  // User's email
  message: "Hello, I need...",     // User's message
  to_email: "makutualvine@gmail.com" // Your email
}
```

Make sure your template uses `{{variable_name}}` syntax.

---

## 🔍 Advanced Debugging

### Enable Verbose Logging

The Contact component now logs everything to console:

1. **Before sending:**
   ```
   Attempting to send email with data: {...}
   ```

2. **On success:**
   ```
   Email sent successfully: {status: 200, text: "OK"}
   ```

3. **On error:**
   ```
   EmailJS Error: {...}
   Error details: {text: "...", status: ..., message: "..."}
   ```

### Check Network Tab

1. Open DevTools → Network tab
2. Submit form
3. Look for request to `api.emailjs.com`
4. Check request payload and response

### Verify API Keys

Go to EmailJS Dashboard → Account → API Keys:
- Public Key should be: `_eGe3_Hw7hzf2QmG_`
- If different, update Contact.jsx line 51

---

## 🚀 Alternative: Manual Template ID

If `template_default` doesn't work, get your actual template ID:

1. Go to EmailJS Dashboard → Email Templates
2. Click on your template
3. Copy the Template ID (e.g., `template_abc123`)
4. Update Contact.jsx:

```javascript
// Line 52 - Change this:
'template_default',

// To your actual template ID:
'template_abc123',
```

---

## 📱 Testing on Different Devices

### Desktop
- Chrome: ✅ Should work
- Firefox: ✅ Should work
- Safari: ✅ Should work
- Edge: ✅ Should work

### Mobile
- iOS Safari: ✅ Should work
- Chrome Android: ✅ Should work
- Samsung Internet: ✅ Should work

---

## 🆘 Still Not Working?

### Quick Fixes

1. **Clear browser cache**
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

2. **Try incognito/private mode**
   - Rules out extension conflicts

3. **Check EmailJS status**
   - Visit: https://status.emailjs.com/

4. **Verify monthly quota**
   - Dashboard → Usage
   - Free tier: 200 emails/month

### Get Help

1. **Check console logs** - Most errors show here
2. **Test in EmailJS dashboard** - If dashboard works, form should too
3. **Contact EmailJS support** - support@emailjs.com
4. **Use direct email** - mailto:makutualvine@gmail.com

---

## ✅ Success Indicators

You'll know it's working when:

1. ✅ Form shows "SENDING..." spinner
2. ✅ Green success message appears
3. ✅ Form fields clear automatically
4. ✅ Email arrives in your inbox
5. ✅ Console shows: "Email sent successfully"

---

## 📊 Expected Behavior

### Successful Send
```
1. User fills form
2. Clicks "SEND MESSAGE"
3. Button shows spinner + "SENDING..."
4. Console: "Attempting to send email..."
5. Console: "Email sent successfully"
6. Green alert: "Message sent successfully!"
7. Form clears
8. Alert auto-dismisses after 8 seconds
9. Email arrives in inbox
```

### Failed Send
```
1. User fills form
2. Clicks "SEND MESSAGE"
3. Button shows spinner + "SENDING..."
4. Console: "Attempting to send email..."
5. Console: "EmailJS Error: ..."
6. Red alert: "Failed to send message..."
7. Form stays filled (user can retry)
8. Alert auto-dismisses after 8 seconds
```

---

## 🔐 Security Notes

- ✅ Public key is safe to expose (it's meant to be public)
- ✅ Service ID is safe to expose
- ✅ Template ID is safe to expose
- ❌ Never expose Private Key (not used in frontend)
- ✅ EmailJS handles rate limiting automatically
- ✅ No sensitive data stored in frontend

---

## 📝 Quick Reference

```javascript
// Current Configuration
Service ID:  service_7ij60iq
Public Key:  _eGe3_Hw7hzf2QmG_
Template ID: template_default
Your Email:  makutualvine@gmail.com

// Package
@emailjs/browser (latest)

// Form Fields
from_name   → User's name
from_email  → User's email
message     → User's message
to_email    → Your email (makutualvine@gmail.com)
```

---

**Status:** ✅ Code is correct and ready
**Next Step:** Create template in EmailJS dashboard
**Test:** Fill form → Check console → Check email
