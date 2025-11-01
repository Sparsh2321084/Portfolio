# 🚀 Quick Start Guide

## Your Portfolio is Live!
**Local URL**: http://localhost:5173/

---

## ✅ What's Done

✓ Modern React portfolio with professional design  
✓ Smooth animations with Framer Motion  
✓ 5 main sections: Hero, Projects, Skills, Gallery, Contact  
✓ Fully responsive (mobile, tablet, desktop)  
✓ Dark theme with gradient accents  
✓ Ready for deployment  

---

## 📝 Next Steps (In Order)

### 1. Add Your Images (PRIORITY)
```
public/
├── projects/       ← Add project photos/schematics here
├── gallery/        ← Add PCB/debug screenshots here
└── resume.pdf      ← Add your resume PDF here
```

### 2. Update Personal Info
Edit these files:
- `src/components/Hero.jsx` - Name, title, social links
- `src/components/Contact.jsx` - Email, GitHub, LinkedIn

### 3. Add Your Projects
Edit: `src/data/portfolioData.js`
- Update the 3 example projects with YOUR projects
- Include: tech stack, features, power budget, BOM

### 4. Update Skills
Edit: `src/data/portfolioData.js`
- Adjust skill levels (0-100)
- Add/remove skills as needed

---

## 🎨 Key Files to Edit

| File | What to Update |
|------|----------------|
| `src/components/Hero.jsx` | Your name, tagline, description |
| `src/components/Contact.jsx` | Email, social media links |
| `src/data/portfolioData.js` | Projects, skills, gallery items |
| `public/resume.pdf` | Your actual resume |

---

## 💻 Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Stop the server
Ctrl + C
```

---

## 🌐 Deployment Options

### Vercel (Recommended - Free)
1. Push code to GitHub
2. Go to vercel.com
3. Import your repository
4. Deploy! ✨

### Netlify (Alternative - Free)
1. Run `npm run build`
2. Go to netlify.com
3. Drag & drop the `dist` folder

### GitHub Pages
1. Install: `npm install --save-dev gh-pages`
2. Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Run: `npm run deploy`

---

## 🎯 Portfolio Highlights for AISense

When showcasing to recruiters, emphasize:

1. **Real Hardware Projects** - Not just software
2. **Power Budgets** - Shows field-ready thinking
3. **BOMs** - Demonstrates cost awareness
4. **Problem-First Approach** - Each project solves real issues
5. **Clean Documentation** - Professional presentation
6. **Modern Tech Stack** - React, animations, responsive

---

## 📊 File Structure

```
portfolio/
├── src/
│   ├── components/     # All UI components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Gallery.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── portfolioData.js  # ← Edit your content here
│   ├── App.jsx
│   └── index.css
├── public/
│   ├── projects/      # ← Add images here
│   ├── gallery/       # ← Add images here
│   └── resume.pdf     # ← Add resume here
└── package.json
```

---

## 🆘 Troubleshooting

**Port 5173 already in use?**
```bash
npx kill-port 5173
npm run dev
```

**Images not showing?**
- Check file names match (case-sensitive)
- Ensure images are in `/public/` folder
- Clear browser cache (Ctrl + Shift + R)

**Dependencies error?**
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 🎨 Color Customization

Want different colors? Find & replace in all `.css` files:

- `#667eea` → Your primary color
- `#764ba2` → Your secondary color
- `#0f172a` → Your background color

---

## 📋 Checklist Before Deployment

- [ ] Updated name and personal info
- [ ] Added at least 3 real projects
- [ ] Uploaded project images
- [ ] Uploaded gallery images
- [ ] Added resume.pdf
- [ ] Updated all social media links
- [ ] Tested on mobile
- [ ] No console errors
- [ ] Fast loading (< 3 seconds)

---

## 📚 Documentation

- **Full Guide**: See `CUSTOMIZATION_GUIDE.md`
- **README**: See `README.md`
- **React Docs**: https://react.dev
- **Framer Motion**: https://www.framer.com/motion

---

## 🎉 You're Ready!

Your portfolio is professional, modern, and ready to impress recruiters!

**Current Status**: Development server running at http://localhost:5173/

**Next**: Start customizing with your own content! 🚀

---

Built with ⚡ by Sparsh | Powered by React + Vite
