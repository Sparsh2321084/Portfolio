# 🚀 Deploying Your Portfolio to GitHub Pages

## ✅ Setup Complete!

Your portfolio is now ready to deploy to **GitHub Pages** (100% FREE).

---

## 📋 Deployment Steps

### **Step 1: Push Code to GitHub** (if not already done)

```powershell
# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Commit
git commit -m "Portfolio ready for deployment"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/Sparsh2321084/Portfolio.git

# Push to GitHub
git push -u origin main
```

### **Step 2: Deploy to GitHub Pages**

```powershell
# Build and deploy in one command
npm run deploy
```

**That's it!** Your portfolio will be live at:
**https://Sparsh2321084.github.io/Portfolio/**

---

## ⚙️ What We Configured

✅ Added `gh-pages` package
✅ Added deployment scripts to `package.json`
✅ Configured `base` path in `vite.config.js`
✅ Set homepage URL for GitHub Pages

---

## 🔄 How to Update After Deployment

Whenever you make changes:

```powershell
# 1. Save your changes
git add .
git commit -m "Updated portfolio"
git push

# 2. Redeploy
npm run deploy
```

Changes go live in **1-2 minutes**!

---

## 📝 Before First Deployment - IMPORTANT!

**❌ DO NOT DEPLOY YET if you haven't updated:**

### **Critical Items (Fix First):**
- [ ] Email address (not `your.email@example.com`)
- [ ] LinkedIn/Telegram links (not `#` placeholders)
- [ ] Profile photo added (`/public/profile.jpg`)
- [ ] At least 1 real project with image
- [ ] Resume PDF added OR buttons removed

### **Why?**
Once deployed, recruiters might see it! First impression matters.

---

## 🎯 Deployment Checklist

### **Before Running `npm run deploy`:**

1. **Test Locally First:**
   ```powershell
   npm run build
   npm run preview
   ```
   Open http://localhost:4173/Portfolio/ and test everything

2. **Check All Links Work:**
   - Navigation
   - Project detail pages
   - Social media links
   - GitHub links
   - Certificate links

3. **Verify Images Load:**
   - Profile photo
   - Project images
   - Gallery images

4. **Test on Mobile:**
   - Open developer tools (F12)
   - Toggle device toolbar
   - Test different screen sizes

5. **Fix Critical Issues:**
   - Replace placeholder email
   - Update social links or remove them
   - Add at least 1 real project

---

## 🌐 Custom Domain (Optional)

Want **yourname.com** instead of GitHub Pages URL?

1. Buy domain ($10/year from Namecheap, Google Domains)
2. Add `CNAME` file to `/public/` folder:
   ```
   yourname.com
   ```
3. Configure DNS in domain registrar:
   ```
   Type: CNAME
   Name: www
   Value: Sparsh2321084.github.io
   ```

---

## 🐛 Troubleshooting

### **"Page not found" after deployment**
- Check GitHub repo settings → Pages → Source should be `gh-pages` branch
- Wait 2-3 minutes for first deployment

### **CSS/Images not loading**
- Make sure `base: '/Portfolio/'` is in `vite.config.js`
- Image paths should start with `/` (e.g., `/profile.jpg`)

### **404 on refresh**
- Normal for single-page apps on GitHub Pages
- Users can always go back to home page

### **Build fails**
- Check for errors in code
- Run `npm install` again
- Delete `node_modules` and reinstall

---

## 📊 After Deployment

### **Share Your Portfolio:**
- LinkedIn profile (add to "Featured" section)
- Resume (add URL)
- Email signature
- GitHub profile README
- Job applications

### **Analytics (Optional):**
Add Google Analytics to track visitors:
1. Get tracking ID from Google Analytics
2. Add to `index.html` in `<head>`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

---

## ✅ Ready to Deploy?

**If you've fixed all critical items:**

```powershell
# Deploy now!
npm run deploy
```

**If not ready yet:**
1. Update placeholder content first
2. Test locally: `npm run preview`
3. Then deploy when ready

---

## 🎉 Success!

Once deployed, your portfolio will be live at:
**https://Sparsh2321084.github.io/Portfolio/**

Share it with:
- AISense for internship application
- LinkedIn connections
- Potential employers
- Friends for feedback

**Good luck with your internship application!** 🚀
