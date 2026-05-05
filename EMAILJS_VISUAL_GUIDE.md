# EmailJS Template Setup - Visual Guide

## 🎯 The Problem

Your form is configured correctly, but **the email template doesn't exist yet** in your EmailJS dashboard. This is the #1 reason forms fail.

---

## ✅ Solution: Create the Template

### Step 1: Go to EmailJS Dashboard

```
https://dashboard.emailjs.com/
```

Log in with your account.

---

### Step 2: Navigate to Email Templates

```
Dashboard → Email Templates (left sidebar)
```

You should see a list of your templates (probably empty).

---

### Step 3: Create New Template

Click the **"Create New Template"** button.

---

### Step 4: Configure Template

#### Template ID
```
template_default
```
⚠️ **IMPORTANT:** Must be exactly `template_default` (or update Contact.jsx)

#### Template Name
```
Portfolio Contact Form
```
(Can be anything, just for your reference)

#### Subject Line
```
New Contact Form Message from {{from_name}}
```

#### Email Body (Content)
```
Hello,

You have received a new message from your portfolio contact form.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FROM: {{from_name}}
EMAIL: {{from_email}}

MESSAGE:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This email was sent from your portfolio website.
To reply, use: {{from_email}}
```

#### Settings Tab

**To Email:**
```
makutualvine@gmail.com
```

**From Name:**
```
Portfolio Contact Form
```

**From Email:**
```
Use your verified email from EmailJS service
```

**Reply To:**
```
{{from_email}}
```
(This allows you to reply directly to the sender)

---

### Step 5: Test the Template

1. Click **"Test It"** button in the template editor
2. Fill in test values:
   ```
   from_name: Test User
   from_email: test@example.com
   message: This is a test message
   ```
3. Click **"Send Test Email"**
4. Check your inbox (makutualvine@gmail.com)
5. Check spam folder if not in inbox

---

### Step 6: Save Template

Click **"Save"** button (top right).

---

## 🎨 Template Variables Explained

Your form sends these variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `{{from_name}}` | Sender's name | "John Doe" |
| `{{from_email}}` | Sender's email | "john@example.com" |
| `{{message}}` | Message content | "I need a website..." |
| `{{to_email}}` | Your email | "makutualvine@gmail.com" |

Use `{{variable}}` syntax in your template to display these values.

---

## 📧 Example Email You'll Receive

```
From: Portfolio Contact Form
To: makutualvine@gmail.com
Subject: New Contact Form Message from John Doe

Hello,

You have received a new message from your portfolio contact form.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FROM: John Doe
EMAIL: john@example.com

MESSAGE:
Hi Alvine,

I'm interested in hiring you for a web development project.
Could we schedule a call to discuss?

Thanks,
John

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This email was sent from your portfolio website.
To reply, use: john@example.com
```

When you hit "Reply", it will automatically reply to john@example.com.

---

## 🔍 Verify Template Exists

After creating, verify:

1. Go to **Email Templates**
2. You should see: **"Portfolio Contact Form"** or **"template_default"**
3. Status should be: **Active** ✅
4. Click on it to edit/view

---

## 🧪 Test the Form

Now that template exists:

1. Go to your portfolio: `npm run dev`
2. Scroll to Contact section
3. Fill out the form:
   ```
   Name: Test User
   Email: your-test-email@gmail.com
   Message: Testing the contact form
   ```
4. Click **"SEND MESSAGE"**
5. Open browser console (F12)
6. Look for: `"Email sent successfully"`
7. Check your email inbox

---

## ⚠️ Common Mistakes

### ❌ Wrong Template ID
```javascript
// In EmailJS Dashboard
Template ID: template_contact

// In Contact.jsx
'template_default'  // ← Doesn't match!
```

**Fix:** Make sure IDs match exactly.

### ❌ Template Not Saved
Created template but forgot to click "Save".

**Fix:** Always click "Save" after creating/editing.

### ❌ Service Not Connected
Template exists but email service is disconnected.

**Fix:** Go to Email Services → Verify service is connected.

### ❌ Wrong Email Address
Template sends to wrong email.

**Fix:** Check "To Email" in template settings.

---

## 🎯 Quick Checklist

Before testing form:

- [ ] Logged into EmailJS dashboard
- [ ] Created template with ID: `template_default`
- [ ] Added all variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
- [ ] Set "To Email": `makutualvine@gmail.com`
- [ ] Set "Reply To": `{{from_email}}`
- [ ] Clicked "Save"
- [ ] Sent test email from dashboard
- [ ] Received test email in inbox

If all checked, form will work! ✅

---

## 🆘 Still Having Issues?

### Check These:

1. **Template ID matches exactly**
   - Dashboard: `template_default`
   - Code: `template_default`
   - Case-sensitive!

2. **Service is active**
   - Email Services → service_7ij60iq → Status: Active

3. **Public key is correct**
   - Account → API Keys → Public Key: `_eGe3_Hw7hzf2QmG_`

4. **Monthly limit not exceeded**
   - Dashboard → Usage → Check remaining emails

5. **Browser console shows no errors**
   - F12 → Console → No red errors

---

## 📞 Need Help?

1. **Check console logs** - Press F12, look for errors
2. **Test in dashboard** - If dashboard test works, form should too
3. **EmailJS support** - support@emailjs.com
4. **Direct email** - mailto:makutualvine@gmail.com

---

## ✅ Success!

You'll know it's working when:

1. ✅ Form submits without errors
2. ✅ Green success message appears
3. ✅ Console shows: "Email sent successfully"
4. ✅ Email arrives in your inbox
5. ✅ You can reply directly to sender

---

**Next Step:** Create the template in EmailJS dashboard, then test the form!
